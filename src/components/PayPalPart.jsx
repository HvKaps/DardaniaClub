import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPart = ({ prix, titre, eventId, onSuccess }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{ description: titre, amount: { value: prix.toString() } }]
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        
        // C'EST ICI QU'ON ENREGISTRE EN BASE
        await fetch('http://localhost:8080/api/payments/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            eventId: eventId,
            orderId: order.id,
            montant: prix
          })
        });

        onSuccess(); // Déclenche l'alert et le mail
      }}
    />
  );
};