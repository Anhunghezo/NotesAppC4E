function getQuery () {
    let urlParameter = window.location.search;
    let praseUrl = urlParameter.slice(1).split('&');
    let query = {};
    praseUrl.forEach(item => {
        let [key, value] = item.split('=');
        query[key] = value;
    });
    return query;
}