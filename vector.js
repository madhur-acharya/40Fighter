class Vector{

	constructor(x=0, y=0)
	{
		this.x= x;
		this.y= y;
	}

	getAngle= () => Math.atan2(this.y, this.x);

	getMag= () => Math.sqrt(this.x * this.x + this.y * this.y); 

	setAngle= angle => {
		var mag= this.getMag();
		this.x= Math.cos(angle) * mag;
		this.y= Math.sin(angle) * mag;
	};

	setMag= mag => {
		var angle= this.getAngle();
		this.x= Math.cos(angle) * mag;
		this.y= Math.sin(angle) * mag;	
	};

	add= vect => new Vector(this.x + vect.x, this.y + vect.y);
	subtract= vect => new Vector(this.x - vect.x, this.y - vect.y);
	multiply= scalar => new Vector(this.x * scalar, this.y * scalar);
	divide= scalar => new Vector(this.x / scalar, this.y / scalar);

	static addition= (vect1, vect2) => new Vector(vect1.x + vect2.x, vect1.y + vect2.y);

	static subtraction= (vect1, vect2) => new Vector(vect1.x - vect2.x, vect1.y - vect2.y);

	static multiplcation= (vect, scalar) => new Vector(vect.x * scalar, vect.y * scalar);

	static division= (vect, scalar) => new Vector(vect.x / scalar, vect.y / scalar);

	/*add= vect => {
		this.x= this.x + vect.x; 
		this.y= this.y + vect.y;
		return new Vector(this.x, this.y);
	}
		
	subtract= vect => {
		this.x= this.x - vect.x; 
		this.y= this.y - vect.y;
		return new Vector(this.x, this.y);	
	}
	
	multiply= scalar => {
		this.x= this.x * scalar;
		this.y= this.y * scalar;
		return new Vector(this.x, this.y);
	}

	divide= scalar => {
		this.x= this.x / scalar;
		this.y= this.y / scalar;
		return new Vector(this.x, this.y);
	}*/

};

Math.Rad2Deg= (180 / Math.PI);
Math.Deg2rad= (Math.PI / 180);

