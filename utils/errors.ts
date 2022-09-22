
const errorAPIErrors = (error: any) => {
  return error && error.apiErrors ? error.apiErrors : [];
};

export const isStripeError = (error: any) => {
  return errorAPIErrors(error).some((apiError: any) => {
    // Stripe doesn't seem to give an error code for this specific
    // case, so we have to recognize it from the message.
    return !!(apiError.meta && apiError.meta.stripeMessage);
  });
};