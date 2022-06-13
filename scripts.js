const btn = document.getElementById("toggle");

const theme = document.querySelector("#theme-link");

$(document).ready(function() 
{
    async function loadData() 
    {
        let get = await fetch('./data.json')
        let data = await get.json()

        // console.log(data.primary_metrics.total.value)
        let followersData = document.querySelector('.totalFollowers')
        let primaryMetricsData = document.querySelector('.fe-wrapper')

        let primarySocialMediaBorder = document.querySelectorAll('.box-top')
        let primarySocialMediaIcon = document.querySelectorAll('.icon')
        let primarySocialMediaName = document.querySelectorAll('.name')
        let primarySocialMediaValue = document.querySelectorAll('.number')
        let primarySocialMediaLabel = document.querySelectorAll('followers')
        let primarySocialMediaDelta = document.querySelectorAll('delta')

        let secondarySocialMediaIcon = document.querySelectorAll('.page-logo')
        let secondarySocialMediaValue = document.querySelectorAll('.views')
        let secondarySocialMediaLabel = document.querySelectorAll('.page-views')
        let secondarySocialMediaMetric = document.querySelectorAll('.percentage')


        followersData.innerHTML = data.primary_metrics.total.value;

        let primaryDataCards = data.primary_metrics.cards
        let supportingData = data.supporting_metrics

        // Primary Metrics
        for(let x = 0; x < primaryDataCards.length; x++)
        {
            console.log(primaryDataCards[x].value)

            for(let _primarySocialMediaBorder = 0; _primarySocialMediaBorder < primarySocialMediaBorder.length; _primarySocialMediaBorder++)
            {
                primarySocialMediaBorder[_primarySocialMediaBorder].classList.add('box-top-' + primaryDataCards[_primarySocialMediaBorder])
            }

            for(let _primarySocialMediaIcon = 0; _primarySocialMediaIcon < primarySocialMediaIcon.length; _primarySocialMediaIcon++)
            {
                primarySocialMediaIcon[_primarySocialMediaIcon].innerHTML = primaryDataCards[_primarySocialMediaIcon].service
            }

            for(let _primarySocialMediaName = 0; _primarySocialMediaName < primarySocialMediaName.length; _primarySocialMediaName++)
            {
                primarySocialMediaName[_primarySocialMediaName].innerHTML = primaryDataCards[_primarySocialMediaName].username
            }

            for(let _primarySocialMediaValue = 0; _primarySocialMediaValue < primarySocialMediaValue.length; _primarySocialMediaValue++)
            {
                primarySocialMediaValue[_primarySocialMediaValue].innerHTML = primaryDataCards[_primarySocialMediaValue].value
            }

            
        }

        primaryDataCards.forEach(function(a)
        {
            // console.log(primarySocialMediaValue)

            // console.log(a.value)

            // for(let i = 0; i < primaryDataCards.length; i++)
            // {
            //     primarySocialMediaValue[i].innerHTML = a.value;
            // }
            // console.log(a.value)
            // console.log(a.value)
            // primarySocialMediaValue[a].innerHTML = a.value;

            // primarySocialMediaBorder.innerHTML = `<div class="box-top-${i.service}"></div>`
            // primarySocialMediaIcon.innerHTML = `<img src="images/icon-${i.service}.svg" alt="${i.service}"></div>`
            // primarySocialMediaName.innerHTML = "<h6 class='name'> "+ i.username + "</h6>";
            // primarySocialMediaValue.innerText = "<div class='number'>" + i.value + "</div>";
            // primarySocialMediaLabel.innerHTML = `<h4 class="followers">${i.label}</h4>`
            // primarySocialMediaDelta.innerHTML = `<h5 class="delta ${i.metric.trend}">&#9652; ${i.metric.value} Today</h5>`
        })

        // console.log(primarySocialMediaValue)

        supportingData.forEach(function(j)
        {
            secondarySocialMediaIcon.innerHTML = `<div class="page-logo"><img src="images/icon-${j.service}svg" alt="${j.service}"></div>`
            secondarySocialMediaValue.innerHTML = `<div class="views">${j.value}</div>`
            secondarySocialMediaLabel.innerHTML = `<div class="page-views">${j.label}</div>`
            secondarySocialMediaMetric.innerHTML = `<div class="percentage ${j.metric.trend}">&#9652; ${j.metric.percent}%</div>`
        }) 

        // primarySocialMediaValue.forEach(function(k)
        // {
        //     console.log(primarySocialMediaValue)
        // })

    }

    loadData()

    btn.addEventListener('click', function() 
    {
    if (theme.getAttribute('href') == './styles.css')
    {
        console.log('dark');
        theme.href = './dark-style.css';
    }

    else
    {
        console.log('light');
        theme.href = './styles.css';
    }
    })
})