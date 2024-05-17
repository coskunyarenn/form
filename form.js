// use https://dashboard.emailjs.com/ sign in , get Public_KEY , Service_ID and Template_ID
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone")
  const phoneError = document.getElementById("phoneError")

  phoneInput.addEventListener("input", (event) => {
    let value = phoneInput.value

    // Remove non-numeric characters
    value = value.replace(/\D/g, "")

    // Format the number as (123) 456-7890
    if (value.length > 3 && value.length <= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`
    } else if (value.length > 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
        6,
        10
      )}`
    } else if (value.length > 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`
    }

    phoneInput.value = value

    // Basic validation for phone number length
    if (value.length >= 10) {
      phoneError.style.visibility = "hidden"
    } else {
      phoneError.style.visibility = "visible"
      phoneError.textContent = "Phone number must be 10 digits long"
    }
  })
})
;(function () {
  emailjs.init("fUkwVIFzf3fn72ban") // Replace with your EmailJS user ID
})()

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the default form submission

  // Send form data using EmailJS
  emailjs.sendForm("service_z6nddvq", "template_j3luvhh", this).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text)

      // Show the modal
      var modal = document.getElementById("myModal")
      modal.style.display = "block"

      // Close the modal when the user clicks on <span> (x)
      var span = document.getElementsByClassName("close")[0]
      span.onclick = function () {
        modal.style.display = "none"
      }

      // Close the modal when the user clicks anywhere outside of the modal
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none"
        }
      }

      // Reset the form
      document.getElementById("myForm").reset()
    },
    function (error) {
      console.log("FAILED...", error)
    }
  )
})
