const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config)
    console.log(res.data[0])
    removeRes()
    makeImages(res.data)
})

const removeRes = () => {
    const cards = document.querySelectorAll('#card')
    for (let card of cards) {
        card.remove()
    }
}

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {


            const divFirst = document.createElement('SPAN')
            divFirst.class = "card"
            divFirst.id = 'card'
            divFirst.style = "display: inline; width: 400px; height:500px;  margin: 20px;"


            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            img.class = "card-img-top"
            img.style = 'display: inline'
            img.style = 'margin: 10px'

            const divInner = document.createElement('DIV')
            divInner.class = "card-body"

            const score = document.createElement('P')
            score.innerHTML = Math.floor((result.score) * 100) / 10
            score.id = 'score'
            score.style = 'margin: 10px; display: inline;'

            const res = document.querySelector('#inlineRes')
            img.append(divInner)
            divFirst.append(img)
            divFirst.append(score)
            res.append(divFirst)






            //     const img = document.createElement('IMG');
            //     img.src = result.show.image.medium
            //     img.style = 'display: inline'
            //     document.body.append(img)

            //     const score = document.createElement('P');
            //     score.innerHTML = result.score
            //     score.style = 'display: inline'
            //     document.body.append(score)
            // }
        }
    }
}



//   <div class="card">
//     <div class="wrapper">
//       <div class="header">
//         <div class="date">
//           <span class="day">12</span>
//           <span class="month">Aug</span>
//           <span class="year">2016</span>
//         </div>
//         <ul class="menu-content">
//           <li>
//             <a href="#" class="fa fa-bookmark-o"></a>
//           </li>
//           <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
//           <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
//         </ul>
//       </div>
//       {/* <div class="data">
//         <div class="content">
//           <span class="author">Jane Doe</span>
//           <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
//           <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
//           <a href="#" class="button">Read more</a>
//         </div>
//       </div> */}
//     </div>
//   </div>
// </div> 
