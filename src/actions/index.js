export const increment = (num) => {
    return {
        type: "INC",
        payload: num
    }
}

export const decrement = () => {
    return {
        type: "DEC"
    }
}