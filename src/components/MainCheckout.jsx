import { useOutletContext } from "react-router-dom";
import { useState, useMemo } from "react";
import CardCart from "./CardCart";
import ThankYouC from "./ThankYouC";

// Material UI
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  TextField,
  Paper,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const steps = ["Prodotti", "Dati", "Recap", "Conferma"];

/* -------------------------------
   Custom StepConnector con transizione
-------------------------------- */
const WhiteConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 23 },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "rgba(255,255,255,0.4)",
    borderTopWidth: 3,
    borderRadius: 1,
    transition: "all 0.4s ease-in-out",
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.success.main,
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.success.main,
  },
}));

/* -------------------------------
   Custom StepIcon (cerchi stepper)
-------------------------------- */
const StepIconRoot = styled("div")(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 45,
  height: 45,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "1rem",
  border: "3px solid white",
  backgroundColor: "transparent",
  transition: "all 0.6s ease-in-out",
  color: "white",
  ...(ownerState.active && {
    backgroundColor: theme.palette.success.main,
    borderColor: theme.palette.success.main,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.success.main,
    borderColor: theme.palette.success.main,
  }),
}));

function CustomStepIcon(props) {
  const { active, completed, className, icon } = props;
  return (
    <StepIconRoot ownerState={{ active, completed }} className={className}>
      {icon}
    </StepIconRoot>
  );
}

/* -------------------------------
   Custom StepLabel (testo sotto step)
-------------------------------- */
const CustomStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) =>
    prop !== "activeStepIndex" && prop !== "index",
  })
  (({ activeStepIndex, index }) => ({
    "& .MuiStepLabel-label": {
      color: activeStepIndex >= index ? "white" : "gray",
      fontWeight: "bold",
      fontSize: "0.9rem",
    },
    "&& .MuiStepLabel-label.Mui-active": {
      color: "white",
    },
    "&& .MuiStepLabel-label.Mui-completed": {
      color: "white",
    },
  }));

export default function MainCheckout({ showLink = true }) {
  const { productCart, setProductCart } = useOutletContext();

  // Stati form
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressShipping, setAddressShipping] = useState("");
  const [phone, setPhone] = useState("");
  const [discountCode, setDiscountCode] = useState("");

  // Info sul codice sconto se valido
  const [discountData, setDiscountData] = useState(null);

  // Errori e messaggi dinamici
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Stepper state
  const [ordineEffettuato, setOrdineEffettuato] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  /* -------------------------------
     Calcoli principali
  -------------------------------- */
  // Subtotale carrello
  const totalAmount = useMemo(() => {
    return productCart.reduce((sum, product) => {
      const quantity = product.quantity || 1;
      return sum + product.price * quantity;
    }, 0);
  }, [productCart]);

  // Applica eventuale sconto
  const discountedTotal = useMemo(() => {
    if (!discountData) return totalAmount;
    if (discountData) {
      return totalAmount * (1 - discountData.value / 100);
    }
    return totalAmount;
  }, [discountData, totalAmount]);

  // Calcola costo spedizione (gratis sopra i 50€)
  const shippingCost = discountedTotal > 50 ? 0 : 4.99;

  // Totale finale = sconto + spedizione
  const finalTotal = discountedTotal + shippingCost;

  /* -------------------------------
     Validazione step 2 con fetch al backend
  -------------------------------- */
  const validateStep2 = async () => {
    const newErrors = {};

    if (!userName.trim() || userName.length < 2)
      newErrors.userName = "Inserisci un nome valido";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userEmail.trim() || !emailRegex.test(userEmail))
      newErrors.userEmail = "Inserisci una email valida";

    if (!addressShipping.trim() || addressShipping.length < 5)
      newErrors.addressShipping = "Indirizzo di fatturazione obbligatorio";

    if (!address.trim() || address.length < 5)
      newErrors.address = "Indirizzo di spedizione obbligatorio";

    const phoneRegex = /^[0-9]{7,}$/;
    if (!phone.trim() || !phoneRegex.test(phone))
      newErrors.phone = "Inserisci un numero di telefono valido";

    // Verifica codice sconto se presente
    if (discountCode.trim()) {
      try {
        const res = await fetch(
          `http://localhost:3030/api/discoutCodes/${discountCode}`
        );
        if (!res.ok) {
          newErrors.discountCode = "Codice sconto non valido o già usato";
          setDiscountData(null);
        } else {
          const data = await res.json();
          setDiscountData(data);
        }
      } catch (error) {
        newErrors.discountCode = "Errore durante la verifica del codice";
        setDiscountData(null);
      }
    } else {
      setDiscountData(null);
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage(
        "⚠️ Compila correttamente: " + Object.keys(newErrors).join(", ")
      );
      return false;
    }

    setMessage("");
    return true;
  };

  /* -------------------------------
     Navigazione step
  -------------------------------- */
  const handleNext = async () => {
    if (activeStep === 1) {
      const isValid = await validateStep2();
      if (!isValid) return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    setErrors({});
    setMessage("");
  };

  /* -------------------------------
     Invio ordine al backend
  -------------------------------- */
  const handleSubmit = async () => {
    const items = productCart.map((product) => ({
      id_order: product.id,
      quantity: product.quantity || 1,
    }));

    const payload = {
      order_date: new Date().toISOString().split("T")[0],
      status: "paid",
      user_name: userName,
      user_email: userEmail,
      address,
      address_shipping: addressShipping,
      phone,
      discount_code: discountCode || null,
      items,
      total: finalTotal, // 👈 totale finale con sconto + spedizione
    };

    try {
      const res = await fetch("http://localhost:3030/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Errore durante l'invio dell'ordine");

      setOrdineEffettuato(true);
      setProductCart([]);
      setActiveStep(3);
    } catch (error) {
      setOrdineEffettuato(false);
      setMessage("❌ " + error.message);
    }
  };

  /* -------------------------------
     Stile input personalizzato
  -------------------------------- */
  const getInputStyle = (value) => ({
    color: "white",
    borderBottom: value
      ? "2px solid white"
      : "1px solid rgba(255,255,255,0.4)",
  });

  return (
    <main style={{ padding: "2rem 0" }}>
      <div className="container mt-5 py-3">
        {/* Stepper */}
        <Box sx={{ width: "100%", mb: 4 }}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<WhiteConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <CustomStepLabel
                  StepIconComponent={CustomStepIcon}
                  activeStepIndex={activeStep}
                  index={index}
                >
                  {label}
                </CustomStepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Paper
          sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#1B152C" }}
          elevation={3}
        >
          {/* Step 1 */}
          {activeStep === 0 && (
            <CardCart
              productCart={productCart}
              setProductCart={setProductCart}
              showLink={false}
            />
          )}

          {/* Step 2 */}
          {activeStep === 1 && (
            <Box
              component="form"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
                minHeight: "35vh",
              }}
            >
              {/* Nome */}
              <TextField
                label="Nome completo"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
                required
                error={!!errors.userName}
                helperText={errors.userName}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: getInputStyle(userName) }}
              />

              {/* Email */}
              <TextField
                label="Email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                fullWidth
                required
                error={!!errors.userEmail}
                helperText={errors.userEmail}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: getInputStyle(userEmail) }}
              />

              {/* Indirizzo fatturazione */}
              <TextField
                label="Indirizzo di fatturazione"
                value={addressShipping}
                onChange={(e) => setAddressShipping(e.target.value)}
                fullWidth
                required
                error={!!errors.addressShipping}
                helperText={errors.addressShipping}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: getInputStyle(addressShipping) }}
              />

              {/* Indirizzo spedizione */}
              <TextField
                label="Indirizzo di spedizione"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                required
                error={!!errors.address}
                helperText={errors.address}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: getInputStyle(address) }}
              />

              {/* Telefono */}
              <TextField
                label="Numero di telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                required
                error={!!errors.phone}
                helperText={errors.phone}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: getInputStyle(phone) }}
              />

              {/* Codice sconto */}
              <TextField
                label="Codice sconto (opzionale)"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                fullWidth
                error={!!errors.discountCode}
                helperText={errors.discountCode}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: getInputStyle(discountCode) }}
              />
            </Box>
          )}

          {/* Step 3 */}
          {activeStep === 2 && (
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                color="white"
                textAlign="center"
              >
                📋 Riepilogo ordine
              </Typography>

              {/* Dati cliente */}
              <Paper sx={{ p: 2, mb: 3, backgroundColor: "#222" }} elevation={2}>
                <Typography variant="subtitle1" color="white" gutterBottom>
                  👤 Dati cliente
                </Typography>
                <Typography color="white">
                  <b>Nome:</b> {userName}
                </Typography>
                <Typography color="white">
                  <b>Email:</b> {userEmail}
                </Typography>
                <Typography color="white">
                  <b>Fatturazione:</b> {addressShipping}
                </Typography>
                <Typography color="white">
                  <b>Spedizione:</b> {address}
                </Typography>
                <Typography color="white">
                  <b>Telefono:</b> {phone}
                </Typography>
                {discountData && (
                  <Typography color="white">
                    <b>Codice sconto valido:</b> {discountCode}
                  </Typography>
                )}
              </Paper>

              {/* Prodotti */}
              <Paper sx={{ p: 2, mb: 3, backgroundColor: "#222" }} elevation={2}>
                <Typography variant="subtitle1" color="white" gutterBottom>
                  🛒 Prodotti nel carrello
                </Typography>
                {productCart.map((prod, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      py: 1,
                    }}
                  >
                    <Typography color="white">{prod.name}</Typography>
                    <Typography color="white">x{prod.quantity || 1}</Typography>
                    <Typography color="white">
                      € {(prod.price * (prod.quantity || 1)).toFixed(2)}
                    </Typography>
                  </Box>
                ))}
              </Paper>

              {/* Totali */}
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography color="white" variant="subtitle1">
                  Subtotale: € {totalAmount.toFixed(2)}
                </Typography>

                {discountData && (
                  <Typography
                    textAlign="center"
                    sx={{ mt: 1 }}
                    color="lightgreen"
                  >
                    💸 Sconto applicato (
                    {`${discountData.value}%`}
                    )
                  </Typography>
                )}

                <Typography color="white" sx={{ mt: 1 }}>
                  🚚 Spedizione:{" "}
                  {shippingCost === 0
                    ? "Gratis"
                    : `€ ${shippingCost.toFixed(2)}`}
                </Typography>

                <Typography
                  variant="h5"
                  textAlign="center"
                  sx={{ mt: 2, fontWeight: "bold" }}
                  color="white"
                >
                  Totale: € {finalTotal.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          )}

          {/* Step 4 */}
          {activeStep === 3 && (
            <Box textAlign="center">
              {ordineEffettuato ? (
                <>
                  <Typography variant="h6" gutterBottom color="white">
                    ✅ Ordine effettuato con successo!
                  </Typography>
                  <Typography color="white">
                    Riceverai un’email di conferma con il riepilogo dell’ordine
                  </Typography>
                  <ThankYouC />
                </>
              ) : (
                <Typography variant="h6" color="white">
                  ❌ Ordine non effettuato
                </Typography>
              )}
            </Box>
          )}

          {/* Pulsanti navigazione */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Indietro
            </Button>
            {activeStep === 2 ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Conferma e Paga
              </Button>
            ) : activeStep < 2 ? (
              <Button variant="contained" onClick={handleNext}>
                Avanti
              </Button>
            ) : null}
          </Box>

          {/* Messaggi dinamici */}
          {message && (
            <Typography align="center" sx={{ mt: 2 }} color="white">
              {message}
            </Typography>
          )}
        </Paper>
      </div>
    </main>
  );
}
