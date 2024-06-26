import { Pipe, PipeTransform, SecurityContext, inject } from '@angular/core';
import {
    DomSanitizer,
    SafeHtml,
    SafeStyle,
    SafeScript,
    SafeUrl,
    SafeResourceUrl,
} from '@angular/platform-browser';

@Pipe({ name: 'keepHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
    _sanitizer = inject(DomSanitizer)
    public transform(
        value: string,
        type: string
    ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        switch (type) {
            case 'html':
                console.log(this._sanitizer.sanitize(
                    SecurityContext.HTML,
                    this._sanitizer.bypassSecurityTrustHtml(value)
                ));

                return this._sanitizer.sanitize(
                    SecurityContext.HTML,
                    this._sanitizer.bypassSecurityTrustHtml(value)
                );
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Unable to bypass security for invalid type: ${type}`);
        }
    }
}
