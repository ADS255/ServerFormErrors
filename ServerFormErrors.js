class ServerFormErrors {
  static handleErrors(formSelector, errors) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form
      .querySelectorAll(".sfe-error")
      .forEach((el) => el.classList.remove("sfe-error"));

    Object.entries(errors).forEach(([field, message]) => {
      let input = form.querySelector(`[name="${field}"]`);
      if (input) {
        input.classList.add("sfe-error");
      }
    });
  }
}
