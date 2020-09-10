package org.ep.main;

import java.util.Scanner;

import org.ep.service.StoreFindService;
import org.ep.ui.UI;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		StoreFindService service = StoreFindService.INSTANCE;
		UI ui = new UI(service, sc);
		
		ui.init();
	}
}
