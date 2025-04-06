import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template:`<p appHighlight>Highlight me</p>`
})

class TestComponent {}

describe('HighlightDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HighlightDirective, TestComponent],
        })

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    })

    it('should highlight background on hover', ()=>{
        const p = fixture.debugElement.query(By.css('p'))
        p.triggerEventHandler('mouseenter', {});
        expect(p.nativeElement.style.backgroundColor).toBe('rgb(224, 247, 250)')
    })
});
