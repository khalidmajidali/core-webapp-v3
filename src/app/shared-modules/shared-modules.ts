import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';


@NgModule({
    declarations: [
        EscapeHtmlPipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        EscapeHtmlPipe
    ],
    imports: [],
})
export class SharedModule { }
