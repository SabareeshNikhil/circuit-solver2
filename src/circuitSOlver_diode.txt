if (index1 != -1 && index2 != -1) {
                        if (Math.abs(component.dark_current  component.value  (Math.exp((res.elements[0][index1]).real - (res.elements[0][index2]).real) - 1) - ((res.elements[0][index1]).real - (res.elements[0][index2]).real))  Math.abs((res.elements[0][index1]).real - (res.elements[0][index2]).real) = 0.01) {
                            alert(component.value);
                            alert(component.dark_current  component.value  (Math.exp((res.elements[0][index1]).real - (res.elements[0][index2]).real) - 1));
                            alert(Math.abs(component.dark_current  component.value  (Math.exp((res.elements[0][index1]).real - (res.elements[0][index2]).real) - 1) - ((res.elements[0][index1]).real - (res.elements[0][index2]).real))  Math.abs((res.elements[0][index1]).real - (res.elements[0][index2]).real));
                            temp = component.value;
                            component.value = ((res.elements[0][index1]).real - (res.elements[0][index2]).real)  (component.dark_current  component.value  (Math.exp((res.elements[0][index1]).real - (res.elements[0][index2]).real) - 1));

                            check = true;
                        }
                    }

                    else if (index1 === -1) {
                        if (Math.abs(component.dark_current  component.value  (Math.exp(-res.elements[0][index2]).real - 1) + (res.elements[0][index2]).real)  Math.abs((res.elements[0][index2]).real) = 0.01) {
                            alert(component.value);
                            alert(component.dark_current  component.value  (Math.exp(-res.elements[0][index2]).real - 1));
                            alert(Math.abs(component.dark_current  component.value  (Math.exp(-res.elements[0][index2]).real - 1) + (res.elements[0][index2]).real)  Math.abs((res.elements[0][index2]).real));

                            component.value = (-(res.elements[0][index2]).real)  (component.dark_current  component.value  (Math.exp(-(res.elements[0][index2]).real) - 1));

                            check = true;
                        }
                    }

                    else if (index2 === -1) {
                        if (Math.abs(component.dark_current  component.value  (Math.exp(res.elements[0][index1]).real - 1) - (res.elements[0][index1]).real)  Math.abs((res.elements[0][index1]).real) = 0.01) {
                            alert(component.value);
                            alert(component.dark_current  component.value  (Math.exp(res.elements[0][index1]).real - 1));
                            alert(Math.abs(component.dark_current  component.value  (Math.exp(res.elements[0][index1]).real - 1) - (res.elements[0][index1]).real)  Math.abs((res.elements[0][index1]).real));

                            component.value = ((res.elements[0][index1]).real)  (component.dark_current  component.value  (Math.exp((res.elements[0][index1]).real) - 1));

                            check = true;                          
                        }
                    }