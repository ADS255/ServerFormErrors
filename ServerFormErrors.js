class ServerFormErrors {
  static defaultConfig = {};

  constructor(formSelector) {
    this.form = document.querySelector(formSelector);

    if (!this.form) return;

    this.initFormInputs();
  }

  handleErrors(errors) {
    this.form
      .querySelectorAll(".sfe-error")
      .forEach((el) => el.classList.remove("sfe-error"));

    this.form
      .querySelectorAll(".sfe-error-message")
      .forEach((el) => el.remove());

    let firstElementFocused = false;

    Object.entries(errors).forEach(([field, message]) => {
      let input = this.form.querySelector(`[name="${field}"]`);
      if (input) {
        input.classList.add("sfe-error");

        let span = document.createElement("span");
        span.classList.add("sfe-error-message");
        span.textContent = message;

        input.parentNode.insertBefore(span, input.nextSibling);

        if (!firstElementFocused) {
          input.focus();
          firstElementFocused = true;
        }
      }
    });
  }

  initFormInputs() {
    const inputs = Array.from(
      this.form.querySelectorAll("input, textarea, select")
    );

    if (inputs.length === 0) return;

    inputs.forEach((input) => {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);
    });
  }
}
