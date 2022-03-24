fetch('https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/get-total-counts', {
    method: 'GET',
})
    .then(response => response.json())
    .then(result => {
        userCount = result['body']['Items'][0]['Amount']
        restaurantCount = result['body']['Items'][1]['Amount']
        handleCounts(result['body']['Items'][0]['Amount'], result['body']['Items'][1]['Amount'])
    })

function handleCounts(userCount, restaurantCount) {
    if (userCount > 999999) {
        userCount = (userCount / 1000000).toFixed(1) + 'm';
    }
    else if (userCount > 999) {
        userCount = (userCount / 1000).toFixed(1) + 'k';
    }

    if (restaurantCount > 999999) {
        restaurantCount = (restaurantCount / 1000000).toFixed(1) + 'm';
    }
    else if (restaurantCount > 999) {
        restaurantCount = (restaurantCount / 1000).toFixed(1) + 'k';
    }

    document.querySelector('#totalRestaurants').textContent = restaurantCount;
    document.querySelector('#totalUsers').textContent = userCount;
}
