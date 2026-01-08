import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageComponent } from './product-image';

describe('ProductImageComponent', () => {
  let component: ProductImageComponent;
  let fixture: ComponentFixture<ProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar en la primera imagen (índice 0)', () => {
    expect(component.currentImageIndex).toBe(0);
  });

  it('debería avanzar a la siguiente imagen', () => {
    component.nextImage();
    expect(component.currentImageIndex).toBe(1);
  });

  it('debería retroceder a la imagen anterior', () => {
    component.currentImageIndex = 2;
    component.previousImage();
    expect(component.currentImageIndex).toBe(1);
  });

  it('debería volver a la última imagen al retroceder desde la primera', () => {
    component.currentImageIndex = 0;
    component.previousImage();
    expect(component.currentImageIndex).toBe(3);
  });

  it('debería volver a la primera imagen al avanzar desde la última', () => {
    component.currentImageIndex = 3;
    component.nextImage();
    expect(component.currentImageIndex).toBe(0);
  });

  it('debería seleccionar una imagen específica', () => {
    component.selectImage(2);
    expect(component.currentImageIndex).toBe(2);
  });

  it('debería retornar true si el índice está activo', () => {
    component.currentImageIndex = 1;
    expect(component.isActive(1)).toBe(true);
    expect(component.isActive(0)).toBe(false);
  });

  it('debería retornar la imagen actual correctamente', () => {
    component.currentImageIndex = 2;
    expect(component.getCurrentImage()).toBe('assets/images/image-product-3.jpg');
  });
});