import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoComponent } from './product-info';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar con cantidad en 0', () => {
    expect(component.quantity).toBe(0);
  });

  it('debería incrementar la cantidad', () => {
    component.incrementQuantity();
    expect(component.quantity).toBe(1);
    
    component.incrementQuantity();
    expect(component.quantity).toBe(2);
  });

  it('debería decrementar la cantidad', () => {
    component.quantity = 3;
    component.decrementQuantity();
    expect(component.quantity).toBe(2);
  });

  it('no debería decrementar por debajo de 0', () => {
    component.quantity = 0;
    component.decrementQuantity();
    expect(component.quantity).toBe(0);
  });

  it('debería emitir el evento addToCart con la cantidad correcta', () => {
    
    component.quantity = 3;
    component.addToCart.subscribe((quantity: number) => {
    expect(quantity).toBe(3);
    // Indica que el test asíncrono terminó
    });
  
    component.onAddToCart();
  });

  it('no debería emitir addToCart si la cantidad es 0', () => {
    
    component.quantity = 0;
    component.addToCart.subscribe((quantity: number) => {
    expect(quantity).toBe(0);
     // Indica que el test asíncrono terminó
  });
    component.onAddToCart();
    
    expect(component.addToCart.emit).not.toHaveBeenCalled();
  });

  it('debería calcular el descuento correctamente', () => {
    component.currentPrice = 125;
    component.originalPrice = 250;
    
    expect(component.getDiscount()).toBe(125);
  });

  it('debería tener los datos del producto correctos', () => {
    expect(component.brand).toBe('SNEAKER COMPANY');
    expect(component.productName).toBe('Fall Limited Edition Sneakers');
    expect(component.currentPrice).toBe(125.00);
    expect(component.originalPrice).toBe(250.00);
    expect(component.discountPercentage).toBe(50);
  });
});