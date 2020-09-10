package org.ep.dto;

public class StoreVO {
	private String name;
	private Position position;
	private String category;
	
	public StoreVO(String name, Position position, String category) {
		super();
		this.name = name;
		this.position = position;
		this.category = category;
	}
	
	public StoreVO(String name, double lat, double lng, String category) {
		super();
		this.name = name;
		this.position = new Position(lat, lng);
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "StoreVO [name=" + name + ", position=" + position + ", category=" + category + "]";
	}
	
	
	
}
