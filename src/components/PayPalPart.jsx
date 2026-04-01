import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPart = ({ prix, titre, eventId, onSuccess }) => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  if (!prix) return <p className="text-red-500 text-xs text-center">Prix non défini</p>;

  return (
    <PayPalButtons
      style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: titre || "Réservation Dardania Boxing",
              amount: { value: prix.toString() },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        
        try {
          // Connexion avec ton API Render ou Localhost
          await fetch('http://localhost:8080/api/payments/confirm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: user?.id || "guest",
              eventId: eventId,
              orderId: order.id,
              montant: prix
            })
          });
        } catch (error) {
          console.error("Erreur Backend:", error);
        }

        if (onSuccess) onSuccess();
      }}
    />
  );
};

export default PayPalPart;