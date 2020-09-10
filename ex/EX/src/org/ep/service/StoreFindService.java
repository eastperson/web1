package org.ep.service;

import java.util.Arrays;

import org.ep.dto.Position;
import org.ep.dto.StoreVO;

public enum StoreFindService {
	
	INSTANCE;
	
	StoreVO[] storeArr = new StoreVO[] {
			new StoreVO("�췡��", 37.568386, 126.998756, "�ѽ�"),
			new StoreVO("���������������", 37.550624, 127.126389, "�ѽ�"),
			new StoreVO("��������", 37.484760, 127.038022, "�ѽ�"),
			new StoreVO("Ȳ�Ұ���", 37.568775, 126.986073, "���"),
			new StoreVO("�ϳ������� ���ε�������", 37.484458, 126.901877, "�ѽ�"),
			new StoreVO("���Ĵ�", 37.525697, 127.041080, "�߽�")
	};
	
	StoreVO[] choiceArr;
	StoreVO[] newArr;
	
	
	
	public String choiceCat(int choice) {

		switch (choice) {
		case 1:
			return "�ѽ�";

		case 2:
			return "�߽�";

		case 3:
			return "���";

		case 4:
			return "�Ͻ�";

		default:
			break;
		}
		return null;
	}
	
	public StoreVO[] findStoreByCat(String choiceCat, StoreVO[] storeArr) {
		StoreVO[] choiceArr = new StoreVO[storeArr.length];
		int idx = 0;
		for (int i = 0; i < storeArr.length; i++) {
			if(storeArr[i].getCategory().equals(choiceCat)) {
				choiceArr[idx++]=storeArr[i];
			}
		}
		this.choiceArr = choiceArr;
		return choiceArr;
	}
	
	
	public StoreVO[] sortChoiceArrByDis(Position currentPos, StoreVO[] choiceArr) {
		
		int idx = 0;
		for(int i = 0; i < choiceArr.length; i++) {
			if(choiceArr[i] == null) {
				idx = i;
				break;
			}
		}
		StoreVO[] newArr = Arrays.copyOf(choiceArr, idx);
		
		Arrays.sort(newArr, (o1, o2) -> {
			
			double d1 = Math.sqrt(Math.pow(currentPos.getLat()-o1.getPosition().getLat(), 2)
					+ Math.pow(currentPos.getLng()-o1.getPosition().getLng(), 2));
			
			double d2 = Math.sqrt(Math.pow(currentPos.getLat()-o2.getPosition().getLat(), 2)
					+ Math.pow(currentPos.getLng()-o2.getPosition().getLng(), 2));
			
			return d1 > d2? 1: -1;
		
		});
		return newArr;
	}
	
	public StoreVO[] getStoreArr() {
		return this.storeArr;
	}
	
	public StoreVO[] getChoiceArr() {
		return this.choiceArr;
	}
	
	public StoreVO[] getNewArr() {
		return this.newArr;
	}
	
	public void setChoiceArr(StoreVO[] choiceArr) {
		this.choiceArr = choiceArr;
	}
	
	public void setNewArr(StoreVO[] newArr) {
		this.newArr = newArr;
	}
	
	
	
}