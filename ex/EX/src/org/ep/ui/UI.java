package org.ep.ui;

import java.util.Scanner;

import org.ep.dto.Position;
import org.ep.dto.StoreVO;
import org.ep.service.StoreFindService;

public class UI {
	Position userPos;
	private StoreFindService service;
	private Scanner sc;

	public UI(StoreFindService service, Scanner sc) {
		super();
		this.service = service;
		this.sc = sc;
	}
	
	public void userUI() {
		System.out.println("당신의 위도를 입력하세요");
		double userLat = Double.parseDouble(sc.nextLine());
		System.out.println("당신의 경도를 입력하세요");
		double userLng = Double.parseDouble(sc.nextLine());
		
		this.userPos = new Position(userLat, userLng);
		
	}
	
	public void choiceUI() {
		System.out.println("메뉴를 선택하세요");
		System.out.println("1) 한식 2) 중식 3) 양식 4) 일식");
		String choiceCat = service.choiceCat(Integer.parseInt(this.sc.nextLine()));
		service.setChoiceArr(service.findStoreByCat(choiceCat, service.getStoreArr()));
	}
	
	public void sortUI(StoreVO[] choiceArr) {
		StoreVO[] newArr = service.sortChoiceArrByDis(this.userPos, choiceArr);
		service.setNewArr(newArr);
	}
	
	public void init() {
		this.userUI();
		this.choiceUI();
		this.sortUI(service.getChoiceArr());
		int idx = 1;
		for(StoreVO store : service.getNewArr() ) {
			System.out.println(idx+"번째 가까운 식당"+store.getName());
			idx++;
		}
		
		
	}
	
	
}
