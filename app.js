const sections = document.querySelectorAll("section");


const navLinks = document.querySelectorAll(".navlinks a");

const observer = new IntersectionObserver((entries) => {
    console.log(entries)

    entries.forEach(entry => {
        console.log(entry)

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.navlinks a[href="#${entry.target.id}"]`
            );

            console.log(activeLink)
            activeLink.classList.add("active");
        }

    });

}, {
    rootMargin: "-100px 0px -40% 0px",
    threshold: 0
 
});

sections.forEach(section => {
    observer.observe(section);
});