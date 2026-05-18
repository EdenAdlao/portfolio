function openModal(src, title) {

    Swal.fire({

        title: title,
        imageUrl: src,
        imageAlt: title,
        background: "linear-gradient(to right, #fdbfb5, #edabc9, #d3c8e3, #9ec9ec)",
        color: "#ffffff",
        width: "900px",
        imageWidth: "85%",
        imageHeight: "auto",
        showConfirmButton: false,
        showCloseButton: true,

        backdrop: `
            rgba(0,0,0,0.85)
        `,

        customClass: {

            popup: `
                rounded-[24px]
                border
                border-white/10
                shadow-[0_0_40px_rgba(255,255,255,0.08)]
            `,

            title: `
                tracking-[4px]
                text-[#161824]
                text-2xl
                font-semibold
            `,

            image: `
                rounded-2xl
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            `

        }

    });

}

