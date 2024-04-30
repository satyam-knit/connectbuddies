


export const formatDate = (date) => {

    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

}

export const downloadMedia = (e, orignalImage) => {
    e.preventDefault();
    try {

        fetch(orignalImage)
            .then(resp => resp.blob())
            .then(blob => {

                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;

                const nameSplit = orignalImage.split('/');
                const duplicateName = nameSplit.pop();

                a.download = " " + duplicateName + " ";

                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);

            }).catch(error => console.log("Error while Downloading", error.message));

    }

    catch (error) {
        console.log("Error while Downloading", error.message)
    }
}