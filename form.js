;(function () {
  emailjs.init("Public_Key") // Replace with your EmailJS user ID
})()

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the default form submission

  // Send form data using EmailJS
  emailjs.sendForm("service_id", "template_id", this).then(
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
