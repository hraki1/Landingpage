interface Router {
    push: (href: string) => void;
}

export const handleNavigation = (href: string, router: Router): void => {
    // Check if it's a hash link
    if (href.startsWith("#")) {
        if (window.location.pathname === "/") {
            // Smooth scroll on homepage
            const element: Element | null = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to homepage with hash
            window.location.href = `/${href}`;
        }
    } else {
        // Regular page navigation
        router.push(href);
    }
};
