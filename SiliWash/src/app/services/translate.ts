import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core/public_api";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}