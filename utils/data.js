const categories = [
    "Oranges",
    "Bananas",
    "Pineapple",
    "Apple",
    "Cherry"
]

const featuredFruits = [
    {
        name: 'Australian Orange',
        price: "12.30",
        stars: 4,
        desc: "sweet and juicy",
        shadow: "orange",
        img: require(`../assets/images/orange.png`),
        color: opacity => `rgba(251, 216, 146, ${opacity})`
    },
    {
        name: 'Flesh Nectari',
        price: "12",
        stars: 3,
        desc: "Sweet and juicy",
        shadow: "red",
        img: require(`../assets/images/peach.png`),
        color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    {
        name: 'Black Grapes',
        price: "40",
        stars: 4,
        desc: "Sweet and juicy",
        shadow: "purple",
        img: require(`../assets/images/grapes.png`),
        color: opacity => `rgba(214, 195, 246, ${opacity})`
    },
    {
        name: 'Red Grapefruit',
        price: "30",
        stars: 4,
        desc: "Sweet and juicy",
        shadow: "red",
        img: require(`../assets/images/red_orange.png`),
        color: opacity => `rgba(255, 163, 120, ${opacity})`
    },
    {
        name: 'Green Apple',
        price: "10.5",
        stars: 4,
        desc: "Sweet and juicy",
        shadow: "green",
        img: require(`../assets/images/green_apple.png`),
        color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
]

const cartItems = [
    {
        name: 'Australian Orange',
        price: "12.30",
        stars: 4,
        qty: 4,
        desc: "sweet and juicy",
        shadow: "orange",
        img: require(`../assets/images/orange.png`),
        color: opacity => `rgba(251, 216, 146, ${opacity})`
    },
    {
        name: 'Flesh Nectari',
        price: "12",
        stars: 3,
        qty: 4,
        desc: "Sweet and juicy",
        shadow: "red",
        img: require(`../assets/images/peach.png`),
        color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    {
        name: 'Black Grapes',
        price: "40",
        stars: 4,
        qty: 2,
        desc: "Sweet and juicy",
        shadow: "purple",
        img: require(`../assets/images/grapes.png`),
        color: opacity => `rgba(214, 195, 246, ${opacity})`
    },
    {
        name: 'Red Grapefruit',
        price: "30",
        stars: 4,
        qty: 2,
        desc: "Sweet and juicy",
        shadow: "red",
        img: require(`../assets/images/red_orange.png`),
        color: opacity => `rgba(255, 163, 120, ${opacity})`
    },
    {
        name: 'Green Apple',
        price: "10.5",
        stars: 4,
        qty: 4,
        desc: "Sweet and juicy",
        shadow: "green",
        img: require(`../assets/images/green_apple.png`),
        color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
]



const data = {
    categories,
    featuredFruits,
    cartItems
}

export default data