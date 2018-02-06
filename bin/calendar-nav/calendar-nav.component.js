"use strict";
var core_1 = require("@angular/core");
var CalendarNavComponent = (function () {
    function CalendarNavComponent() {
        this.isLabelClickable = false;
        this.showLeftNav = true;
        this.showLeftSecondaryNav = false;
        this.showRightNav = true;
        this.showRightSecondaryNav = false;
        this.leftNavDisabled = false;
        this.leftSecondaryNavDisabled = false;
        this.rightNavDisabled = false;
        this.rightSecondaryNavDisabled = false;
        this.showGoToCurrent = true;
        this.onLeftNav = new core_1.EventEmitter();
        this.onLeftSecondaryNav = new core_1.EventEmitter();
        this.onRightNav = new core_1.EventEmitter();
        this.onRightSecondaryNav = new core_1.EventEmitter();
        this.onLabelClick = new core_1.EventEmitter();
        this.goToCurrent = new core_1.EventEmitter();
    }
    CalendarNavComponent.prototype.leftNavClicked = function () {
        this.onLeftNav.emit();
    };
    CalendarNavComponent.prototype.leftSecondaryNavClicked = function () {
        this.onLeftSecondaryNav.emit();
    };
    CalendarNavComponent.prototype.rightNavClicked = function () {
        this.onRightNav.emit();
    };
    CalendarNavComponent.prototype.rightSecondaryNavClicked = function () {
        this.onRightSecondaryNav.emit();
    };
    CalendarNavComponent.prototype.labelClicked = function () {
        this.onLabelClick.emit();
    };
    return CalendarNavComponent;
}());
CalendarNavComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'dp-calendar-nav',
                template: "<div class=\"dp-calendar-nav-container\">\n   <div class=\"dp-nav-header\">\n     <span [hidden]=\"isLabelClickable\"\n           [attr.data-hidden]=\"isLabelClickable\"\n           [innerText]=\"label\">\n     </span>\n     <button type=\"button\"\n             class=\"dp-nav-header-btn\"\n             [hidden]=\"!isLabelClickable\"\n             [attr.data-hidden]=\"!isLabelClickable\"\n             (click)=\"labelClicked()\"\n             [innerText]=\"label\">\n     </button>\n   </div>\n \n   <div class=\"dp-nav-btns-container\">\n     <div class=\"dp-calendar-nav-container-left\">\n       <button type=\"button\"\n               class=\"dp-calendar-secondary-nav-left\"\n               *ngIf=\"showLeftSecondaryNav\"\n               [disabled]=\"leftSecondaryNavDisabled\"\n               (click)=\"leftSecondaryNavClicked()\">\n       </button>\n       <button type=\"button\"\n               class=\"dp-calendar-nav-left\"\n               [hidden]=\"!showLeftNav\"\n               [attr.data-hidden]=\"!showLeftNav\"\n               [disabled]=\"leftNavDisabled\"\n               (click)=\"leftNavClicked()\">\n       </button>\n     </div>\n     <button type=\"button\"\n             class=\"dp-current-location-btn\"\n             *ngIf=\"showGoToCurrent\"\n             (click)=\"goToCurrent.emit()\">\n     </button>\n     <div class=\"dp-calendar-nav-container-right\">\n       <button type=\"button\"\n               class=\"dp-calendar-nav-right\"\n               [hidden]=\"!showRightNav\"\n               [attr.data-hidden]=\"!showRightNav\"\n               [disabled]=\"rightNavDisabled\"\n               (click)=\"rightNavClicked()\">\n       </button>\n       <button type=\"button\"\n               class=\"dp-calendar-secondary-nav-right\"\n               *ngIf=\"showRightSecondaryNav\"\n               [disabled]=\"rightSecondaryNavDisabled\"\n               (click)=\"rightSecondaryNavClicked()\">\n       </button>\n     </div>\n   </div>\n </div>\n ",
                styles: ['dp-calendar-nav .dp-calendar-nav-container {  position: relative;  box-sizing: border-box;  height: 25px;  border: 1px solid #000000;  border-bottom: none;}dp-calendar-nav .dp-nav-date-btn {  box-sizing: border-box;  height: 25px;  border: 1px solid #000000;  border-bottom: none;}dp-calendar-nav .dp-nav-btns-container {  position: absolute;  top: 50%;  transform: translateY(-50%);  right: 5px;  display: inline-block;}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right {  display: inline-block;}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right {  position: relative;  width: 16px;  cursor: pointer;}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right {  line-height: 0;}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-nav-right::before {  position: relative;  content: \'\';  display: inline-block;  height: 8px;  width: 8px;  vertical-align: baseline;  border-style: solid;  border-width: 2px 2px 0 0;  transform: rotate(45deg);}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right {  padding: 0;}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::before,dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-right::after {  position: relative;  content: \'\';  display: inline-block;  height: 8px;  width: 8px;  vertical-align: baseline;  border-style: solid;  border-width: 2px 2px 0 0;  transform: rotate(45deg);}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::before {  right: -5px;}dp-calendar-nav .dp-calendar-secondary-nav-right {  left: initial;  right: 5px;}dp-calendar-nav .dp-calendar-nav-left::before {  position: relative;  content: \'\';  display: inline-block;  height: 8px;  width: 8px;  vertical-align: baseline;  border-style: solid;  border-width: 2px 2px 0 0;  transform: rotate(-135deg);}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-left::after {  position: relative;  content: \'\';  display: inline-block;  height: 8px;  width: 8px;  vertical-align: baseline;  border-style: solid;  border-width: 2px 2px 0 0;  transform: rotate(-135deg);}dp-calendar-nav .dp-calendar-secondary-nav-left::before {  right: -5px;}dp-calendar-nav .dp-nav-header {  position: absolute;  top: 50%;  transform: translateY(-50%);  left: 5px;  display: inline-block;  font-size: 13px;}dp-calendar-nav .dp-nav-header-btn {  cursor: pointer;}dp-calendar-nav .dp-current-location-btn {  position: relative;  top: -1px;  height: 16px;  width: 16px;  vertical-align: middle;  background: rgba(0, 0, 0, 0.6);  border: 1px solid rgba(0, 0, 0, 0.6);  outline: none;  border-radius: 50%;  box-shadow: inset 0 0 0 3px #FFFFFF;  cursor: pointer;}dp-calendar-nav .dp-current-location-btn:hover {  background: #000000;}dp-calendar-nav.dp-material .dp-calendar-nav-container {  height: 30px;  border: 1px solid #E0E0E0;}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right {  border: none;  background: #FFFFFF;  outline: none;  font-size: 16px;  padding: 0;}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right {  width: 20px;}dp-calendar-nav.dp-material .dp-nav-header-btn {  height: 20px;  width: 80px;  border: none;  background: #FFFFFF;  outline: none;}dp-calendar-nav.dp-material .dp-nav-header-btn:hover {  background: rgba(0, 0, 0, 0.05);}dp-calendar-nav.dp-material .dp-nav-header-btn:active {  background: rgba(0, 0, 0, 0.1);}'],
                encapsulation: core_1.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
CalendarNavComponent.ctorParameters = function () { return []; };
CalendarNavComponent.propDecorators = {
    'label': [{ type: core_1.Input },],
    'isLabelClickable': [{ type: core_1.Input },],
    'showLeftNav': [{ type: core_1.Input },],
    'showLeftSecondaryNav': [{ type: core_1.Input },],
    'showRightNav': [{ type: core_1.Input },],
    'showRightSecondaryNav': [{ type: core_1.Input },],
    'leftNavDisabled': [{ type: core_1.Input },],
    'leftSecondaryNavDisabled': [{ type: core_1.Input },],
    'rightNavDisabled': [{ type: core_1.Input },],
    'rightSecondaryNavDisabled': [{ type: core_1.Input },],
    'showGoToCurrent': [{ type: core_1.Input },],
    'theme': [{ type: core_1.HostBinding, args: ['class',] }, { type: core_1.Input },],
    'onLeftNav': [{ type: core_1.Output },],
    'onLeftSecondaryNav': [{ type: core_1.Output },],
    'onRightNav': [{ type: core_1.Output },],
    'onRightSecondaryNav': [{ type: core_1.Output },],
    'onLabelClick': [{ type: core_1.Output },],
    'goToCurrent': [{ type: core_1.Output },],
};
exports.CalendarNavComponent = CalendarNavComponent;
//# sourceMappingURL=calendar-nav.component.js.map