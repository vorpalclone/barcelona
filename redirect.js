<!-- Barcelona sayfasında -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    // Login formunun submit işlemi gerçekleştiğinde yönlendirme kontrolü yapılacak
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Formun varsayılan gönderme işlemini engelle

        // Kullanıcı adı ve şifre alanlarındaki değerleri al
        var username = document.querySelector('input[name="username"]').value;
        var password = document.querySelector('input[name="pswrd"]').value;

        // Kullanıcı adı ve şifre kontrolü yapılabilir, burada bir örnek:
        if (username === "kullanıcı_adı" && password === "şifre") {
            // Eğer kullanıcı adı ve şifre doğruysa, Barcelona sayfasına yönlendir
            window.location.href = "barcelona.html";
        } else {
            // Eğer kullanıcı adı veya şifre yanlışsa, bir hata mesajı gösterebilir veya başka bir işlem yapılabilir
            alert("Kullanıcı adı veya şifre yanlış!");
        }
    });
});
</script>
