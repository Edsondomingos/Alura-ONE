/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package conversor;

import javax.swing.JOptionPane;
        
public class Conversor {

    public static void main(String[] args) {
//        double numero = Double.parseDouble(JOptionPane.showInputDialog("Escreva um " +;
//                "numero para multiplicar por 2"));
//        Object cor = JOptionPane.showInputDialog(null, "Escolha uma cor", "Cores",
//                JOptionPane.QUESTION_MESSAGE, null,
//                new Object[] {"Escolha","Amarelo","Azul","Vermelho" },"Escolha");

//        Object tipoConversor = JOptionPane.showInputDialog(null, "Escolha uma opção", 
//                "Tipo", JOptionPane.QUESTION_MESSAGE, null,
//             new Object[] {"Conversor de Moeda","Conversor de Temperatura" },"Escolha");

//        Object valor = JOptionPane.showInputDialog("");

         Object moedas = JOptionPane.showInputDialog(null, "Escolha a moeda a qual você deseja converter", 
                "Tipo", JOptionPane.WARNING_MESSAGE, null,
             new Object[] {"De Reais para Dolares","De Reais para Euros","De Reais para Libras",
             "De Reais para Yenes","De Reais para Won Coreano", "De Dolares para Reais","De Euros para Reais",
             "De Libras para Reais"},"Escolha");
        
        
    }
    
}

//WARNING_MESSAGE
