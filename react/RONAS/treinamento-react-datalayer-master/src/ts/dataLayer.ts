export const dataLayerPush = (event: string, data: any) => {

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        'event': event,
        'data': data
    })

}