import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { 
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatSnackBarModule,
        MatStepperModule,
        MatGridListModule,
        MatBadgeModule,
        MatExpansionModule,
        MatRadioModule,
        MatSidenavModule
        } from '@angular/material';
// import {BrowserModule} from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@NgModule({
    imports: [
        CommonModule, 
        BrowserAnimationsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatSnackBarModule,
        MatStepperModule,
        MatGridListModule,
        MatBadgeModule,
        MatExpansionModule,
        MatRadioModule,
        MatSidenavModule
        ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatSnackBarModule,
        MatStepperModule,
        MatGridListModule,
        MatBadgeModule,
        MatExpansionModule,
        MatRadioModule,
        MatSidenavModule
        ],
    declarations: []
})
export class OpticCustomMaterialModule { 
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'add_employee',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add_employee.svg'));
        iconRegistry.addSvgIcon(
            'box',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/box.svg'));
        iconRegistry.addSvgIcon(
            'brand',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/brand.svg'));
        iconRegistry.addSvgIcon(
            'dashboard',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'));
        iconRegistry.addSvgIcon(
            'employee',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/employee.svg'));
        iconRegistry.addSvgIcon(
            'frame_material',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/frame_material.svg'));
        iconRegistry.addSvgIcon(
            'frame_type',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/frame_type.svg'));
        iconRegistry.addSvgIcon(
            'lens',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lens.svg'));
        iconRegistry.addSvgIcon(
            'list_employee',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/list_employee.svg'));
        iconRegistry.addSvgIcon(
            'product',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/product.svg'));
        iconRegistry.addSvgIcon(
            'spects',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/spects.svg'));
      }
}