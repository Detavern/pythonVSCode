// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/xml2js/xml2js.d.ts
declare module 'xml2js' {

    export = xml2js;

    namespace xml2js {
        function parseString(xml: string, callback: (err: any, result: any) => void): void;
        function parseString(xml: string, options: Options, callback: (err: any, result: any) => void): void;

        var defaults: {
            '0.1': Options;
            '0.2': OptionsV2;
        }

        class Builder {
            constructor(options?: BuilderOptions);
            buildObject(rootObj: any): string;
        }

        class Parser {
            constructor(options?: Options);
            processAsync(): any;
            assignOrPush(obj: any, key: string, newValue: any): any;
            reset(): any;
            parseString(str: string , cb?: Function): void;
        }

        interface RenderOptions {
            indent?: string;
            newline?: string;
            pretty?: boolean;
        }

        interface XMLDeclarationOptions {
            encoding?: string;
            standalone?: boolean;
            version?: string;
        }

        interface BuilderOptions {
            doctype?: any;
            headless?: boolean;
            indent?: string;
            newline?: string;
            pretty?: boolean;
            renderOpts?: RenderOptions;
            rootName?: string;
            xmldec?: XMLDeclarationOptions;
        }

        interface Options {
            async?: boolean;
            attrkey?: string;
            attrNameProcessors?: [(name: string) => string];
            attrValueProcessors?: [(name: string) => string];
            charkey?: string;
            charsAsChildren?: boolean;
            childkey?: string;
            emptyTag?: any;
            explicitArray?: boolean;
            explicitCharkey?: boolean;
            explicitChildren?: boolean;
            explicitRoot?: boolean;
            ignoreAttrs?: boolean;
            mergeAttrs?: boolean;
            normalize?: boolean;
            normalizeTags?: boolean;
            strict?: boolean;
            tagNameProcessors?: [(name: string) => string];
            trim?: boolean;
            validator?: Function;
            valueProcessors?: [(name: string) => string];
            xmlns?: boolean;
        }

        interface OptionsV2 extends Options {
            preserveChildrenOrder?: boolean;
            rootName?: string;
            xmldec?: {
                version: string;
                encoding?: string;
                standalone?: boolean;
            };
            doctype?: any;
            renderOpts?: {
                pretty?: boolean;
                indent?: string;
                newline?: string;
            };
            headless?: boolean;
            chunkSize?: number;
            cdata?: boolean;
        }
    }
}
