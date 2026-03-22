


fetch('https://opensheet.elk.sh/1RKeR6fOsanl2ra79dYBemH8h4uAEZJdJBVjWX0QzSxk/WebsiteData')
    .then(res => res.json())
    .then(data => {
        var slideimgpush = []

        var servicsCardd = document.getElementById('servcis1')

        data.forEach(servicsCard => {
            
            var div = document.createElement('div')
            var image = document.createElement('img')
            var span = document.createElement('span')
            image.classList = "serrvicsimage"
            div.classList = "servicsdata"

            image.src = `./image/${servicsCard.imageServics}`
            span.innerText = `${servicsCard.Servics} - Price:${servicsCard.Price} Upto`

            div.appendChild(image)
            div.appendChild(span)
            servicsCardd.appendChild(div)
        });



        var slideimage = document.getElementById('sildeimg')

        var i = 1
        let columnLength = Object.keys(data[5]).length
        console.log(columnLength)
        setInterval(imageview, 1100)

        function imageview() {

            if (i > columnLength) {
                i=1
            }
            // console.log(i)
            slideimage.src = `./image/${data[i].image}`

            i++
        }

        


    })
