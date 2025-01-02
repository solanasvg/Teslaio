class CarSelector{
	constructor(){
		this.carNames = ['Cybertruck', 'Cyberquad', 'Roadster 2020', 'Model S', 'Model 3', 'Model X', 'Model Y', 'Semi'];
		this.carElementWrapper = document.getElementById('carWrapper');
		this.carElements = this.carElementWrapper.children;
		this.currentCar = 0;

		this.leftButton = document.getElementById('goLeft');
		this.rightButton = document.getElementById('goRight');
		this.leftButton.addEventListener('click', this.prev.bind(this));
		this.rightButton.addEventListener('click', this.next.bind(this));

		this.title = document.getElementById('title');
		this.renderUI();
	}

	next(){
		if(this.currentCar < this.carNames.length){
			this.currentCar++;
		}

		if(this.currentCar === this.carNames.length){
			this.carElementWrapper.classList.add('hide');
			window.setTimeout(this.viewLineup.bind(this), 500);
		}
		else{
			for(let car of this.carElements){
				car.style.transform = `translate(-${this.currentCar}00vw)`;
			}
		}
		this.renderUI();
	}

	prev(){
		if(this.currentCar > 0){
			this.currentCar--;
		}

		if(this.currentCar === this.carNames.length - 1){
			this.carElementWrapper.classList.add('hide');
			window.setTimeout(this.viewIndividual.bind(this), 500);
		}
		else{
			for(let car of this.carElements){
				car.style.transform = `translate(-${this.currentCar}00vw)`;
			}
		}
		this.renderUI();
	}

	renderUI(){		
		if(this.currentCar > 0)
			this.leftButton.classList.add('show');
		else
			this.leftButton.classList.remove('show');

		if(this.currentCar <= this.carNames.length - 1)
			this.rightButton.classList.add('show');
		else
			this.rightButton.classList.remove('show');

		this.title.classList.remove('show');
		window.setTimeout(this.setTitle.bind(this), 500);
	}

	setTitle(){
		if(this.currentCar <= this.carNames.length - 1)
			this.title.innerText = this.carNames[this.currentCar];
		else
			this.title.innerText = 'Lineup'
		this.title.classList.add('show')
	}

	viewLineup(){
		for(let car of this.carElements){
			car.style.transition = 'none';
			car.style.transform = `translateX(0)`;
		}
		this.carElementWrapper.classList.add('all');
		this.carElementWrapper.classList.remove('hide');	
	}

	viewIndividual(){
		this.carElementWrapper.classList.remove('all');
		for(let car of this.carElements){
			car.style.transform = `translateX(-${this.currentCar}00vw)`;
			car.getBoundingClientRect();
			car.style.transition = 'transform 0.7s ease';
		}
		this.carElementWrapper.classList.remove('hide');
	}
}

new CarSelector();