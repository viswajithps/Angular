import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testapp app is running!');
  });

  it('a should have the value 10',()=>{
    let app=new AppComponent();
    expect(app.a).toEqual(10);
  });

  it('should compute the value of a+b equal to 30',()=>{
    let app=new AppComponent();
    expect(app.a+app.b).toEqual(30);
  });

  it('should compute the value of a-b equal to 10',()=>{
    let app=new AppComponent();
    expect((app.a-app.b)==-10).toBe(true);
  })
});
