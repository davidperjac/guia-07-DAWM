const ejecutarCodigo = () => {
	// alert('Hola Mundo!');

	document.getElementById('titulo1').textContent = 'Album de Fotos';

	const arreglo = document.getElementsByClassName('text-muted');
	elemento = arreglo[1];
	elemento.innerHTML = `<span>
			En este sitio encontrarás un album de fotos inspirado en el snippet de
			<a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>
		</span>
    `;

	const arregloP = document.getElementsByTagName('p');
	elementoP = arregloP[2];
	elementoP.setAttribute('class', 'd-none');

	/* RETO */

	const imagenes = [
		{
			url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'camino',
		},
		{
			url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'papá',
		},
		{
			url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'energia',
		},
		{
			url: 'https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'yoga',
		},
		{
			url: 'https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'bosque',
		},
		{
			url: 'https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'playa',
		},
		{
			url: 'https://images.unsplash.com/photo-1654045851484-d9aea271acda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'lgbtq',
		},
		{
			url: 'https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'laptop',
		},
		{
			url: 'https://images.unsplash.com/photo-1653971858341-865fca7c6d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
			alt: 'table',
		},
	];

	const collectionSVG = document.getElementsByTagName('svg');
	const arregloSVG = Array.prototype.slice.call(collectionSVG);
	arregloSVG.shift();
	for (let index in arregloSVG) {
		const img = document.createElement('img');
		img.setAttribute('src', imagenes[index].url);
		img.setAttribute('alt', imagenes[index].alt);
		arregloSVG[index].replaceWith(img);
	}
};

ejecutarCodigo();
