import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'---Pay to eat---'} />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;