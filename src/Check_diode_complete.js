		var check = true, i, ii, temp;
		while (check === true) {	
			check = false;
			for (i = 0, ii = components.length; i<ii; i++) {
				if(this.getNodeIndex(components[i].nodes[0]) != -1 && this.getNodeIndex(components[i].nodes[1]) != -1) {			
					if (components[i].type === "Diode" && ((res.elements[0][this.getNodeIndex(components[i].nodes[0])]).real - (res.elements[0][this.getNodeIndex(components[i].nodes[1])]).real < 0)) {
						temp = components[i].value_reverse;
						components[i].value_reverse = components[i].value;
						components[i].value = temp;
						this.cleanCircuit();
						this.createAMatrix();
						aM = $M(this.AMatrix);
						zM = $M(this.createZMatrix());
						invAM = aM.inv();
						res = zM.x(invAM);

						check = true;
					}
				}

				else if (this.getNodeIndex(components[i].nodes[0]) === -1) {
					if (components[i].type === "Diode" && (res.elements[0][this.getNodeIndex(components[i].nodes[1])]).real > 0) {
						temp = components[i].value_reverse;
						components[i].value_reverse = components[i].value;
						components[i].value = temp;
						this.cleanCircuit();
						this.createAMatrix();
						aM = $M(this.AMatrix);
						zM = $M(this.createZMatrix());
						invAM = aM.inv();
						res = zM.x(invAM);

						check = true;
					}
				}

				else if (this.getNodeIndex(components[i].nodes[1]) === -1) {
					if (components[i].type === "Diode" && (res.elements[0][this.getNodeIndex(components[i].nodes[0])]).real < 0) {
						temp = components[i].value_reverse;
						components[i].value_reverse = components[i].value;
						components[i].value = temp;
						this.cleanCircuit();
						this.createAMatrix();
						aM = $M(this.AMatrix);
						zM = $M(this.createZMatrix());
						invAM = aM.inv();
						res = zM.x(invAM);

						check = true;
					}
				}
				
			}
		} // when the iteration ends, the diode biases are correctly determined
		