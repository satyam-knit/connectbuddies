


export const formatDate = (date) => {

    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

}