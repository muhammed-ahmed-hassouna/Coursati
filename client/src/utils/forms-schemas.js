import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .matches(
            /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/,
            "Invalid password. Password must have 8 characters, with at least 1 number, uppercase, and special character"
        ),
});

export const updateHomeS1Schema = yup.object().shape({
    image: yup.string().url().optional(),
    title: yup.string().optional(),
    button: yup.object().shape({
        link: yup.string().optional(),
        text: yup.string().optional()
    })
});

export const updateHomeS2Schema = yup.object().shape({
    header: yup.string().optional(),
    companyName: yup.string().optional(),
    vision: yup.string().optional(),
    cards: yup.array().of(
        yup.object().shape({
            title: yup.string().optional(),
            image: yup.string().url().optional(),
        })
    ),
});

export const updateHomeS3Schema = yup.object().shape({
    header: yup.string().optional(),
    title: yup.string().optional(),
    tagline: yup.string().optional(),
    expertiseTitle: yup.string().optional(),
    expertiseText: yup.string().optional(),
    image: yup.string().url().optional(),
    featuresList: yup.array().of(yup.string()).optional(),
    founder: yup.object().shape({
        founderName: yup.string().optional(),
        founderText: yup.string().optional(),
        founderImage: yup.string().url().optional()
    }),
});

export const updateHomeS4Schema = yup.object().shape({
    header: yup.string().optional(),
    title: yup.string().optional(),
    cards: yup.array().of(
        yup.object().shape({
            title: yup.string().optional(),
            description: yup.string().optional(),
            image: yup.string().optional(),
            button: yup.object().shape({
                text: yup.string().optional(),
                link: yup.string().optional(),
            }),
        })
    ).min(1).required(),
});

export const updateHomeS5Schema = yup.object().shape({
    header: yup.string().optional(),
    section1: yup.object().shape({
        title: yup.string().optional(),
        image: yup.string().optional(),
    }),
    OurMission: yup.string().optional(),
    OurVision: yup.string().optional(),
    coreValues: yup.array().of(yup.string().optional()),
    advantagesTitle: yup.string().optional(),
    advantages: yup.array().of(yup.string().optional()),
    section2: yup.object().shape({
        title: yup.string().optional(),
        image: yup.string().optional(),
        text: yup.string().optional(),
        button: yup.object().shape({
            text: yup.string().optional(),
            link: yup.string().optional(),
        }),
    }),
});

export const updateHomeS6Schema = yup.object().shape({
    header: yup.string().optional(),
    title: yup.string().optional(),
    cards: yup.array().of(
        yup.object().shape({
            title: yup.string().optional(),
            description: yup.string().optional(),
            image: yup.string().optional(),
            button: yup.object().shape({
                link: yup.string().optional(),
            }),
        })
    ).min(1).required(),
});

export const updateHome7Schema = yup.object().shape({
    headers: yup.object().shape({
        header1: yup.string().optional(),
        header2: yup.string().optional(),
    }),
    texts: yup.object().shape({
        text1: yup.string().optional(),
        text2: yup.string().optional(),
    }),
    title: yup.string().optional(),
    statistics: yup.array().of(
        yup.object().shape({
            progressTitle: yup.string().optional(),
            countText: yup.number().optional(),
        })
    ),
    background: yup.string().optional()
});

export const footerSchema = yup.object().shape({
    title: yup.string().optional(),
    button: yup.object().shape({
        text: yup.string().optional(),
        link: yup.string().optional(),
    }),
    copyright: yup.string().required(),
    contact: yup.object().shape({
        phone: yup.string().optional(),
        email: yup.string().optional().email(),
        address: yup.string().optional(),
    }),
    logos: yup.object().shape({
        logo: yup.string().optional(),
        logo2: yup.string().optional(),
    }),
    text: yup.string().optional(),
    loader: yup.string().optional(),
});