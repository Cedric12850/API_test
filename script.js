let app = document.querySelector('.app');

async function afficherFilms() {
    const reponse = await fetch("https://api.npoint.io/b63dccb6f75ee23dcf45");
    const filmographie = await reponse.json();
    console.log(filmographie)
    filmographie.films.map((film)=>{
        //div image
        let divImage = document.createElement('div');
        divImage.className ='card-image waves-effect waves-block waves-light';
        app.appendChild(divImage)
        let cover =document.createElement('img');
        cover.className ='activator';
        cover.setAttribute('alt', '');
        divImage.appendChild(cover);
        cover.src = film.miniature;


        //div content
        let divContent = document.createElement('div');
        divContent.className ='card-content';
        app.appendChild(divContent);

        let title = document.createElement('span');
        title.className = 'card-title activator grey-text text-darken-4';
        title.setAttribute('id','titleSpan')
        divContent.appendChild(title);
        title.textContent = film.titre;
        
        let i = document.createElement('i');
        i.className = 'material-icons right';
        i.textContent = 'more_vert';
        title.appendChild(i);
        console.log(title)
        

        let realisateur = document.createElement('p');
        divContent.appendChild(realisateur);
        realisateur.textContent = film.realisateur;


        //div reveal
        let divReveal = document.createElement('div');
        divReveal.className ='card-reveal';
        app.appendChild(divReveal);

        let titleReveal = document.createElement('span');
        titleReveal.className = 'card-title grey-text text-darken-44';
        divReveal.appendChild(titleReveal);

        let iReveal = document.createElement('i');
        iReveal.className = 'material-icons right';
        iReveal.textContent= 'close';
        titleReveal.appendChild(iReveal);

        let sortie = document.createElement('p');
        divReveal.appendChild(sortie)
        sortie.textContent = film.annee_de_sortie;

        let duree = document.createElement('p');
        divReveal.appendChild(duree);
        duree.textContent = film.duree;

        let synopsis = document.createElement('p');
        divReveal.appendChild(synopsis);
        synopsis.textContent = film.synopsis

    })
    
}


afficherFilms()