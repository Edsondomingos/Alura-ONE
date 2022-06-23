package conversor;

import javax.swing.JOptionPane;
        
public class Conversor {

    public static void main(String[] args) {
    	
    	String valor;
    	double valorDouble;
    	int fim = 0;
    	
    	while(fim == 0) {
	    	
	    	// TELA INICIAL
	        Object tipoConversor = JOptionPane.showInputDialog(null, "Escolha uma opção", 
	                "Tipo", JOptionPane.QUESTION_MESSAGE, null,
	             new Object[] {"Conversor de Moeda","Conversor de Temperatura","Conversor de Distancia" },"Escolha");
	 
	        if(tipoConversor == "Conversor de Moeda") {
	        	// TELA DE ENTRADA
	            valor = JOptionPane.showInputDialog(null,"Insira o valor:","Valor para converter",JOptionPane.QUESTION_MESSAGE);
	            
	            try {
	            	 valorDouble = Double.parseDouble(valor);
	            	// TELA ESCOLHA DE MOEDA
	             	Object moedas = JOptionPane.showInputDialog(null, "Escolha a moeda a qual você deseja converter", 
	                     "Tipo", JOptionPane.WARNING_MESSAGE, null,
	                  new Object[] {"De Reais para Dolares","De Reais para Euros","De Reais para Libras",
	                   "De Dolares para Reais","De Euros para Reais",},"Escolha");
	             
	     	    	if(moedas == "De Reais para Dolares") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Reais é igual a "+ String.format("%.2f",valorDouble / 5.15) + " Dolares", "Resultado",1);
	     	    	} else if(moedas == "De Reais para Euros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Reais é igual a "+ String.format("%.2f",valorDouble / 5.49) + " Euros", "Resultado",1);
	     	    	}  else if(moedas == "De Reais para Libras") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Reais é igual a "+ String.format("%.2f",valorDouble / 6.37) + " Libras esterlina", "Resultado",1);
	     	    	}  else if(moedas == "De Dolares para Reais") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Dolares é igual a "+ String.format("%.2f",valorDouble * 0.19) + " Reais", "Resultado",1);
	     	    	}  else if(moedas == "De Euros para Reais") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Euros é igual a "+ String.format("%.2f",valorDouble * 0.18) + " Reais", "Resultado",1);
	     	    	}  else if(moedas == "De Libras para Reais") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Libras é igual a "+ String.format("%.2f",valorDouble * 0.16) + " Reais", "Resultado",1);
	     	    	}
	            } catch (Exception e ) {
	            	if(e.getMessage()  == "empty String") {
		            	JOptionPane.showMessageDialog(null,"Campo Não PODE esta vazio","Erro",JOptionPane.ERROR_MESSAGE);            		
	            	} else {
	            		JOptionPane.showMessageDialog(null,"Digite apenas numeros com ou sem ponto","Erro",JOptionPane.ERROR_MESSAGE);
	            	}
	            }       	
	         
	        }
	        
	     // TELA ESCOLHA DE TEMPERATURA
	        if(tipoConversor == "Conversor de Temperatura") {
	        	// TELA DE ENTRADA
	            valor = JOptionPane.showInputDialog(null,"Insira o valor:","Valor para converter",JOptionPane.QUESTION_MESSAGE);
	            
	            try {
	            	valorDouble = Double.parseDouble(valor);
	                
	    	    	Object temperatura = JOptionPane.showInputDialog(null, "Escolha a temperatura você deseja converter", 
	    	            "Tipo", JOptionPane.WARNING_MESSAGE, null,
	    	         new Object[] {"De Celsius para Fahrenheit","De Celsius para Kelvin",
	    	        		 "De Fahrenheit para Celsius","De Fahrenheit para Kelvin",
	    	        		 		"De Kelvin para Fahrenheit","De Kelvin para Celsius",},"Escolha");
	    	
	    	    	if(temperatura == "De Celsius para Fahrenheit") {
	    	    		JOptionPane.showMessageDialog(null,valor+" Celsius é igual a "+ String.format("%.2f",valorDouble*1.8+32) + " Fahrenheit", "Resultado",1);
	    	    	} else if(temperatura == "De Celsius para Kelvin") {
	    	    		JOptionPane.showMessageDialog(null,valor+" Celsius é igual a "+ String.format("%.2f",valorDouble+273) + " Kelvin", "Resultado",1);
	    	    	}  else if(temperatura == "De Fahrenheit para Celsius") {
	    	    		JOptionPane.showMessageDialog(null,valor+" Fahrenheit é igual a "+ String.format("%.2f",(valorDouble - 32)/1.8) + " Celsius", "Resultado",1);
	    	    	}  else if(temperatura == "De Fahrenheit para Kelvin") {
	    	    		JOptionPane.showMessageDialog(null,valor+" Fahrenheit é igual a "+ String.format("%.2f",(valorDouble-32)*5/9+273) + " Kelvin", "Resultado",1);
	    	    	}  else if(temperatura == "De Kelvin para Fahrenheit") {
	    	    		JOptionPane.showMessageDialog(null,valor+" Kelvin é igual a "+ String.format("%.2f",(valorDouble-273)*1.8 + 32) + " Fahrenheit", "Resultado",1);
	    	    	}  else if(temperatura == "De Kelvin para Celsius") {
	    	    		JOptionPane.showMessageDialog(null,valor+" Kelvin é igual a "+ String.format("%.2f",valorDouble - 273) + " Celsius", "Resultado",1);
	    	    	}
	            } catch(Exception e) {
	            	if(e.getMessage()  == "empty String") {
		            	JOptionPane.showMessageDialog(null,"Campo Não PODE esta vazio","Erro",JOptionPane.ERROR_MESSAGE);            		
	            	} else {
	            		JOptionPane.showMessageDialog(null,"Digite apenas numeros com ou sem ponto","Erro",JOptionPane.ERROR_MESSAGE);
	            	}
	            }
	            
	        }
	        
	        if(tipoConversor == "Conversor de Distancia") {
	        	// TELA DE ENTRADA
	            valor = JOptionPane.showInputDialog(null,"Insira o valor:","Valor para converter",JOptionPane.QUESTION_MESSAGE);
	            
	            try {
	            	 valorDouble = Double.parseDouble(valor);
	            	// TELA ESCOLHA DE Distancia
	             	Object distancia = JOptionPane.showInputDialog(null, "Escolha a moeda a qual você deseja converter", 
	                     "Tipo", JOptionPane.WARNING_MESSAGE, null,
	                  new Object[] {"De Quilometros para Metros","De Quilometros para Centimetros",
	                		  "De Metros para Quilometros","De Dolares para Centimetros",
	                		  "De Centimetros para Quilometros","De Centimetros para Metros",
	                		  "De Milhas para Quilometros","De Quilometros para Milhas"},"Escolha");
	             
	     	    	if(distancia == "De Quilometros para Metros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Quilometros é igual a "+ valorDouble * 1000 + " Metros", "Resultado",1);
	     	    	} else if(distancia == "De Quilometros para Centimetros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Quilometros é igual a "+ valorDouble * 100000 + " Centimetros", "Resultado",1);
	     	    	}  else if(distancia == "De Metros para Quilometros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Metros é igual a "+ valorDouble / 1000 + " Quilometros", "Resultado",1);
	     	    	}  else if(distancia == "De Dolares para Centimetros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Metros é igual a "+ valorDouble * 100 + " Centimetros", "Resultado",1);
	     	    	}  else if(distancia == "De Centimetros para Quilometros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Centimetros é igual a "+ valorDouble * 100000 + " Quilometros", "Resultado",1);
	     	    	}  else if(distancia == "De Centimetros para Metros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Centimetros é igual a "+ valorDouble / 100 + " Metros", "Resultado",1);
	     	    	} else if(distancia == "De Milhas para Quilometros") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Milhas é igual a "+ valorDouble / 1.609 + " Quilometros", "Resultado",1);	
	     	    	} else if(distancia == "De Quilometros para Milhas") {
	     	    		JOptionPane.showMessageDialog(null,valor+" Quilometros é igual a "+ valorDouble * 1.609 + " Milhas", "Resultado",1);	
	     	    	}
	            } catch (Exception e ) {
	            	if(e.getMessage()  == "empty String") {
		            	JOptionPane.showMessageDialog(null,"Campo Não PODE esta vazio","Erro",JOptionPane.ERROR_MESSAGE);            		
	            	} else {
	            		JOptionPane.showMessageDialog(null,"Digite apenas numeros com ou sem ponto","Erro",JOptionPane.ERROR_MESSAGE);
	            	}
	            }       	
	         
	        }
	        
	     // Frame final da conversão
	    	fim = JOptionPane.showConfirmDialog(null, "Deseja continuar?", "E AGORA?", 1);    	
	    	
	    	if(fim == 0) {
	    		// Frame caso click em YES na tela final
	    		continue;
	    	} else if(fim == 1) {
	    		// Frame caso click em NO na tela final
	    		 JOptionPane.showMessageDialog(null, "Programa finalizado","FIM",1);
	    		 break;
	    	} else if(fim == 2) {
	    		// Frame caso click em CANCEL na tela final
	   		 	JOptionPane.showMessageDialog(null, "Programa concluido","FIM",1);
	   		 	break;
	    	}

    	}
    }
    
}

