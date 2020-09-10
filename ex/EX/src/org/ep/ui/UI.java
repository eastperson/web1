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
		System.out.println("����� ������ �Է��ϼ���");
		double userLat = Double.parseDouble(sc.nextLine());
		System.out.println("����� �浵�� �Է��ϼ���");
		double userLng = Double.parseDouble(sc.nextLine());
		
		this.userPos = new Position(userLat, userLng);
		
	}
	
	public void choiceUI() {
		System.out.println("�޴��� �����ϼ���");
		System.out.println("1) �ѽ� 2) �߽� 3) ��� 4) �Ͻ�");
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
			System.out.println(idx+"��° ����� �Ĵ�"+store.getName());
			idx++;
		}
		
		
	}
	
	
}
