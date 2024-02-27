
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fruit
 * 
 */
export type Fruit = $Result.DefaultSelection<Prisma.$FruitPayload>
/**
 * Model Nutritions
 * 
 */
export type Nutritions = $Result.DefaultSelection<Prisma.$NutritionsPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Poem
 * 
 */
export type Poem = $Result.DefaultSelection<Prisma.$PoemPayload>
/**
 * Model RockPaperScissor
 * 
 */
export type RockPaperScissor = $Result.DefaultSelection<Prisma.$RockPaperScissorPayload>
/**
 * Model WinningMatch
 * 
 */
export type WinningMatch = $Result.DefaultSelection<Prisma.$WinningMatchPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model Measurement
 * 
 */
export type Measurement = $Result.DefaultSelection<Prisma.$MeasurementPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fruits
 * const fruits = await prisma.fruit.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fruits
   * const fruits = await prisma.fruit.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.fruit`: Exposes CRUD operations for the **Fruit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fruits
    * const fruits = await prisma.fruit.findMany()
    * ```
    */
  get fruit(): Prisma.FruitDelegate<ExtArgs>;

  /**
   * `prisma.nutritions`: Exposes CRUD operations for the **Nutritions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nutritions
    * const nutritions = await prisma.nutritions.findMany()
    * ```
    */
  get nutritions(): Prisma.NutritionsDelegate<ExtArgs>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs>;

  /**
   * `prisma.poem`: Exposes CRUD operations for the **Poem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Poems
    * const poems = await prisma.poem.findMany()
    * ```
    */
  get poem(): Prisma.PoemDelegate<ExtArgs>;

  /**
   * `prisma.rockPaperScissor`: Exposes CRUD operations for the **RockPaperScissor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RockPaperScissors
    * const rockPaperScissors = await prisma.rockPaperScissor.findMany()
    * ```
    */
  get rockPaperScissor(): Prisma.RockPaperScissorDelegate<ExtArgs>;

  /**
   * `prisma.winningMatch`: Exposes CRUD operations for the **WinningMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WinningMatches
    * const winningMatches = await prisma.winningMatch.findMany()
    * ```
    */
  get winningMatch(): Prisma.WinningMatchDelegate<ExtArgs>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **Measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.MeasurementDelegate<ExtArgs>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fruit: 'Fruit',
    Nutritions: 'Nutritions',
    Author: 'Author',
    Poem: 'Poem',
    RockPaperScissor: 'RockPaperScissor',
    WinningMatch: 'WinningMatch',
    Recipe: 'Recipe',
    Ingredient: 'Ingredient',
    Measurement: 'Measurement',
    Tags: 'Tags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'fruit' | 'nutritions' | 'author' | 'poem' | 'rockPaperScissor' | 'winningMatch' | 'recipe' | 'ingredient' | 'measurement' | 'tags'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Fruit: {
        payload: Prisma.$FruitPayload<ExtArgs>
        fields: Prisma.FruitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FruitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FruitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          findFirst: {
            args: Prisma.FruitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FruitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          findMany: {
            args: Prisma.FruitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>[]
          }
          create: {
            args: Prisma.FruitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          createMany: {
            args: Prisma.FruitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FruitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          update: {
            args: Prisma.FruitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          deleteMany: {
            args: Prisma.FruitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FruitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FruitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FruitPayload>
          }
          aggregate: {
            args: Prisma.FruitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFruit>
          }
          groupBy: {
            args: Prisma.FruitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FruitGroupByOutputType>[]
          }
          count: {
            args: Prisma.FruitCountArgs<ExtArgs>,
            result: $Utils.Optional<FruitCountAggregateOutputType> | number
          }
        }
      }
      Nutritions: {
        payload: Prisma.$NutritionsPayload<ExtArgs>
        fields: Prisma.NutritionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          findFirst: {
            args: Prisma.NutritionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          findMany: {
            args: Prisma.NutritionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>[]
          }
          create: {
            args: Prisma.NutritionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          createMany: {
            args: Prisma.NutritionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NutritionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          update: {
            args: Prisma.NutritionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          deleteMany: {
            args: Prisma.NutritionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NutritionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NutritionsPayload>
          }
          aggregate: {
            args: Prisma.NutritionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNutritions>
          }
          groupBy: {
            args: Prisma.NutritionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NutritionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionsCountArgs<ExtArgs>,
            result: $Utils.Optional<NutritionsCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Poem: {
        payload: Prisma.$PoemPayload<ExtArgs>
        fields: Prisma.PoemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          findFirst: {
            args: Prisma.PoemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          findMany: {
            args: Prisma.PoemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>[]
          }
          create: {
            args: Prisma.PoemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          createMany: {
            args: Prisma.PoemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PoemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          update: {
            args: Prisma.PoemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          deleteMany: {
            args: Prisma.PoemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PoemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PoemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PoemPayload>
          }
          aggregate: {
            args: Prisma.PoemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePoem>
          }
          groupBy: {
            args: Prisma.PoemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PoemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoemCountArgs<ExtArgs>,
            result: $Utils.Optional<PoemCountAggregateOutputType> | number
          }
        }
      }
      RockPaperScissor: {
        payload: Prisma.$RockPaperScissorPayload<ExtArgs>
        fields: Prisma.RockPaperScissorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RockPaperScissorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RockPaperScissorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>
          }
          findFirst: {
            args: Prisma.RockPaperScissorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RockPaperScissorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>
          }
          findMany: {
            args: Prisma.RockPaperScissorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>[]
          }
          create: {
            args: Prisma.RockPaperScissorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>
          }
          createMany: {
            args: Prisma.RockPaperScissorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RockPaperScissorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>
          }
          update: {
            args: Prisma.RockPaperScissorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>
          }
          deleteMany: {
            args: Prisma.RockPaperScissorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RockPaperScissorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RockPaperScissorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RockPaperScissorPayload>
          }
          aggregate: {
            args: Prisma.RockPaperScissorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRockPaperScissor>
          }
          groupBy: {
            args: Prisma.RockPaperScissorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RockPaperScissorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RockPaperScissorCountArgs<ExtArgs>,
            result: $Utils.Optional<RockPaperScissorCountAggregateOutputType> | number
          }
        }
      }
      WinningMatch: {
        payload: Prisma.$WinningMatchPayload<ExtArgs>
        fields: Prisma.WinningMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinningMatchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinningMatchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>
          }
          findFirst: {
            args: Prisma.WinningMatchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinningMatchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>
          }
          findMany: {
            args: Prisma.WinningMatchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>[]
          }
          create: {
            args: Prisma.WinningMatchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>
          }
          createMany: {
            args: Prisma.WinningMatchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WinningMatchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>
          }
          update: {
            args: Prisma.WinningMatchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>
          }
          deleteMany: {
            args: Prisma.WinningMatchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WinningMatchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WinningMatchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WinningMatchPayload>
          }
          aggregate: {
            args: Prisma.WinningMatchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWinningMatch>
          }
          groupBy: {
            args: Prisma.WinningMatchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WinningMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinningMatchCountArgs<ExtArgs>,
            result: $Utils.Optional<WinningMatchCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>,
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      Measurement: {
        payload: Prisma.$MeasurementPayload<ExtArgs>
        fields: Prisma.MeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findFirst: {
            args: Prisma.MeasurementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findMany: {
            args: Prisma.MeasurementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          create: {
            args: Prisma.MeasurementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          createMany: {
            args: Prisma.MeasurementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MeasurementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          update: {
            args: Prisma.MeasurementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MeasurementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.MeasurementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementCountArgs<ExtArgs>,
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NutritionsCountOutputType
   */

  export type NutritionsCountOutputType = {
    Fruit: number
  }

  export type NutritionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fruit?: boolean | NutritionsCountOutputTypeCountFruitArgs
  }

  // Custom InputTypes

  /**
   * NutritionsCountOutputType without action
   */
  export type NutritionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionsCountOutputType
     */
    select?: NutritionsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * NutritionsCountOutputType without action
   */
  export type NutritionsCountOutputTypeCountFruitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FruitWhereInput
  }



  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    poems: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poems?: boolean | AuthorCountOutputTypeCountPoemsArgs
  }

  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountPoemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoemWhereInput
  }



  /**
   * Count Type RockPaperScissorCountOutputType
   */

  export type RockPaperScissorCountOutputType = {
    winningMatches: number
  }

  export type RockPaperScissorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winningMatches?: boolean | RockPaperScissorCountOutputTypeCountWinningMatchesArgs
  }

  // Custom InputTypes

  /**
   * RockPaperScissorCountOutputType without action
   */
  export type RockPaperScissorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissorCountOutputType
     */
    select?: RockPaperScissorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RockPaperScissorCountOutputType without action
   */
  export type RockPaperScissorCountOutputTypeCountWinningMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinningMatchWhereInput
  }



  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
    measurements: number
    tags: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    measurements?: boolean | RecipeCountOutputTypeCountMeasurementsArgs
    tags?: boolean | RecipeCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }


  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
  }


  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Fruit
   */

  export type AggregateFruit = {
    _count: FruitCountAggregateOutputType | null
    _avg: FruitAvgAggregateOutputType | null
    _sum: FruitSumAggregateOutputType | null
    _min: FruitMinAggregateOutputType | null
    _max: FruitMaxAggregateOutputType | null
  }

  export type FruitAvgAggregateOutputType = {
    id: number | null
    nutritionsId: number | null
  }

  export type FruitSumAggregateOutputType = {
    id: number | null
    nutritionsId: number | null
  }

  export type FruitMinAggregateOutputType = {
    id: number | null
    name: string | null
    family: string | null
    order: string | null
    genus: string | null
    nutritionsId: number | null
  }

  export type FruitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    family: string | null
    order: string | null
    genus: string | null
    nutritionsId: number | null
  }

  export type FruitCountAggregateOutputType = {
    id: number
    name: number
    family: number
    order: number
    genus: number
    nutritionsId: number
    _all: number
  }


  export type FruitAvgAggregateInputType = {
    id?: true
    nutritionsId?: true
  }

  export type FruitSumAggregateInputType = {
    id?: true
    nutritionsId?: true
  }

  export type FruitMinAggregateInputType = {
    id?: true
    name?: true
    family?: true
    order?: true
    genus?: true
    nutritionsId?: true
  }

  export type FruitMaxAggregateInputType = {
    id?: true
    name?: true
    family?: true
    order?: true
    genus?: true
    nutritionsId?: true
  }

  export type FruitCountAggregateInputType = {
    id?: true
    name?: true
    family?: true
    order?: true
    genus?: true
    nutritionsId?: true
    _all?: true
  }

  export type FruitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fruit to aggregate.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fruits
    **/
    _count?: true | FruitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FruitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FruitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitMaxAggregateInputType
  }

  export type GetFruitAggregateType<T extends FruitAggregateArgs> = {
        [P in keyof T & keyof AggregateFruit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruit[P]>
      : GetScalarType<T[P], AggregateFruit[P]>
  }




  export type FruitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FruitWhereInput
    orderBy?: FruitOrderByWithAggregationInput | FruitOrderByWithAggregationInput[]
    by: FruitScalarFieldEnum[] | FruitScalarFieldEnum
    having?: FruitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitCountAggregateInputType | true
    _avg?: FruitAvgAggregateInputType
    _sum?: FruitSumAggregateInputType
    _min?: FruitMinAggregateInputType
    _max?: FruitMaxAggregateInputType
  }

  export type FruitGroupByOutputType = {
    id: number
    name: string
    family: string
    order: string
    genus: string
    nutritionsId: number
    _count: FruitCountAggregateOutputType | null
    _avg: FruitAvgAggregateOutputType | null
    _sum: FruitSumAggregateOutputType | null
    _min: FruitMinAggregateOutputType | null
    _max: FruitMaxAggregateOutputType | null
  }

  type GetFruitGroupByPayload<T extends FruitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitGroupByOutputType[P]>
            : GetScalarType<T[P], FruitGroupByOutputType[P]>
        }
      >
    >


  export type FruitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    family?: boolean
    order?: boolean
    genus?: boolean
    nutritionsId?: boolean
    nutritions?: boolean | NutritionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fruit"]>

  export type FruitSelectScalar = {
    id?: boolean
    name?: boolean
    family?: boolean
    order?: boolean
    genus?: boolean
    nutritionsId?: boolean
  }

  export type FruitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nutritions?: boolean | NutritionsDefaultArgs<ExtArgs>
  }


  export type $FruitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fruit"
    objects: {
      nutritions: Prisma.$NutritionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      family: string
      order: string
      genus: string
      nutritionsId: number
    }, ExtArgs["result"]["fruit"]>
    composites: {}
  }


  type FruitGetPayload<S extends boolean | null | undefined | FruitDefaultArgs> = $Result.GetResult<Prisma.$FruitPayload, S>

  type FruitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FruitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FruitCountAggregateInputType | true
    }

  export interface FruitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fruit'], meta: { name: 'Fruit' } }
    /**
     * Find zero or one Fruit that matches the filter.
     * @param {FruitFindUniqueArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FruitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FruitFindUniqueArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fruit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FruitFindUniqueOrThrowArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FruitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FruitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fruit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitFindFirstArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FruitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FruitFindFirstArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fruit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitFindFirstOrThrowArgs} args - Arguments to find a Fruit
     * @example
     * // Get one Fruit
     * const fruit = await prisma.fruit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FruitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FruitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fruits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fruits
     * const fruits = await prisma.fruit.findMany()
     * 
     * // Get first 10 Fruits
     * const fruits = await prisma.fruit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitWithIdOnly = await prisma.fruit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FruitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FruitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fruit.
     * @param {FruitCreateArgs} args - Arguments to create a Fruit.
     * @example
     * // Create one Fruit
     * const Fruit = await prisma.fruit.create({
     *   data: {
     *     // ... data to create a Fruit
     *   }
     * })
     * 
    **/
    create<T extends FruitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FruitCreateArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fruits.
     *     @param {FruitCreateManyArgs} args - Arguments to create many Fruits.
     *     @example
     *     // Create many Fruits
     *     const fruit = await prisma.fruit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FruitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FruitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fruit.
     * @param {FruitDeleteArgs} args - Arguments to delete one Fruit.
     * @example
     * // Delete one Fruit
     * const Fruit = await prisma.fruit.delete({
     *   where: {
     *     // ... filter to delete one Fruit
     *   }
     * })
     * 
    **/
    delete<T extends FruitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FruitDeleteArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fruit.
     * @param {FruitUpdateArgs} args - Arguments to update one Fruit.
     * @example
     * // Update one Fruit
     * const fruit = await prisma.fruit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FruitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FruitUpdateArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fruits.
     * @param {FruitDeleteManyArgs} args - Arguments to filter Fruits to delete.
     * @example
     * // Delete a few Fruits
     * const { count } = await prisma.fruit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FruitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FruitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fruits
     * const fruit = await prisma.fruit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FruitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FruitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fruit.
     * @param {FruitUpsertArgs} args - Arguments to update or create a Fruit.
     * @example
     * // Update or create a Fruit
     * const fruit = await prisma.fruit.upsert({
     *   create: {
     *     // ... data to create a Fruit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fruit we want to update
     *   }
     * })
    **/
    upsert<T extends FruitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FruitUpsertArgs<ExtArgs>>
    ): Prisma__FruitClient<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitCountArgs} args - Arguments to filter Fruits to count.
     * @example
     * // Count the number of Fruits
     * const count = await prisma.fruit.count({
     *   where: {
     *     // ... the filter for the Fruits we want to count
     *   }
     * })
    **/
    count<T extends FruitCountArgs>(
      args?: Subset<T, FruitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fruit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitAggregateArgs>(args: Subset<T, FruitAggregateArgs>): Prisma.PrismaPromise<GetFruitAggregateType<T>>

    /**
     * Group by Fruit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FruitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FruitGroupByArgs['orderBy'] }
        : { orderBy?: FruitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FruitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fruit model
   */
  readonly fields: FruitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fruit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FruitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    nutritions<T extends NutritionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NutritionsDefaultArgs<ExtArgs>>): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Fruit model
   */ 
  interface FruitFieldRefs {
    readonly id: FieldRef<"Fruit", 'Int'>
    readonly name: FieldRef<"Fruit", 'String'>
    readonly family: FieldRef<"Fruit", 'String'>
    readonly order: FieldRef<"Fruit", 'String'>
    readonly genus: FieldRef<"Fruit", 'String'>
    readonly nutritionsId: FieldRef<"Fruit", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Fruit findUnique
   */
  export type FruitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where: FruitWhereUniqueInput
  }


  /**
   * Fruit findUniqueOrThrow
   */
  export type FruitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where: FruitWhereUniqueInput
  }


  /**
   * Fruit findFirst
   */
  export type FruitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fruits.
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fruits.
     */
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }


  /**
   * Fruit findFirstOrThrow
   */
  export type FruitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * Filter, which Fruit to fetch.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fruits.
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fruits.
     */
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }


  /**
   * Fruit findMany
   */
  export type FruitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * Filter, which Fruits to fetch.
     */
    where?: FruitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fruits to fetch.
     */
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fruits.
     */
    cursor?: FruitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fruits.
     */
    skip?: number
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }


  /**
   * Fruit create
   */
  export type FruitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * The data needed to create a Fruit.
     */
    data: XOR<FruitCreateInput, FruitUncheckedCreateInput>
  }


  /**
   * Fruit createMany
   */
  export type FruitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fruits.
     */
    data: FruitCreateManyInput | FruitCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Fruit update
   */
  export type FruitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * The data needed to update a Fruit.
     */
    data: XOR<FruitUpdateInput, FruitUncheckedUpdateInput>
    /**
     * Choose, which Fruit to update.
     */
    where: FruitWhereUniqueInput
  }


  /**
   * Fruit updateMany
   */
  export type FruitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fruits.
     */
    data: XOR<FruitUpdateManyMutationInput, FruitUncheckedUpdateManyInput>
    /**
     * Filter which Fruits to update
     */
    where?: FruitWhereInput
  }


  /**
   * Fruit upsert
   */
  export type FruitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * The filter to search for the Fruit to update in case it exists.
     */
    where: FruitWhereUniqueInput
    /**
     * In case the Fruit found by the `where` argument doesn't exist, create a new Fruit with this data.
     */
    create: XOR<FruitCreateInput, FruitUncheckedCreateInput>
    /**
     * In case the Fruit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FruitUpdateInput, FruitUncheckedUpdateInput>
  }


  /**
   * Fruit delete
   */
  export type FruitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    /**
     * Filter which Fruit to delete.
     */
    where: FruitWhereUniqueInput
  }


  /**
   * Fruit deleteMany
   */
  export type FruitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fruits to delete
     */
    where?: FruitWhereInput
  }


  /**
   * Fruit without action
   */
  export type FruitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
  }



  /**
   * Model Nutritions
   */

  export type AggregateNutritions = {
    _count: NutritionsCountAggregateOutputType | null
    _avg: NutritionsAvgAggregateOutputType | null
    _sum: NutritionsSumAggregateOutputType | null
    _min: NutritionsMinAggregateOutputType | null
    _max: NutritionsMaxAggregateOutputType | null
  }

  export type NutritionsAvgAggregateOutputType = {
    id: number | null
    calories: number | null
    fat: number | null
    sugar: number | null
    carbohydrates: number | null
    protein: number | null
  }

  export type NutritionsSumAggregateOutputType = {
    id: number | null
    calories: number | null
    fat: number | null
    sugar: number | null
    carbohydrates: number | null
    protein: number | null
  }

  export type NutritionsMinAggregateOutputType = {
    id: number | null
    calories: number | null
    fat: number | null
    sugar: number | null
    carbohydrates: number | null
    protein: number | null
  }

  export type NutritionsMaxAggregateOutputType = {
    id: number | null
    calories: number | null
    fat: number | null
    sugar: number | null
    carbohydrates: number | null
    protein: number | null
  }

  export type NutritionsCountAggregateOutputType = {
    id: number
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
    _all: number
  }


  export type NutritionsAvgAggregateInputType = {
    id?: true
    calories?: true
    fat?: true
    sugar?: true
    carbohydrates?: true
    protein?: true
  }

  export type NutritionsSumAggregateInputType = {
    id?: true
    calories?: true
    fat?: true
    sugar?: true
    carbohydrates?: true
    protein?: true
  }

  export type NutritionsMinAggregateInputType = {
    id?: true
    calories?: true
    fat?: true
    sugar?: true
    carbohydrates?: true
    protein?: true
  }

  export type NutritionsMaxAggregateInputType = {
    id?: true
    calories?: true
    fat?: true
    sugar?: true
    carbohydrates?: true
    protein?: true
  }

  export type NutritionsCountAggregateInputType = {
    id?: true
    calories?: true
    fat?: true
    sugar?: true
    carbohydrates?: true
    protein?: true
    _all?: true
  }

  export type NutritionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutritions to aggregate.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nutritions
    **/
    _count?: true | NutritionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionsMaxAggregateInputType
  }

  export type GetNutritionsAggregateType<T extends NutritionsAggregateArgs> = {
        [P in keyof T & keyof AggregateNutritions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutritions[P]>
      : GetScalarType<T[P], AggregateNutritions[P]>
  }




  export type NutritionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionsWhereInput
    orderBy?: NutritionsOrderByWithAggregationInput | NutritionsOrderByWithAggregationInput[]
    by: NutritionsScalarFieldEnum[] | NutritionsScalarFieldEnum
    having?: NutritionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionsCountAggregateInputType | true
    _avg?: NutritionsAvgAggregateInputType
    _sum?: NutritionsSumAggregateInputType
    _min?: NutritionsMinAggregateInputType
    _max?: NutritionsMaxAggregateInputType
  }

  export type NutritionsGroupByOutputType = {
    id: number
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
    _count: NutritionsCountAggregateOutputType | null
    _avg: NutritionsAvgAggregateOutputType | null
    _sum: NutritionsSumAggregateOutputType | null
    _min: NutritionsMinAggregateOutputType | null
    _max: NutritionsMaxAggregateOutputType | null
  }

  type GetNutritionsGroupByPayload<T extends NutritionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionsGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionsGroupByOutputType[P]>
        }
      >
    >


  export type NutritionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calories?: boolean
    fat?: boolean
    sugar?: boolean
    carbohydrates?: boolean
    protein?: boolean
    Fruit?: boolean | Nutritions$FruitArgs<ExtArgs>
    _count?: boolean | NutritionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritions"]>

  export type NutritionsSelectScalar = {
    id?: boolean
    calories?: boolean
    fat?: boolean
    sugar?: boolean
    carbohydrates?: boolean
    protein?: boolean
  }

  export type NutritionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fruit?: boolean | Nutritions$FruitArgs<ExtArgs>
    _count?: boolean | NutritionsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $NutritionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nutritions"
    objects: {
      Fruit: Prisma.$FruitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      calories: number
      fat: number
      sugar: number
      carbohydrates: number
      protein: number
    }, ExtArgs["result"]["nutritions"]>
    composites: {}
  }


  type NutritionsGetPayload<S extends boolean | null | undefined | NutritionsDefaultArgs> = $Result.GetResult<Prisma.$NutritionsPayload, S>

  type NutritionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NutritionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NutritionsCountAggregateInputType | true
    }

  export interface NutritionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nutritions'], meta: { name: 'Nutritions' } }
    /**
     * Find zero or one Nutritions that matches the filter.
     * @param {NutritionsFindUniqueArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NutritionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionsFindUniqueArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Nutritions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NutritionsFindUniqueOrThrowArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NutritionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsFindFirstArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NutritionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionsFindFirstArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Nutritions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsFindFirstOrThrowArgs} args - Arguments to find a Nutritions
     * @example
     * // Get one Nutritions
     * const nutritions = await prisma.nutritions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NutritionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nutritions
     * const nutritions = await prisma.nutritions.findMany()
     * 
     * // Get first 10 Nutritions
     * const nutritions = await prisma.nutritions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionsWithIdOnly = await prisma.nutritions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NutritionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Nutritions.
     * @param {NutritionsCreateArgs} args - Arguments to create a Nutritions.
     * @example
     * // Create one Nutritions
     * const Nutritions = await prisma.nutritions.create({
     *   data: {
     *     // ... data to create a Nutritions
     *   }
     * })
     * 
    **/
    create<T extends NutritionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionsCreateArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Nutritions.
     *     @param {NutritionsCreateManyArgs} args - Arguments to create many Nutritions.
     *     @example
     *     // Create many Nutritions
     *     const nutritions = await prisma.nutritions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NutritionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nutritions.
     * @param {NutritionsDeleteArgs} args - Arguments to delete one Nutritions.
     * @example
     * // Delete one Nutritions
     * const Nutritions = await prisma.nutritions.delete({
     *   where: {
     *     // ... filter to delete one Nutritions
     *   }
     * })
     * 
    **/
    delete<T extends NutritionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionsDeleteArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Nutritions.
     * @param {NutritionsUpdateArgs} args - Arguments to update one Nutritions.
     * @example
     * // Update one Nutritions
     * const nutritions = await prisma.nutritions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NutritionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionsUpdateArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Nutritions.
     * @param {NutritionsDeleteManyArgs} args - Arguments to filter Nutritions to delete.
     * @example
     * // Delete a few Nutritions
     * const { count } = await prisma.nutritions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NutritionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NutritionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nutritions
     * const nutritions = await prisma.nutritions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NutritionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nutritions.
     * @param {NutritionsUpsertArgs} args - Arguments to update or create a Nutritions.
     * @example
     * // Update or create a Nutritions
     * const nutritions = await prisma.nutritions.upsert({
     *   create: {
     *     // ... data to create a Nutritions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nutritions we want to update
     *   }
     * })
    **/
    upsert<T extends NutritionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NutritionsUpsertArgs<ExtArgs>>
    ): Prisma__NutritionsClient<$Result.GetResult<Prisma.$NutritionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsCountArgs} args - Arguments to filter Nutritions to count.
     * @example
     * // Count the number of Nutritions
     * const count = await prisma.nutritions.count({
     *   where: {
     *     // ... the filter for the Nutritions we want to count
     *   }
     * })
    **/
    count<T extends NutritionsCountArgs>(
      args?: Subset<T, NutritionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutritionsAggregateArgs>(args: Subset<T, NutritionsAggregateArgs>): Prisma.PrismaPromise<GetNutritionsAggregateType<T>>

    /**
     * Group by Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutritionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionsGroupByArgs['orderBy'] }
        : { orderBy?: NutritionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutritionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nutritions model
   */
  readonly fields: NutritionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nutritions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Fruit<T extends Nutritions$FruitArgs<ExtArgs> = {}>(args?: Subset<T, Nutritions$FruitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FruitPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Nutritions model
   */ 
  interface NutritionsFieldRefs {
    readonly id: FieldRef<"Nutritions", 'Int'>
    readonly calories: FieldRef<"Nutritions", 'Int'>
    readonly fat: FieldRef<"Nutritions", 'Int'>
    readonly sugar: FieldRef<"Nutritions", 'Int'>
    readonly carbohydrates: FieldRef<"Nutritions", 'Int'>
    readonly protein: FieldRef<"Nutritions", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Nutritions findUnique
   */
  export type NutritionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where: NutritionsWhereUniqueInput
  }


  /**
   * Nutritions findUniqueOrThrow
   */
  export type NutritionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where: NutritionsWhereUniqueInput
  }


  /**
   * Nutritions findFirst
   */
  export type NutritionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionsScalarFieldEnum | NutritionsScalarFieldEnum[]
  }


  /**
   * Nutritions findFirstOrThrow
   */
  export type NutritionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     */
    distinct?: NutritionsScalarFieldEnum | NutritionsScalarFieldEnum[]
  }


  /**
   * Nutritions findMany
   */
  export type NutritionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * Filter, which Nutritions to fetch.
     */
    where?: NutritionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     */
    orderBy?: NutritionsOrderByWithRelationInput | NutritionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nutritions.
     */
    cursor?: NutritionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     */
    skip?: number
    distinct?: NutritionsScalarFieldEnum | NutritionsScalarFieldEnum[]
  }


  /**
   * Nutritions create
   */
  export type NutritionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Nutritions.
     */
    data: XOR<NutritionsCreateInput, NutritionsUncheckedCreateInput>
  }


  /**
   * Nutritions createMany
   */
  export type NutritionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nutritions.
     */
    data: NutritionsCreateManyInput | NutritionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Nutritions update
   */
  export type NutritionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Nutritions.
     */
    data: XOR<NutritionsUpdateInput, NutritionsUncheckedUpdateInput>
    /**
     * Choose, which Nutritions to update.
     */
    where: NutritionsWhereUniqueInput
  }


  /**
   * Nutritions updateMany
   */
  export type NutritionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nutritions.
     */
    data: XOR<NutritionsUpdateManyMutationInput, NutritionsUncheckedUpdateManyInput>
    /**
     * Filter which Nutritions to update
     */
    where?: NutritionsWhereInput
  }


  /**
   * Nutritions upsert
   */
  export type NutritionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Nutritions to update in case it exists.
     */
    where: NutritionsWhereUniqueInput
    /**
     * In case the Nutritions found by the `where` argument doesn't exist, create a new Nutritions with this data.
     */
    create: XOR<NutritionsCreateInput, NutritionsUncheckedCreateInput>
    /**
     * In case the Nutritions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionsUpdateInput, NutritionsUncheckedUpdateInput>
  }


  /**
   * Nutritions delete
   */
  export type NutritionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
    /**
     * Filter which Nutritions to delete.
     */
    where: NutritionsWhereUniqueInput
  }


  /**
   * Nutritions deleteMany
   */
  export type NutritionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nutritions to delete
     */
    where?: NutritionsWhereInput
  }


  /**
   * Nutritions.Fruit
   */
  export type Nutritions$FruitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fruit
     */
    select?: FruitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FruitInclude<ExtArgs> | null
    where?: FruitWhereInput
    orderBy?: FruitOrderByWithRelationInput | FruitOrderByWithRelationInput[]
    cursor?: FruitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FruitScalarFieldEnum | FruitScalarFieldEnum[]
  }


  /**
   * Nutritions without action
   */
  export type NutritionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nutritions
     */
    select?: NutritionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NutritionsInclude<ExtArgs> | null
  }



  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    name: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    poems?: boolean | Author$poemsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poems?: boolean | Author$poemsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      poems: Prisma.$PoemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }


  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>
    ): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    poems<T extends Author$poemsArgs<ExtArgs> = {}>(args?: Subset<T, Author$poemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly name: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
  }


  /**
   * Author.poems
   */
  export type Author$poemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    where?: PoemWhereInput
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    cursor?: PoemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }


  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
  }



  /**
   * Model Poem
   */

  export type AggregatePoem = {
    _count: PoemCountAggregateOutputType | null
    _avg: PoemAvgAggregateOutputType | null
    _sum: PoemSumAggregateOutputType | null
    _min: PoemMinAggregateOutputType | null
    _max: PoemMaxAggregateOutputType | null
  }

  export type PoemAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PoemSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PoemMinAggregateOutputType = {
    id: number | null
    title: string | null
    lines: string | null
    authorId: number | null
  }

  export type PoemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    lines: string | null
    authorId: number | null
  }

  export type PoemCountAggregateOutputType = {
    id: number
    title: number
    lines: number
    authorId: number
    _all: number
  }


  export type PoemAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PoemSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PoemMinAggregateInputType = {
    id?: true
    title?: true
    lines?: true
    authorId?: true
  }

  export type PoemMaxAggregateInputType = {
    id?: true
    title?: true
    lines?: true
    authorId?: true
  }

  export type PoemCountAggregateInputType = {
    id?: true
    title?: true
    lines?: true
    authorId?: true
    _all?: true
  }

  export type PoemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poem to aggregate.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Poems
    **/
    _count?: true | PoemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoemMaxAggregateInputType
  }

  export type GetPoemAggregateType<T extends PoemAggregateArgs> = {
        [P in keyof T & keyof AggregatePoem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoem[P]>
      : GetScalarType<T[P], AggregatePoem[P]>
  }




  export type PoemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoemWhereInput
    orderBy?: PoemOrderByWithAggregationInput | PoemOrderByWithAggregationInput[]
    by: PoemScalarFieldEnum[] | PoemScalarFieldEnum
    having?: PoemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoemCountAggregateInputType | true
    _avg?: PoemAvgAggregateInputType
    _sum?: PoemSumAggregateInputType
    _min?: PoemMinAggregateInputType
    _max?: PoemMaxAggregateInputType
  }

  export type PoemGroupByOutputType = {
    id: number
    title: string
    lines: string
    authorId: number | null
    _count: PoemCountAggregateOutputType | null
    _avg: PoemAvgAggregateOutputType | null
    _sum: PoemSumAggregateOutputType | null
    _min: PoemMinAggregateOutputType | null
    _max: PoemMaxAggregateOutputType | null
  }

  type GetPoemGroupByPayload<T extends PoemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoemGroupByOutputType[P]>
            : GetScalarType<T[P], PoemGroupByOutputType[P]>
        }
      >
    >


  export type PoemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lines?: boolean
    authorId?: boolean
    Author?: boolean | Poem$AuthorArgs<ExtArgs>
  }, ExtArgs["result"]["poem"]>

  export type PoemSelectScalar = {
    id?: boolean
    title?: boolean
    lines?: boolean
    authorId?: boolean
  }

  export type PoemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | Poem$AuthorArgs<ExtArgs>
  }


  export type $PoemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poem"
    objects: {
      Author: Prisma.$AuthorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      lines: string
      authorId: number | null
    }, ExtArgs["result"]["poem"]>
    composites: {}
  }


  type PoemGetPayload<S extends boolean | null | undefined | PoemDefaultArgs> = $Result.GetResult<Prisma.$PoemPayload, S>

  type PoemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PoemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PoemCountAggregateInputType | true
    }

  export interface PoemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poem'], meta: { name: 'Poem' } }
    /**
     * Find zero or one Poem that matches the filter.
     * @param {PoemFindUniqueArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PoemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PoemFindUniqueArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Poem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PoemFindUniqueOrThrowArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PoemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PoemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Poem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindFirstArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PoemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PoemFindFirstArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Poem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindFirstOrThrowArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PoemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PoemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Poems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Poems
     * const poems = await prisma.poem.findMany()
     * 
     * // Get first 10 Poems
     * const poems = await prisma.poem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poemWithIdOnly = await prisma.poem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PoemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PoemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Poem.
     * @param {PoemCreateArgs} args - Arguments to create a Poem.
     * @example
     * // Create one Poem
     * const Poem = await prisma.poem.create({
     *   data: {
     *     // ... data to create a Poem
     *   }
     * })
     * 
    **/
    create<T extends PoemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PoemCreateArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Poems.
     *     @param {PoemCreateManyArgs} args - Arguments to create many Poems.
     *     @example
     *     // Create many Poems
     *     const poem = await prisma.poem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PoemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PoemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Poem.
     * @param {PoemDeleteArgs} args - Arguments to delete one Poem.
     * @example
     * // Delete one Poem
     * const Poem = await prisma.poem.delete({
     *   where: {
     *     // ... filter to delete one Poem
     *   }
     * })
     * 
    **/
    delete<T extends PoemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PoemDeleteArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Poem.
     * @param {PoemUpdateArgs} args - Arguments to update one Poem.
     * @example
     * // Update one Poem
     * const poem = await prisma.poem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PoemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PoemUpdateArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Poems.
     * @param {PoemDeleteManyArgs} args - Arguments to filter Poems to delete.
     * @example
     * // Delete a few Poems
     * const { count } = await prisma.poem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PoemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PoemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Poems
     * const poem = await prisma.poem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PoemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PoemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Poem.
     * @param {PoemUpsertArgs} args - Arguments to update or create a Poem.
     * @example
     * // Update or create a Poem
     * const poem = await prisma.poem.upsert({
     *   create: {
     *     // ... data to create a Poem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poem we want to update
     *   }
     * })
    **/
    upsert<T extends PoemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PoemUpsertArgs<ExtArgs>>
    ): Prisma__PoemClient<$Result.GetResult<Prisma.$PoemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Poems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemCountArgs} args - Arguments to filter Poems to count.
     * @example
     * // Count the number of Poems
     * const count = await prisma.poem.count({
     *   where: {
     *     // ... the filter for the Poems we want to count
     *   }
     * })
    **/
    count<T extends PoemCountArgs>(
      args?: Subset<T, PoemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoemAggregateArgs>(args: Subset<T, PoemAggregateArgs>): Prisma.PrismaPromise<GetPoemAggregateType<T>>

    /**
     * Group by Poem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoemGroupByArgs['orderBy'] }
        : { orderBy?: PoemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poem model
   */
  readonly fields: PoemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Author<T extends Poem$AuthorArgs<ExtArgs> = {}>(args?: Subset<T, Poem$AuthorArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Poem model
   */ 
  interface PoemFieldRefs {
    readonly id: FieldRef<"Poem", 'Int'>
    readonly title: FieldRef<"Poem", 'String'>
    readonly lines: FieldRef<"Poem", 'String'>
    readonly authorId: FieldRef<"Poem", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Poem findUnique
   */
  export type PoemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where: PoemWhereUniqueInput
  }


  /**
   * Poem findUniqueOrThrow
   */
  export type PoemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where: PoemWhereUniqueInput
  }


  /**
   * Poem findFirst
   */
  export type PoemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poems.
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poems.
     */
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }


  /**
   * Poem findFirstOrThrow
   */
  export type PoemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poem to fetch.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poems.
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poems.
     */
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }


  /**
   * Poem findMany
   */
  export type PoemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter, which Poems to fetch.
     */
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     */
    orderBy?: PoemOrderByWithRelationInput | PoemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Poems.
     */
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     */
    skip?: number
    distinct?: PoemScalarFieldEnum | PoemScalarFieldEnum[]
  }


  /**
   * Poem create
   */
  export type PoemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * The data needed to create a Poem.
     */
    data: XOR<PoemCreateInput, PoemUncheckedCreateInput>
  }


  /**
   * Poem createMany
   */
  export type PoemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Poems.
     */
    data: PoemCreateManyInput | PoemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Poem update
   */
  export type PoemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * The data needed to update a Poem.
     */
    data: XOR<PoemUpdateInput, PoemUncheckedUpdateInput>
    /**
     * Choose, which Poem to update.
     */
    where: PoemWhereUniqueInput
  }


  /**
   * Poem updateMany
   */
  export type PoemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Poems.
     */
    data: XOR<PoemUpdateManyMutationInput, PoemUncheckedUpdateManyInput>
    /**
     * Filter which Poems to update
     */
    where?: PoemWhereInput
  }


  /**
   * Poem upsert
   */
  export type PoemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * The filter to search for the Poem to update in case it exists.
     */
    where: PoemWhereUniqueInput
    /**
     * In case the Poem found by the `where` argument doesn't exist, create a new Poem with this data.
     */
    create: XOR<PoemCreateInput, PoemUncheckedCreateInput>
    /**
     * In case the Poem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoemUpdateInput, PoemUncheckedUpdateInput>
  }


  /**
   * Poem delete
   */
  export type PoemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
    /**
     * Filter which Poem to delete.
     */
    where: PoemWhereUniqueInput
  }


  /**
   * Poem deleteMany
   */
  export type PoemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poems to delete
     */
    where?: PoemWhereInput
  }


  /**
   * Poem.Author
   */
  export type Poem$AuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
  }


  /**
   * Poem without action
   */
  export type PoemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poem
     */
    select?: PoemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PoemInclude<ExtArgs> | null
  }



  /**
   * Model RockPaperScissor
   */

  export type AggregateRockPaperScissor = {
    _count: RockPaperScissorCountAggregateOutputType | null
    _avg: RockPaperScissorAvgAggregateOutputType | null
    _sum: RockPaperScissorSumAggregateOutputType | null
    _min: RockPaperScissorMinAggregateOutputType | null
    _max: RockPaperScissorMaxAggregateOutputType | null
  }

  export type RockPaperScissorAvgAggregateOutputType = {
    id: number | null
  }

  export type RockPaperScissorSumAggregateOutputType = {
    id: number | null
  }

  export type RockPaperScissorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RockPaperScissorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RockPaperScissorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RockPaperScissorAvgAggregateInputType = {
    id?: true
  }

  export type RockPaperScissorSumAggregateInputType = {
    id?: true
  }

  export type RockPaperScissorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RockPaperScissorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RockPaperScissorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RockPaperScissorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RockPaperScissor to aggregate.
     */
    where?: RockPaperScissorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RockPaperScissors to fetch.
     */
    orderBy?: RockPaperScissorOrderByWithRelationInput | RockPaperScissorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RockPaperScissorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RockPaperScissors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RockPaperScissors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RockPaperScissors
    **/
    _count?: true | RockPaperScissorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RockPaperScissorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RockPaperScissorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RockPaperScissorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RockPaperScissorMaxAggregateInputType
  }

  export type GetRockPaperScissorAggregateType<T extends RockPaperScissorAggregateArgs> = {
        [P in keyof T & keyof AggregateRockPaperScissor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRockPaperScissor[P]>
      : GetScalarType<T[P], AggregateRockPaperScissor[P]>
  }




  export type RockPaperScissorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RockPaperScissorWhereInput
    orderBy?: RockPaperScissorOrderByWithAggregationInput | RockPaperScissorOrderByWithAggregationInput[]
    by: RockPaperScissorScalarFieldEnum[] | RockPaperScissorScalarFieldEnum
    having?: RockPaperScissorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RockPaperScissorCountAggregateInputType | true
    _avg?: RockPaperScissorAvgAggregateInputType
    _sum?: RockPaperScissorSumAggregateInputType
    _min?: RockPaperScissorMinAggregateInputType
    _max?: RockPaperScissorMaxAggregateInputType
  }

  export type RockPaperScissorGroupByOutputType = {
    id: number
    name: string
    _count: RockPaperScissorCountAggregateOutputType | null
    _avg: RockPaperScissorAvgAggregateOutputType | null
    _sum: RockPaperScissorSumAggregateOutputType | null
    _min: RockPaperScissorMinAggregateOutputType | null
    _max: RockPaperScissorMaxAggregateOutputType | null
  }

  type GetRockPaperScissorGroupByPayload<T extends RockPaperScissorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RockPaperScissorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RockPaperScissorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RockPaperScissorGroupByOutputType[P]>
            : GetScalarType<T[P], RockPaperScissorGroupByOutputType[P]>
        }
      >
    >


  export type RockPaperScissorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    winningMatches?: boolean | RockPaperScissor$winningMatchesArgs<ExtArgs>
    _count?: boolean | RockPaperScissorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rockPaperScissor"]>

  export type RockPaperScissorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RockPaperScissorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winningMatches?: boolean | RockPaperScissor$winningMatchesArgs<ExtArgs>
    _count?: boolean | RockPaperScissorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RockPaperScissorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RockPaperScissor"
    objects: {
      winningMatches: Prisma.$WinningMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["rockPaperScissor"]>
    composites: {}
  }


  type RockPaperScissorGetPayload<S extends boolean | null | undefined | RockPaperScissorDefaultArgs> = $Result.GetResult<Prisma.$RockPaperScissorPayload, S>

  type RockPaperScissorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RockPaperScissorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RockPaperScissorCountAggregateInputType | true
    }

  export interface RockPaperScissorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RockPaperScissor'], meta: { name: 'RockPaperScissor' } }
    /**
     * Find zero or one RockPaperScissor that matches the filter.
     * @param {RockPaperScissorFindUniqueArgs} args - Arguments to find a RockPaperScissor
     * @example
     * // Get one RockPaperScissor
     * const rockPaperScissor = await prisma.rockPaperScissor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RockPaperScissorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RockPaperScissorFindUniqueArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RockPaperScissor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RockPaperScissorFindUniqueOrThrowArgs} args - Arguments to find a RockPaperScissor
     * @example
     * // Get one RockPaperScissor
     * const rockPaperScissor = await prisma.rockPaperScissor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RockPaperScissorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RockPaperScissorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RockPaperScissor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorFindFirstArgs} args - Arguments to find a RockPaperScissor
     * @example
     * // Get one RockPaperScissor
     * const rockPaperScissor = await prisma.rockPaperScissor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RockPaperScissorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RockPaperScissorFindFirstArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RockPaperScissor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorFindFirstOrThrowArgs} args - Arguments to find a RockPaperScissor
     * @example
     * // Get one RockPaperScissor
     * const rockPaperScissor = await prisma.rockPaperScissor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RockPaperScissorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RockPaperScissorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RockPaperScissors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RockPaperScissors
     * const rockPaperScissors = await prisma.rockPaperScissor.findMany()
     * 
     * // Get first 10 RockPaperScissors
     * const rockPaperScissors = await prisma.rockPaperScissor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rockPaperScissorWithIdOnly = await prisma.rockPaperScissor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RockPaperScissorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RockPaperScissorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RockPaperScissor.
     * @param {RockPaperScissorCreateArgs} args - Arguments to create a RockPaperScissor.
     * @example
     * // Create one RockPaperScissor
     * const RockPaperScissor = await prisma.rockPaperScissor.create({
     *   data: {
     *     // ... data to create a RockPaperScissor
     *   }
     * })
     * 
    **/
    create<T extends RockPaperScissorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RockPaperScissorCreateArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RockPaperScissors.
     *     @param {RockPaperScissorCreateManyArgs} args - Arguments to create many RockPaperScissors.
     *     @example
     *     // Create many RockPaperScissors
     *     const rockPaperScissor = await prisma.rockPaperScissor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RockPaperScissorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RockPaperScissorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RockPaperScissor.
     * @param {RockPaperScissorDeleteArgs} args - Arguments to delete one RockPaperScissor.
     * @example
     * // Delete one RockPaperScissor
     * const RockPaperScissor = await prisma.rockPaperScissor.delete({
     *   where: {
     *     // ... filter to delete one RockPaperScissor
     *   }
     * })
     * 
    **/
    delete<T extends RockPaperScissorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RockPaperScissorDeleteArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RockPaperScissor.
     * @param {RockPaperScissorUpdateArgs} args - Arguments to update one RockPaperScissor.
     * @example
     * // Update one RockPaperScissor
     * const rockPaperScissor = await prisma.rockPaperScissor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RockPaperScissorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RockPaperScissorUpdateArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RockPaperScissors.
     * @param {RockPaperScissorDeleteManyArgs} args - Arguments to filter RockPaperScissors to delete.
     * @example
     * // Delete a few RockPaperScissors
     * const { count } = await prisma.rockPaperScissor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RockPaperScissorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RockPaperScissorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RockPaperScissors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RockPaperScissors
     * const rockPaperScissor = await prisma.rockPaperScissor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RockPaperScissorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RockPaperScissorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RockPaperScissor.
     * @param {RockPaperScissorUpsertArgs} args - Arguments to update or create a RockPaperScissor.
     * @example
     * // Update or create a RockPaperScissor
     * const rockPaperScissor = await prisma.rockPaperScissor.upsert({
     *   create: {
     *     // ... data to create a RockPaperScissor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RockPaperScissor we want to update
     *   }
     * })
    **/
    upsert<T extends RockPaperScissorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RockPaperScissorUpsertArgs<ExtArgs>>
    ): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RockPaperScissors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorCountArgs} args - Arguments to filter RockPaperScissors to count.
     * @example
     * // Count the number of RockPaperScissors
     * const count = await prisma.rockPaperScissor.count({
     *   where: {
     *     // ... the filter for the RockPaperScissors we want to count
     *   }
     * })
    **/
    count<T extends RockPaperScissorCountArgs>(
      args?: Subset<T, RockPaperScissorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RockPaperScissorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RockPaperScissor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RockPaperScissorAggregateArgs>(args: Subset<T, RockPaperScissorAggregateArgs>): Prisma.PrismaPromise<GetRockPaperScissorAggregateType<T>>

    /**
     * Group by RockPaperScissor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RockPaperScissorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RockPaperScissorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RockPaperScissorGroupByArgs['orderBy'] }
        : { orderBy?: RockPaperScissorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RockPaperScissorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRockPaperScissorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RockPaperScissor model
   */
  readonly fields: RockPaperScissorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RockPaperScissor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RockPaperScissorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    winningMatches<T extends RockPaperScissor$winningMatchesArgs<ExtArgs> = {}>(args?: Subset<T, RockPaperScissor$winningMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RockPaperScissor model
   */ 
  interface RockPaperScissorFieldRefs {
    readonly id: FieldRef<"RockPaperScissor", 'Int'>
    readonly name: FieldRef<"RockPaperScissor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RockPaperScissor findUnique
   */
  export type RockPaperScissorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * Filter, which RockPaperScissor to fetch.
     */
    where: RockPaperScissorWhereUniqueInput
  }


  /**
   * RockPaperScissor findUniqueOrThrow
   */
  export type RockPaperScissorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * Filter, which RockPaperScissor to fetch.
     */
    where: RockPaperScissorWhereUniqueInput
  }


  /**
   * RockPaperScissor findFirst
   */
  export type RockPaperScissorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * Filter, which RockPaperScissor to fetch.
     */
    where?: RockPaperScissorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RockPaperScissors to fetch.
     */
    orderBy?: RockPaperScissorOrderByWithRelationInput | RockPaperScissorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RockPaperScissors.
     */
    cursor?: RockPaperScissorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RockPaperScissors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RockPaperScissors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RockPaperScissors.
     */
    distinct?: RockPaperScissorScalarFieldEnum | RockPaperScissorScalarFieldEnum[]
  }


  /**
   * RockPaperScissor findFirstOrThrow
   */
  export type RockPaperScissorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * Filter, which RockPaperScissor to fetch.
     */
    where?: RockPaperScissorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RockPaperScissors to fetch.
     */
    orderBy?: RockPaperScissorOrderByWithRelationInput | RockPaperScissorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RockPaperScissors.
     */
    cursor?: RockPaperScissorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RockPaperScissors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RockPaperScissors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RockPaperScissors.
     */
    distinct?: RockPaperScissorScalarFieldEnum | RockPaperScissorScalarFieldEnum[]
  }


  /**
   * RockPaperScissor findMany
   */
  export type RockPaperScissorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * Filter, which RockPaperScissors to fetch.
     */
    where?: RockPaperScissorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RockPaperScissors to fetch.
     */
    orderBy?: RockPaperScissorOrderByWithRelationInput | RockPaperScissorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RockPaperScissors.
     */
    cursor?: RockPaperScissorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RockPaperScissors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RockPaperScissors.
     */
    skip?: number
    distinct?: RockPaperScissorScalarFieldEnum | RockPaperScissorScalarFieldEnum[]
  }


  /**
   * RockPaperScissor create
   */
  export type RockPaperScissorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * The data needed to create a RockPaperScissor.
     */
    data: XOR<RockPaperScissorCreateInput, RockPaperScissorUncheckedCreateInput>
  }


  /**
   * RockPaperScissor createMany
   */
  export type RockPaperScissorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RockPaperScissors.
     */
    data: RockPaperScissorCreateManyInput | RockPaperScissorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RockPaperScissor update
   */
  export type RockPaperScissorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * The data needed to update a RockPaperScissor.
     */
    data: XOR<RockPaperScissorUpdateInput, RockPaperScissorUncheckedUpdateInput>
    /**
     * Choose, which RockPaperScissor to update.
     */
    where: RockPaperScissorWhereUniqueInput
  }


  /**
   * RockPaperScissor updateMany
   */
  export type RockPaperScissorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RockPaperScissors.
     */
    data: XOR<RockPaperScissorUpdateManyMutationInput, RockPaperScissorUncheckedUpdateManyInput>
    /**
     * Filter which RockPaperScissors to update
     */
    where?: RockPaperScissorWhereInput
  }


  /**
   * RockPaperScissor upsert
   */
  export type RockPaperScissorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * The filter to search for the RockPaperScissor to update in case it exists.
     */
    where: RockPaperScissorWhereUniqueInput
    /**
     * In case the RockPaperScissor found by the `where` argument doesn't exist, create a new RockPaperScissor with this data.
     */
    create: XOR<RockPaperScissorCreateInput, RockPaperScissorUncheckedCreateInput>
    /**
     * In case the RockPaperScissor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RockPaperScissorUpdateInput, RockPaperScissorUncheckedUpdateInput>
  }


  /**
   * RockPaperScissor delete
   */
  export type RockPaperScissorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    /**
     * Filter which RockPaperScissor to delete.
     */
    where: RockPaperScissorWhereUniqueInput
  }


  /**
   * RockPaperScissor deleteMany
   */
  export type RockPaperScissorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RockPaperScissors to delete
     */
    where?: RockPaperScissorWhereInput
  }


  /**
   * RockPaperScissor.winningMatches
   */
  export type RockPaperScissor$winningMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    where?: WinningMatchWhereInput
    orderBy?: WinningMatchOrderByWithRelationInput | WinningMatchOrderByWithRelationInput[]
    cursor?: WinningMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinningMatchScalarFieldEnum | WinningMatchScalarFieldEnum[]
  }


  /**
   * RockPaperScissor without action
   */
  export type RockPaperScissorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
  }



  /**
   * Model WinningMatch
   */

  export type AggregateWinningMatch = {
    _count: WinningMatchCountAggregateOutputType | null
    _avg: WinningMatchAvgAggregateOutputType | null
    _sum: WinningMatchSumAggregateOutputType | null
    _min: WinningMatchMinAggregateOutputType | null
    _max: WinningMatchMaxAggregateOutputType | null
  }

  export type WinningMatchAvgAggregateOutputType = {
    id: number | null
    rockPaperScissorId: number | null
  }

  export type WinningMatchSumAggregateOutputType = {
    id: number | null
    rockPaperScissorId: number | null
  }

  export type WinningMatchMinAggregateOutputType = {
    id: number | null
    name: string | null
    action: string | null
    rockPaperScissorId: number | null
  }

  export type WinningMatchMaxAggregateOutputType = {
    id: number | null
    name: string | null
    action: string | null
    rockPaperScissorId: number | null
  }

  export type WinningMatchCountAggregateOutputType = {
    id: number
    name: number
    action: number
    rockPaperScissorId: number
    _all: number
  }


  export type WinningMatchAvgAggregateInputType = {
    id?: true
    rockPaperScissorId?: true
  }

  export type WinningMatchSumAggregateInputType = {
    id?: true
    rockPaperScissorId?: true
  }

  export type WinningMatchMinAggregateInputType = {
    id?: true
    name?: true
    action?: true
    rockPaperScissorId?: true
  }

  export type WinningMatchMaxAggregateInputType = {
    id?: true
    name?: true
    action?: true
    rockPaperScissorId?: true
  }

  export type WinningMatchCountAggregateInputType = {
    id?: true
    name?: true
    action?: true
    rockPaperScissorId?: true
    _all?: true
  }

  export type WinningMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WinningMatch to aggregate.
     */
    where?: WinningMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WinningMatches to fetch.
     */
    orderBy?: WinningMatchOrderByWithRelationInput | WinningMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinningMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WinningMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WinningMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WinningMatches
    **/
    _count?: true | WinningMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinningMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinningMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinningMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinningMatchMaxAggregateInputType
  }

  export type GetWinningMatchAggregateType<T extends WinningMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateWinningMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinningMatch[P]>
      : GetScalarType<T[P], AggregateWinningMatch[P]>
  }




  export type WinningMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinningMatchWhereInput
    orderBy?: WinningMatchOrderByWithAggregationInput | WinningMatchOrderByWithAggregationInput[]
    by: WinningMatchScalarFieldEnum[] | WinningMatchScalarFieldEnum
    having?: WinningMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinningMatchCountAggregateInputType | true
    _avg?: WinningMatchAvgAggregateInputType
    _sum?: WinningMatchSumAggregateInputType
    _min?: WinningMatchMinAggregateInputType
    _max?: WinningMatchMaxAggregateInputType
  }

  export type WinningMatchGroupByOutputType = {
    id: number
    name: string
    action: string
    rockPaperScissorId: number | null
    _count: WinningMatchCountAggregateOutputType | null
    _avg: WinningMatchAvgAggregateOutputType | null
    _sum: WinningMatchSumAggregateOutputType | null
    _min: WinningMatchMinAggregateOutputType | null
    _max: WinningMatchMaxAggregateOutputType | null
  }

  type GetWinningMatchGroupByPayload<T extends WinningMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinningMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinningMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinningMatchGroupByOutputType[P]>
            : GetScalarType<T[P], WinningMatchGroupByOutputType[P]>
        }
      >
    >


  export type WinningMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    action?: boolean
    rockPaperScissorId?: boolean
    RockPaperScissor?: boolean | WinningMatch$RockPaperScissorArgs<ExtArgs>
  }, ExtArgs["result"]["winningMatch"]>

  export type WinningMatchSelectScalar = {
    id?: boolean
    name?: boolean
    action?: boolean
    rockPaperScissorId?: boolean
  }

  export type WinningMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RockPaperScissor?: boolean | WinningMatch$RockPaperScissorArgs<ExtArgs>
  }


  export type $WinningMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WinningMatch"
    objects: {
      RockPaperScissor: Prisma.$RockPaperScissorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      action: string
      rockPaperScissorId: number | null
    }, ExtArgs["result"]["winningMatch"]>
    composites: {}
  }


  type WinningMatchGetPayload<S extends boolean | null | undefined | WinningMatchDefaultArgs> = $Result.GetResult<Prisma.$WinningMatchPayload, S>

  type WinningMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WinningMatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WinningMatchCountAggregateInputType | true
    }

  export interface WinningMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WinningMatch'], meta: { name: 'WinningMatch' } }
    /**
     * Find zero or one WinningMatch that matches the filter.
     * @param {WinningMatchFindUniqueArgs} args - Arguments to find a WinningMatch
     * @example
     * // Get one WinningMatch
     * const winningMatch = await prisma.winningMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WinningMatchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WinningMatchFindUniqueArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WinningMatch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WinningMatchFindUniqueOrThrowArgs} args - Arguments to find a WinningMatch
     * @example
     * // Get one WinningMatch
     * const winningMatch = await prisma.winningMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WinningMatchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WinningMatchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WinningMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchFindFirstArgs} args - Arguments to find a WinningMatch
     * @example
     * // Get one WinningMatch
     * const winningMatch = await prisma.winningMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WinningMatchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WinningMatchFindFirstArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WinningMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchFindFirstOrThrowArgs} args - Arguments to find a WinningMatch
     * @example
     * // Get one WinningMatch
     * const winningMatch = await prisma.winningMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WinningMatchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WinningMatchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WinningMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WinningMatches
     * const winningMatches = await prisma.winningMatch.findMany()
     * 
     * // Get first 10 WinningMatches
     * const winningMatches = await prisma.winningMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winningMatchWithIdOnly = await prisma.winningMatch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WinningMatchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WinningMatchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WinningMatch.
     * @param {WinningMatchCreateArgs} args - Arguments to create a WinningMatch.
     * @example
     * // Create one WinningMatch
     * const WinningMatch = await prisma.winningMatch.create({
     *   data: {
     *     // ... data to create a WinningMatch
     *   }
     * })
     * 
    **/
    create<T extends WinningMatchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WinningMatchCreateArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WinningMatches.
     *     @param {WinningMatchCreateManyArgs} args - Arguments to create many WinningMatches.
     *     @example
     *     // Create many WinningMatches
     *     const winningMatch = await prisma.winningMatch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WinningMatchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WinningMatchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WinningMatch.
     * @param {WinningMatchDeleteArgs} args - Arguments to delete one WinningMatch.
     * @example
     * // Delete one WinningMatch
     * const WinningMatch = await prisma.winningMatch.delete({
     *   where: {
     *     // ... filter to delete one WinningMatch
     *   }
     * })
     * 
    **/
    delete<T extends WinningMatchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WinningMatchDeleteArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WinningMatch.
     * @param {WinningMatchUpdateArgs} args - Arguments to update one WinningMatch.
     * @example
     * // Update one WinningMatch
     * const winningMatch = await prisma.winningMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WinningMatchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WinningMatchUpdateArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WinningMatches.
     * @param {WinningMatchDeleteManyArgs} args - Arguments to filter WinningMatches to delete.
     * @example
     * // Delete a few WinningMatches
     * const { count } = await prisma.winningMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WinningMatchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WinningMatchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WinningMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WinningMatches
     * const winningMatch = await prisma.winningMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WinningMatchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WinningMatchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WinningMatch.
     * @param {WinningMatchUpsertArgs} args - Arguments to update or create a WinningMatch.
     * @example
     * // Update or create a WinningMatch
     * const winningMatch = await prisma.winningMatch.upsert({
     *   create: {
     *     // ... data to create a WinningMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WinningMatch we want to update
     *   }
     * })
    **/
    upsert<T extends WinningMatchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WinningMatchUpsertArgs<ExtArgs>>
    ): Prisma__WinningMatchClient<$Result.GetResult<Prisma.$WinningMatchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WinningMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchCountArgs} args - Arguments to filter WinningMatches to count.
     * @example
     * // Count the number of WinningMatches
     * const count = await prisma.winningMatch.count({
     *   where: {
     *     // ... the filter for the WinningMatches we want to count
     *   }
     * })
    **/
    count<T extends WinningMatchCountArgs>(
      args?: Subset<T, WinningMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinningMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WinningMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WinningMatchAggregateArgs>(args: Subset<T, WinningMatchAggregateArgs>): Prisma.PrismaPromise<GetWinningMatchAggregateType<T>>

    /**
     * Group by WinningMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinningMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WinningMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinningMatchGroupByArgs['orderBy'] }
        : { orderBy?: WinningMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WinningMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinningMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WinningMatch model
   */
  readonly fields: WinningMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WinningMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinningMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    RockPaperScissor<T extends WinningMatch$RockPaperScissorArgs<ExtArgs> = {}>(args?: Subset<T, WinningMatch$RockPaperScissorArgs<ExtArgs>>): Prisma__RockPaperScissorClient<$Result.GetResult<Prisma.$RockPaperScissorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WinningMatch model
   */ 
  interface WinningMatchFieldRefs {
    readonly id: FieldRef<"WinningMatch", 'Int'>
    readonly name: FieldRef<"WinningMatch", 'String'>
    readonly action: FieldRef<"WinningMatch", 'String'>
    readonly rockPaperScissorId: FieldRef<"WinningMatch", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * WinningMatch findUnique
   */
  export type WinningMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * Filter, which WinningMatch to fetch.
     */
    where: WinningMatchWhereUniqueInput
  }


  /**
   * WinningMatch findUniqueOrThrow
   */
  export type WinningMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * Filter, which WinningMatch to fetch.
     */
    where: WinningMatchWhereUniqueInput
  }


  /**
   * WinningMatch findFirst
   */
  export type WinningMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * Filter, which WinningMatch to fetch.
     */
    where?: WinningMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WinningMatches to fetch.
     */
    orderBy?: WinningMatchOrderByWithRelationInput | WinningMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WinningMatches.
     */
    cursor?: WinningMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WinningMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WinningMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WinningMatches.
     */
    distinct?: WinningMatchScalarFieldEnum | WinningMatchScalarFieldEnum[]
  }


  /**
   * WinningMatch findFirstOrThrow
   */
  export type WinningMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * Filter, which WinningMatch to fetch.
     */
    where?: WinningMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WinningMatches to fetch.
     */
    orderBy?: WinningMatchOrderByWithRelationInput | WinningMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WinningMatches.
     */
    cursor?: WinningMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WinningMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WinningMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WinningMatches.
     */
    distinct?: WinningMatchScalarFieldEnum | WinningMatchScalarFieldEnum[]
  }


  /**
   * WinningMatch findMany
   */
  export type WinningMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * Filter, which WinningMatches to fetch.
     */
    where?: WinningMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WinningMatches to fetch.
     */
    orderBy?: WinningMatchOrderByWithRelationInput | WinningMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WinningMatches.
     */
    cursor?: WinningMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WinningMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WinningMatches.
     */
    skip?: number
    distinct?: WinningMatchScalarFieldEnum | WinningMatchScalarFieldEnum[]
  }


  /**
   * WinningMatch create
   */
  export type WinningMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a WinningMatch.
     */
    data: XOR<WinningMatchCreateInput, WinningMatchUncheckedCreateInput>
  }


  /**
   * WinningMatch createMany
   */
  export type WinningMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WinningMatches.
     */
    data: WinningMatchCreateManyInput | WinningMatchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WinningMatch update
   */
  export type WinningMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a WinningMatch.
     */
    data: XOR<WinningMatchUpdateInput, WinningMatchUncheckedUpdateInput>
    /**
     * Choose, which WinningMatch to update.
     */
    where: WinningMatchWhereUniqueInput
  }


  /**
   * WinningMatch updateMany
   */
  export type WinningMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WinningMatches.
     */
    data: XOR<WinningMatchUpdateManyMutationInput, WinningMatchUncheckedUpdateManyInput>
    /**
     * Filter which WinningMatches to update
     */
    where?: WinningMatchWhereInput
  }


  /**
   * WinningMatch upsert
   */
  export type WinningMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the WinningMatch to update in case it exists.
     */
    where: WinningMatchWhereUniqueInput
    /**
     * In case the WinningMatch found by the `where` argument doesn't exist, create a new WinningMatch with this data.
     */
    create: XOR<WinningMatchCreateInput, WinningMatchUncheckedCreateInput>
    /**
     * In case the WinningMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinningMatchUpdateInput, WinningMatchUncheckedUpdateInput>
  }


  /**
   * WinningMatch delete
   */
  export type WinningMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
    /**
     * Filter which WinningMatch to delete.
     */
    where: WinningMatchWhereUniqueInput
  }


  /**
   * WinningMatch deleteMany
   */
  export type WinningMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WinningMatches to delete
     */
    where?: WinningMatchWhereInput
  }


  /**
   * WinningMatch.RockPaperScissor
   */
  export type WinningMatch$RockPaperScissorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RockPaperScissor
     */
    select?: RockPaperScissorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RockPaperScissorInclude<ExtArgs> | null
    where?: RockPaperScissorWhereInput
  }


  /**
   * WinningMatch without action
   */
  export type WinningMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WinningMatch
     */
    select?: WinningMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WinningMatchInclude<ExtArgs> | null
  }



  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    area: string | null
    instructions: string | null
    thumbnail: string | null
    youtubeUrl: string | null
    source: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    area: string | null
    instructions: string | null
    thumbnail: string | null
    youtubeUrl: string | null
    source: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    category: number
    area: number
    instructions: number
    thumbnail: number
    youtubeUrl: number
    source: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    area?: true
    instructions?: true
    thumbnail?: true
    youtubeUrl?: true
    source?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    area?: true
    instructions?: true
    thumbnail?: true
    youtubeUrl?: true
    source?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    area?: true
    instructions?: true
    thumbnail?: true
    youtubeUrl?: true
    source?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl: string | null
    source: string | null
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    area?: boolean
    instructions?: boolean
    thumbnail?: boolean
    youtubeUrl?: boolean
    source?: boolean
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    measurements?: boolean | Recipe$measurementsArgs<ExtArgs>
    tags?: boolean | Recipe$tagsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    area?: boolean
    instructions?: boolean
    thumbnail?: boolean
    youtubeUrl?: boolean
    source?: boolean
  }

  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    measurements?: boolean | Recipe$measurementsArgs<ExtArgs>
    tags?: boolean | Recipe$tagsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      measurements: Prisma.$MeasurementPayload<ExtArgs>[]
      tags: Prisma.$TagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
      area: string
      instructions: string
      thumbnail: string
      youtubeUrl: string | null
      source: string | null
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }


  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recipe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recipes.
     *     @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipe = await prisma.recipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findMany'> | Null>;

    measurements<T extends Recipe$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'findMany'> | Null>;

    tags<T extends Recipe$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Recipe model
   */ 
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'Int'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly category: FieldRef<"Recipe", 'String'>
    readonly area: FieldRef<"Recipe", 'String'>
    readonly instructions: FieldRef<"Recipe", 'String'>
    readonly thumbnail: FieldRef<"Recipe", 'String'>
    readonly youtubeUrl: FieldRef<"Recipe", 'String'>
    readonly source: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }


  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }


  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }


  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }


  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
  }


  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }


  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
  }


  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Recipe.measurements
   */
  export type Recipe$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    cursor?: MeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }


  /**
   * Recipe.tags
   */
  export type Recipe$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    cursor?: TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
  }



  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    name: string | null
    recipeId: number | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    recipeId: number | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    recipeId: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    name: string
    recipeId: number
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    recipeId?: boolean
  }

  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }


  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      recipeId: number
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }


  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ingredient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IngredientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
    **/
    create<T extends IngredientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ingredients.
     *     @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     *     @example
     *     // Create many Ingredients
     *     const ingredient = await prisma.ingredient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IngredientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
    **/
    delete<T extends IngredientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ingredient model
   */ 
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly recipeId: FieldRef<"Ingredient", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }


  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }


  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
  }


  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }


  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }


  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
  }


  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientInclude<ExtArgs> | null
  }



  /**
   * Model Measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type MeasurementSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: number | null
    name: string | null
    recipeId: number | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: number | null
    name: string | null
    recipeId: number | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    name: number
    recipeId: number
    _all: number
  }


  export type MeasurementAvgAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type MeasurementSumAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type MeasurementMinAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurement to aggregate.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type MeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithAggregationInput | MeasurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: MeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _avg?: MeasurementAvgAggregateInputType
    _sum?: MeasurementSumAggregateInputType
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: number
    name: string
    recipeId: number
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends MeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipeId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectScalar = {
    id?: boolean
    name?: boolean
    recipeId?: boolean
  }

  export type MeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }


  export type $MeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measurement"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      recipeId: number
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }


  type MeasurementGetPayload<S extends boolean | null | undefined | MeasurementDefaultArgs> = $Result.GetResult<Prisma.$MeasurementPayload, S>

  type MeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeasurementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface MeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measurement'], meta: { name: 'Measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {MeasurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MeasurementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MeasurementFindUniqueArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Measurement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MeasurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MeasurementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MeasurementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MeasurementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MeasurementFindFirstArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MeasurementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MeasurementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MeasurementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MeasurementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Measurement.
     * @param {MeasurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
    **/
    create<T extends MeasurementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MeasurementCreateArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Measurements.
     *     @param {MeasurementCreateManyArgs} args - Arguments to create many Measurements.
     *     @example
     *     // Create many Measurements
     *     const measurement = await prisma.measurement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MeasurementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MeasurementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Measurement.
     * @param {MeasurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
    **/
    delete<T extends MeasurementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MeasurementDeleteArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Measurement.
     * @param {MeasurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MeasurementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MeasurementUpdateArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Measurements.
     * @param {MeasurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MeasurementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MeasurementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MeasurementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MeasurementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Measurement.
     * @param {MeasurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
    **/
    upsert<T extends MeasurementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MeasurementUpsertArgs<ExtArgs>>
    ): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends MeasurementCountArgs>(
      args?: Subset<T, MeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measurement model
   */
  readonly fields: MeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Measurement model
   */ 
  interface MeasurementFieldRefs {
    readonly id: FieldRef<"Measurement", 'Int'>
    readonly name: FieldRef<"Measurement", 'String'>
    readonly recipeId: FieldRef<"Measurement", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Measurement findUnique
   */
  export type MeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }


  /**
   * Measurement findUniqueOrThrow
   */
  export type MeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }


  /**
   * Measurement findFirst
   */
  export type MeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }


  /**
   * Measurement findFirstOrThrow
   */
  export type MeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }


  /**
   * Measurement findMany
   */
  export type MeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }


  /**
   * Measurement create
   */
  export type MeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a Measurement.
     */
    data: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
  }


  /**
   * Measurement createMany
   */
  export type MeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Measurement update
   */
  export type MeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a Measurement.
     */
    data: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
    /**
     * Choose, which Measurement to update.
     */
    where: MeasurementWhereUniqueInput
  }


  /**
   * Measurement updateMany
   */
  export type MeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
  }


  /**
   * Measurement upsert
   */
  export type MeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the Measurement to update in case it exists.
     */
    where: MeasurementWhereUniqueInput
    /**
     * In case the Measurement found by the `where` argument doesn't exist, create a new Measurement with this data.
     */
    create: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
    /**
     * In case the Measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
  }


  /**
   * Measurement delete
   */
  export type MeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter which Measurement to delete.
     */
    where: MeasurementWhereUniqueInput
  }


  /**
   * Measurement deleteMany
   */
  export type MeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to delete
     */
    where?: MeasurementWhereInput
  }


  /**
   * Measurement without action
   */
  export type MeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeasurementInclude<ExtArgs> | null
  }



  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
    recipeId: number | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    recipeId: number | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    recipeId: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    recipeId?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    recipeId: number | null
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipeId?: boolean
    Recipe?: boolean | Tags$RecipeArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
    recipeId?: boolean
  }

  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipe?: boolean | Tags$RecipeArgs<ExtArgs>
  }


  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      Recipe: Prisma.$RecipePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      recipeId: number | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }


  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
    **/
    create<T extends TagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsCreateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tags = await prisma.tags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
    **/
    delete<T extends TagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
    **/
    upsert<T extends TagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Recipe<T extends Tags$RecipeArgs<ExtArgs> = {}>(args?: Subset<T, Tags$RecipeArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tags model
   */ 
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'Int'>
    readonly name: FieldRef<"Tags", 'String'>
    readonly recipeId: FieldRef<"Tags", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }


  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
  }


  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }


  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }


  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
  }


  /**
   * Tags.Recipe
   */
  export type Tags$RecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
  }


  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FruitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    family: 'family',
    order: 'order',
    genus: 'genus',
    nutritionsId: 'nutritionsId'
  };

  export type FruitScalarFieldEnum = (typeof FruitScalarFieldEnum)[keyof typeof FruitScalarFieldEnum]


  export const NutritionsScalarFieldEnum: {
    id: 'id',
    calories: 'calories',
    fat: 'fat',
    sugar: 'sugar',
    carbohydrates: 'carbohydrates',
    protein: 'protein'
  };

  export type NutritionsScalarFieldEnum = (typeof NutritionsScalarFieldEnum)[keyof typeof NutritionsScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const PoemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    lines: 'lines',
    authorId: 'authorId'
  };

  export type PoemScalarFieldEnum = (typeof PoemScalarFieldEnum)[keyof typeof PoemScalarFieldEnum]


  export const RockPaperScissorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RockPaperScissorScalarFieldEnum = (typeof RockPaperScissorScalarFieldEnum)[keyof typeof RockPaperScissorScalarFieldEnum]


  export const WinningMatchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    action: 'action',
    rockPaperScissorId: 'rockPaperScissorId'
  };

  export type WinningMatchScalarFieldEnum = (typeof WinningMatchScalarFieldEnum)[keyof typeof WinningMatchScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    area: 'area',
    instructions: 'instructions',
    thumbnail: 'thumbnail',
    youtubeUrl: 'youtubeUrl',
    source: 'source'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    recipeId: 'recipeId'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    recipeId: 'recipeId'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    recipeId: 'recipeId'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FruitWhereInput = {
    AND?: FruitWhereInput | FruitWhereInput[]
    OR?: FruitWhereInput[]
    NOT?: FruitWhereInput | FruitWhereInput[]
    id?: IntFilter<"Fruit"> | number
    name?: StringFilter<"Fruit"> | string
    family?: StringFilter<"Fruit"> | string
    order?: StringFilter<"Fruit"> | string
    genus?: StringFilter<"Fruit"> | string
    nutritionsId?: IntFilter<"Fruit"> | number
    nutritions?: XOR<NutritionsRelationFilter, NutritionsWhereInput>
  }

  export type FruitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    order?: SortOrder
    genus?: SortOrder
    nutritionsId?: SortOrder
    nutritions?: NutritionsOrderByWithRelationInput
  }

  export type FruitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FruitWhereInput | FruitWhereInput[]
    OR?: FruitWhereInput[]
    NOT?: FruitWhereInput | FruitWhereInput[]
    name?: StringFilter<"Fruit"> | string
    family?: StringFilter<"Fruit"> | string
    order?: StringFilter<"Fruit"> | string
    genus?: StringFilter<"Fruit"> | string
    nutritionsId?: IntFilter<"Fruit"> | number
    nutritions?: XOR<NutritionsRelationFilter, NutritionsWhereInput>
  }, "id">

  export type FruitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    order?: SortOrder
    genus?: SortOrder
    nutritionsId?: SortOrder
    _count?: FruitCountOrderByAggregateInput
    _avg?: FruitAvgOrderByAggregateInput
    _max?: FruitMaxOrderByAggregateInput
    _min?: FruitMinOrderByAggregateInput
    _sum?: FruitSumOrderByAggregateInput
  }

  export type FruitScalarWhereWithAggregatesInput = {
    AND?: FruitScalarWhereWithAggregatesInput | FruitScalarWhereWithAggregatesInput[]
    OR?: FruitScalarWhereWithAggregatesInput[]
    NOT?: FruitScalarWhereWithAggregatesInput | FruitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fruit"> | number
    name?: StringWithAggregatesFilter<"Fruit"> | string
    family?: StringWithAggregatesFilter<"Fruit"> | string
    order?: StringWithAggregatesFilter<"Fruit"> | string
    genus?: StringWithAggregatesFilter<"Fruit"> | string
    nutritionsId?: IntWithAggregatesFilter<"Fruit"> | number
  }

  export type NutritionsWhereInput = {
    AND?: NutritionsWhereInput | NutritionsWhereInput[]
    OR?: NutritionsWhereInput[]
    NOT?: NutritionsWhereInput | NutritionsWhereInput[]
    id?: IntFilter<"Nutritions"> | number
    calories?: IntFilter<"Nutritions"> | number
    fat?: IntFilter<"Nutritions"> | number
    sugar?: IntFilter<"Nutritions"> | number
    carbohydrates?: IntFilter<"Nutritions"> | number
    protein?: IntFilter<"Nutritions"> | number
    Fruit?: FruitListRelationFilter
  }

  export type NutritionsOrderByWithRelationInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
    Fruit?: FruitOrderByRelationAggregateInput
  }

  export type NutritionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NutritionsWhereInput | NutritionsWhereInput[]
    OR?: NutritionsWhereInput[]
    NOT?: NutritionsWhereInput | NutritionsWhereInput[]
    calories?: IntFilter<"Nutritions"> | number
    fat?: IntFilter<"Nutritions"> | number
    sugar?: IntFilter<"Nutritions"> | number
    carbohydrates?: IntFilter<"Nutritions"> | number
    protein?: IntFilter<"Nutritions"> | number
    Fruit?: FruitListRelationFilter
  }, "id">

  export type NutritionsOrderByWithAggregationInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
    _count?: NutritionsCountOrderByAggregateInput
    _avg?: NutritionsAvgOrderByAggregateInput
    _max?: NutritionsMaxOrderByAggregateInput
    _min?: NutritionsMinOrderByAggregateInput
    _sum?: NutritionsSumOrderByAggregateInput
  }

  export type NutritionsScalarWhereWithAggregatesInput = {
    AND?: NutritionsScalarWhereWithAggregatesInput | NutritionsScalarWhereWithAggregatesInput[]
    OR?: NutritionsScalarWhereWithAggregatesInput[]
    NOT?: NutritionsScalarWhereWithAggregatesInput | NutritionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nutritions"> | number
    calories?: IntWithAggregatesFilter<"Nutritions"> | number
    fat?: IntWithAggregatesFilter<"Nutritions"> | number
    sugar?: IntWithAggregatesFilter<"Nutritions"> | number
    carbohydrates?: IntWithAggregatesFilter<"Nutritions"> | number
    protein?: IntWithAggregatesFilter<"Nutritions"> | number
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    name?: StringFilter<"Author"> | string
    poems?: PoemListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    poems?: PoemOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    poems?: PoemListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    name?: StringWithAggregatesFilter<"Author"> | string
  }

  export type PoemWhereInput = {
    AND?: PoemWhereInput | PoemWhereInput[]
    OR?: PoemWhereInput[]
    NOT?: PoemWhereInput | PoemWhereInput[]
    id?: IntFilter<"Poem"> | number
    title?: StringFilter<"Poem"> | string
    lines?: StringFilter<"Poem"> | string
    authorId?: IntNullableFilter<"Poem"> | number | null
    Author?: XOR<AuthorNullableRelationFilter, AuthorWhereInput> | null
  }

  export type PoemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    lines?: SortOrder
    authorId?: SortOrderInput | SortOrder
    Author?: AuthorOrderByWithRelationInput
  }

  export type PoemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoemWhereInput | PoemWhereInput[]
    OR?: PoemWhereInput[]
    NOT?: PoemWhereInput | PoemWhereInput[]
    title?: StringFilter<"Poem"> | string
    lines?: StringFilter<"Poem"> | string
    authorId?: IntNullableFilter<"Poem"> | number | null
    Author?: XOR<AuthorNullableRelationFilter, AuthorWhereInput> | null
  }, "id">

  export type PoemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    lines?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: PoemCountOrderByAggregateInput
    _avg?: PoemAvgOrderByAggregateInput
    _max?: PoemMaxOrderByAggregateInput
    _min?: PoemMinOrderByAggregateInput
    _sum?: PoemSumOrderByAggregateInput
  }

  export type PoemScalarWhereWithAggregatesInput = {
    AND?: PoemScalarWhereWithAggregatesInput | PoemScalarWhereWithAggregatesInput[]
    OR?: PoemScalarWhereWithAggregatesInput[]
    NOT?: PoemScalarWhereWithAggregatesInput | PoemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Poem"> | number
    title?: StringWithAggregatesFilter<"Poem"> | string
    lines?: StringWithAggregatesFilter<"Poem"> | string
    authorId?: IntNullableWithAggregatesFilter<"Poem"> | number | null
  }

  export type RockPaperScissorWhereInput = {
    AND?: RockPaperScissorWhereInput | RockPaperScissorWhereInput[]
    OR?: RockPaperScissorWhereInput[]
    NOT?: RockPaperScissorWhereInput | RockPaperScissorWhereInput[]
    id?: IntFilter<"RockPaperScissor"> | number
    name?: StringFilter<"RockPaperScissor"> | string
    winningMatches?: WinningMatchListRelationFilter
  }

  export type RockPaperScissorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    winningMatches?: WinningMatchOrderByRelationAggregateInput
  }

  export type RockPaperScissorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RockPaperScissorWhereInput | RockPaperScissorWhereInput[]
    OR?: RockPaperScissorWhereInput[]
    NOT?: RockPaperScissorWhereInput | RockPaperScissorWhereInput[]
    name?: StringFilter<"RockPaperScissor"> | string
    winningMatches?: WinningMatchListRelationFilter
  }, "id">

  export type RockPaperScissorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RockPaperScissorCountOrderByAggregateInput
    _avg?: RockPaperScissorAvgOrderByAggregateInput
    _max?: RockPaperScissorMaxOrderByAggregateInput
    _min?: RockPaperScissorMinOrderByAggregateInput
    _sum?: RockPaperScissorSumOrderByAggregateInput
  }

  export type RockPaperScissorScalarWhereWithAggregatesInput = {
    AND?: RockPaperScissorScalarWhereWithAggregatesInput | RockPaperScissorScalarWhereWithAggregatesInput[]
    OR?: RockPaperScissorScalarWhereWithAggregatesInput[]
    NOT?: RockPaperScissorScalarWhereWithAggregatesInput | RockPaperScissorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RockPaperScissor"> | number
    name?: StringWithAggregatesFilter<"RockPaperScissor"> | string
  }

  export type WinningMatchWhereInput = {
    AND?: WinningMatchWhereInput | WinningMatchWhereInput[]
    OR?: WinningMatchWhereInput[]
    NOT?: WinningMatchWhereInput | WinningMatchWhereInput[]
    id?: IntFilter<"WinningMatch"> | number
    name?: StringFilter<"WinningMatch"> | string
    action?: StringFilter<"WinningMatch"> | string
    rockPaperScissorId?: IntNullableFilter<"WinningMatch"> | number | null
    RockPaperScissor?: XOR<RockPaperScissorNullableRelationFilter, RockPaperScissorWhereInput> | null
  }

  export type WinningMatchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    rockPaperScissorId?: SortOrderInput | SortOrder
    RockPaperScissor?: RockPaperScissorOrderByWithRelationInput
  }

  export type WinningMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WinningMatchWhereInput | WinningMatchWhereInput[]
    OR?: WinningMatchWhereInput[]
    NOT?: WinningMatchWhereInput | WinningMatchWhereInput[]
    name?: StringFilter<"WinningMatch"> | string
    action?: StringFilter<"WinningMatch"> | string
    rockPaperScissorId?: IntNullableFilter<"WinningMatch"> | number | null
    RockPaperScissor?: XOR<RockPaperScissorNullableRelationFilter, RockPaperScissorWhereInput> | null
  }, "id">

  export type WinningMatchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    rockPaperScissorId?: SortOrderInput | SortOrder
    _count?: WinningMatchCountOrderByAggregateInput
    _avg?: WinningMatchAvgOrderByAggregateInput
    _max?: WinningMatchMaxOrderByAggregateInput
    _min?: WinningMatchMinOrderByAggregateInput
    _sum?: WinningMatchSumOrderByAggregateInput
  }

  export type WinningMatchScalarWhereWithAggregatesInput = {
    AND?: WinningMatchScalarWhereWithAggregatesInput | WinningMatchScalarWhereWithAggregatesInput[]
    OR?: WinningMatchScalarWhereWithAggregatesInput[]
    NOT?: WinningMatchScalarWhereWithAggregatesInput | WinningMatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WinningMatch"> | number
    name?: StringWithAggregatesFilter<"WinningMatch"> | string
    action?: StringWithAggregatesFilter<"WinningMatch"> | string
    rockPaperScissorId?: IntNullableWithAggregatesFilter<"WinningMatch"> | number | null
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: IntFilter<"Recipe"> | number
    name?: StringFilter<"Recipe"> | string
    category?: StringFilter<"Recipe"> | string
    area?: StringFilter<"Recipe"> | string
    instructions?: StringFilter<"Recipe"> | string
    thumbnail?: StringFilter<"Recipe"> | string
    youtubeUrl?: StringNullableFilter<"Recipe"> | string | null
    source?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: IngredientListRelationFilter
    measurements?: MeasurementListRelationFilter
    tags?: TagsListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    ingredients?: IngredientOrderByRelationAggregateInput
    measurements?: MeasurementOrderByRelationAggregateInput
    tags?: TagsOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    category?: StringFilter<"Recipe"> | string
    area?: StringFilter<"Recipe"> | string
    instructions?: StringFilter<"Recipe"> | string
    thumbnail?: StringFilter<"Recipe"> | string
    youtubeUrl?: StringNullableFilter<"Recipe"> | string | null
    source?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: IngredientListRelationFilter
    measurements?: MeasurementListRelationFilter
    tags?: TagsListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe"> | number
    name?: StringWithAggregatesFilter<"Recipe"> | string
    category?: StringWithAggregatesFilter<"Recipe"> | string
    area?: StringWithAggregatesFilter<"Recipe"> | string
    instructions?: StringWithAggregatesFilter<"Recipe"> | string
    thumbnail?: StringWithAggregatesFilter<"Recipe"> | string
    youtubeUrl?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    source?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    name?: StringFilter<"Ingredient"> | string
    recipeId?: IntFilter<"Ingredient"> | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    recipeId?: IntFilter<"Ingredient"> | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    recipeId?: IntWithAggregatesFilter<"Ingredient"> | number
  }

  export type MeasurementWhereInput = {
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    id?: IntFilter<"Measurement"> | number
    name?: StringFilter<"Measurement"> | string
    recipeId?: IntFilter<"Measurement"> | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }

  export type MeasurementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type MeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    name?: StringFilter<"Measurement"> | string
    recipeId?: IntFilter<"Measurement"> | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }, "id">

  export type MeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
    _count?: MeasurementCountOrderByAggregateInput
    _avg?: MeasurementAvgOrderByAggregateInput
    _max?: MeasurementMaxOrderByAggregateInput
    _min?: MeasurementMinOrderByAggregateInput
    _sum?: MeasurementSumOrderByAggregateInput
  }

  export type MeasurementScalarWhereWithAggregatesInput = {
    AND?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    OR?: MeasurementScalarWhereWithAggregatesInput[]
    NOT?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Measurement"> | number
    name?: StringWithAggregatesFilter<"Measurement"> | string
    recipeId?: IntWithAggregatesFilter<"Measurement"> | number
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
    recipeId?: IntNullableFilter<"Tags"> | number | null
    Recipe?: XOR<RecipeNullableRelationFilter, RecipeWhereInput> | null
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    Recipe?: RecipeOrderByWithRelationInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    name?: StringFilter<"Tags"> | string
    recipeId?: IntNullableFilter<"Tags"> | number | null
    Recipe?: XOR<RecipeNullableRelationFilter, RecipeWhereInput> | null
  }, "id">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrderInput | SortOrder
    _count?: TagsCountOrderByAggregateInput
    _avg?: TagsAvgOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
    _sum?: TagsSumOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tags"> | number
    name?: StringWithAggregatesFilter<"Tags"> | string
    recipeId?: IntNullableWithAggregatesFilter<"Tags"> | number | null
  }

  export type FruitCreateInput = {
    id: number
    name: string
    family: string
    order: string
    genus: string
    nutritions: NutritionsCreateNestedOneWithoutFruitInput
  }

  export type FruitUncheckedCreateInput = {
    id: number
    name: string
    family: string
    order: string
    genus: string
    nutritionsId: number
  }

  export type FruitUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    nutritions?: NutritionsUpdateOneRequiredWithoutFruitNestedInput
  }

  export type FruitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    nutritionsId?: IntFieldUpdateOperationsInput | number
  }

  export type FruitCreateManyInput = {
    id: number
    name: string
    family: string
    order: string
    genus: string
    nutritionsId: number
  }

  export type FruitUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
  }

  export type FruitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    nutritionsId?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionsCreateInput = {
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
    Fruit?: FruitCreateNestedManyWithoutNutritionsInput
  }

  export type NutritionsUncheckedCreateInput = {
    id?: number
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
    Fruit?: FruitUncheckedCreateNestedManyWithoutNutritionsInput
  }

  export type NutritionsUpdateInput = {
    calories?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    carbohydrates?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    Fruit?: FruitUpdateManyWithoutNutritionsNestedInput
  }

  export type NutritionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    carbohydrates?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
    Fruit?: FruitUncheckedUpdateManyWithoutNutritionsNestedInput
  }

  export type NutritionsCreateManyInput = {
    id?: number
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
  }

  export type NutritionsUpdateManyMutationInput = {
    calories?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    carbohydrates?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    carbohydrates?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorCreateInput = {
    name: string
    poems?: PoemCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    name: string
    poems?: PoemUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    poems?: PoemUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    poems?: PoemUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    name: string
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PoemCreateInput = {
    title: string
    lines: string
    Author?: AuthorCreateNestedOneWithoutPoemsInput
  }

  export type PoemUncheckedCreateInput = {
    id?: number
    title: string
    lines: string
    authorId?: number | null
  }

  export type PoemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
    Author?: AuthorUpdateOneWithoutPoemsNestedInput
  }

  export type PoemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PoemCreateManyInput = {
    id?: number
    title: string
    lines: string
    authorId?: number | null
  }

  export type PoemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
  }

  export type PoemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RockPaperScissorCreateInput = {
    name: string
    winningMatches?: WinningMatchCreateNestedManyWithoutRockPaperScissorInput
  }

  export type RockPaperScissorUncheckedCreateInput = {
    id?: number
    name: string
    winningMatches?: WinningMatchUncheckedCreateNestedManyWithoutRockPaperScissorInput
  }

  export type RockPaperScissorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    winningMatches?: WinningMatchUpdateManyWithoutRockPaperScissorNestedInput
  }

  export type RockPaperScissorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    winningMatches?: WinningMatchUncheckedUpdateManyWithoutRockPaperScissorNestedInput
  }

  export type RockPaperScissorCreateManyInput = {
    id?: number
    name: string
  }

  export type RockPaperScissorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RockPaperScissorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WinningMatchCreateInput = {
    name: string
    action: string
    RockPaperScissor?: RockPaperScissorCreateNestedOneWithoutWinningMatchesInput
  }

  export type WinningMatchUncheckedCreateInput = {
    id?: number
    name: string
    action: string
    rockPaperScissorId?: number | null
  }

  export type WinningMatchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    RockPaperScissor?: RockPaperScissorUpdateOneWithoutWinningMatchesNestedInput
  }

  export type WinningMatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    rockPaperScissorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WinningMatchCreateManyInput = {
    id?: number
    name: string
    action: string
    rockPaperScissorId?: number | null
  }

  export type WinningMatchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type WinningMatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    rockPaperScissorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecipeCreateInput = {
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    measurements?: MeasurementCreateNestedManyWithoutRecipeInput
    tags?: TagsCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutRecipeInput
    tags?: TagsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    measurements?: MeasurementUpdateManyWithoutRecipeNestedInput
    tags?: TagsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: TagsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
  }

  export type RecipeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientCreateInput = {
    name: string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    name: string
    recipeId: number
  }

  export type IngredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientCreateManyInput = {
    id?: number
    name: string
    recipeId: number
  }

  export type IngredientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type MeasurementCreateInput = {
    name: string
    recipe: RecipeCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateInput = {
    id?: number
    name: string
    recipeId: number
  }

  export type MeasurementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type MeasurementCreateManyInput = {
    id?: number
    name: string
    recipeId: number
  }

  export type MeasurementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsCreateInput = {
    name: string
    Recipe?: RecipeCreateNestedOneWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: number
    name: string
    recipeId?: number | null
  }

  export type TagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Recipe?: RecipeUpdateOneWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsCreateManyInput = {
    id?: number
    name: string
    recipeId?: number | null
  }

  export type TagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    recipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NutritionsRelationFilter = {
    is?: NutritionsWhereInput
    isNot?: NutritionsWhereInput
  }

  export type FruitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    order?: SortOrder
    genus?: SortOrder
    nutritionsId?: SortOrder
  }

  export type FruitAvgOrderByAggregateInput = {
    id?: SortOrder
    nutritionsId?: SortOrder
  }

  export type FruitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    order?: SortOrder
    genus?: SortOrder
    nutritionsId?: SortOrder
  }

  export type FruitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    order?: SortOrder
    genus?: SortOrder
    nutritionsId?: SortOrder
  }

  export type FruitSumOrderByAggregateInput = {
    id?: SortOrder
    nutritionsId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FruitListRelationFilter = {
    every?: FruitWhereInput
    some?: FruitWhereInput
    none?: FruitWhereInput
  }

  export type FruitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutritionsCountOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
  }

  export type NutritionsAvgOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
  }

  export type NutritionsMaxOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
  }

  export type NutritionsMinOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
  }

  export type NutritionsSumOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    carbohydrates?: SortOrder
    protein?: SortOrder
  }

  export type PoemListRelationFilter = {
    every?: PoemWhereInput
    some?: PoemWhereInput
    none?: PoemWhereInput
  }

  export type PoemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AuthorNullableRelationFilter = {
    is?: AuthorWhereInput | null
    isNot?: AuthorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PoemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lines?: SortOrder
    authorId?: SortOrder
  }

  export type PoemAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PoemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lines?: SortOrder
    authorId?: SortOrder
  }

  export type PoemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lines?: SortOrder
    authorId?: SortOrder
  }

  export type PoemSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WinningMatchListRelationFilter = {
    every?: WinningMatchWhereInput
    some?: WinningMatchWhereInput
    none?: WinningMatchWhereInput
  }

  export type WinningMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RockPaperScissorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RockPaperScissorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RockPaperScissorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RockPaperScissorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RockPaperScissorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RockPaperScissorNullableRelationFilter = {
    is?: RockPaperScissorWhereInput | null
    isNot?: RockPaperScissorWhereInput | null
  }

  export type WinningMatchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    rockPaperScissorId?: SortOrder
  }

  export type WinningMatchAvgOrderByAggregateInput = {
    id?: SortOrder
    rockPaperScissorId?: SortOrder
  }

  export type WinningMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    rockPaperScissorId?: SortOrder
  }

  export type WinningMatchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    rockPaperScissorId?: SortOrder
  }

  export type WinningMatchSumOrderByAggregateInput = {
    id?: SortOrder
    rockPaperScissorId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type MeasurementListRelationFilter = {
    every?: MeasurementWhereInput
    some?: MeasurementWhereInput
    none?: MeasurementWhereInput
  }

  export type TagsListRelationFilter = {
    every?: TagsWhereInput
    some?: TagsWhereInput
    none?: TagsWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtubeUrl?: SortOrder
    source?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtubeUrl?: SortOrder
    source?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtubeUrl?: SortOrder
    source?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecipeRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type MeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type MeasurementAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type MeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type MeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type MeasurementSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type RecipeNullableRelationFilter = {
    is?: RecipeWhereInput | null
    isNot?: RecipeWhereInput | null
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type TagsAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recipeId?: SortOrder
  }

  export type TagsSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type NutritionsCreateNestedOneWithoutFruitInput = {
    create?: XOR<NutritionsCreateWithoutFruitInput, NutritionsUncheckedCreateWithoutFruitInput>
    connectOrCreate?: NutritionsCreateOrConnectWithoutFruitInput
    connect?: NutritionsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NutritionsUpdateOneRequiredWithoutFruitNestedInput = {
    create?: XOR<NutritionsCreateWithoutFruitInput, NutritionsUncheckedCreateWithoutFruitInput>
    connectOrCreate?: NutritionsCreateOrConnectWithoutFruitInput
    upsert?: NutritionsUpsertWithoutFruitInput
    connect?: NutritionsWhereUniqueInput
    update?: XOR<XOR<NutritionsUpdateToOneWithWhereWithoutFruitInput, NutritionsUpdateWithoutFruitInput>, NutritionsUncheckedUpdateWithoutFruitInput>
  }

  export type FruitCreateNestedManyWithoutNutritionsInput = {
    create?: XOR<FruitCreateWithoutNutritionsInput, FruitUncheckedCreateWithoutNutritionsInput> | FruitCreateWithoutNutritionsInput[] | FruitUncheckedCreateWithoutNutritionsInput[]
    connectOrCreate?: FruitCreateOrConnectWithoutNutritionsInput | FruitCreateOrConnectWithoutNutritionsInput[]
    createMany?: FruitCreateManyNutritionsInputEnvelope
    connect?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
  }

  export type FruitUncheckedCreateNestedManyWithoutNutritionsInput = {
    create?: XOR<FruitCreateWithoutNutritionsInput, FruitUncheckedCreateWithoutNutritionsInput> | FruitCreateWithoutNutritionsInput[] | FruitUncheckedCreateWithoutNutritionsInput[]
    connectOrCreate?: FruitCreateOrConnectWithoutNutritionsInput | FruitCreateOrConnectWithoutNutritionsInput[]
    createMany?: FruitCreateManyNutritionsInputEnvelope
    connect?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
  }

  export type FruitUpdateManyWithoutNutritionsNestedInput = {
    create?: XOR<FruitCreateWithoutNutritionsInput, FruitUncheckedCreateWithoutNutritionsInput> | FruitCreateWithoutNutritionsInput[] | FruitUncheckedCreateWithoutNutritionsInput[]
    connectOrCreate?: FruitCreateOrConnectWithoutNutritionsInput | FruitCreateOrConnectWithoutNutritionsInput[]
    upsert?: FruitUpsertWithWhereUniqueWithoutNutritionsInput | FruitUpsertWithWhereUniqueWithoutNutritionsInput[]
    createMany?: FruitCreateManyNutritionsInputEnvelope
    set?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    disconnect?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    delete?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    connect?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    update?: FruitUpdateWithWhereUniqueWithoutNutritionsInput | FruitUpdateWithWhereUniqueWithoutNutritionsInput[]
    updateMany?: FruitUpdateManyWithWhereWithoutNutritionsInput | FruitUpdateManyWithWhereWithoutNutritionsInput[]
    deleteMany?: FruitScalarWhereInput | FruitScalarWhereInput[]
  }

  export type FruitUncheckedUpdateManyWithoutNutritionsNestedInput = {
    create?: XOR<FruitCreateWithoutNutritionsInput, FruitUncheckedCreateWithoutNutritionsInput> | FruitCreateWithoutNutritionsInput[] | FruitUncheckedCreateWithoutNutritionsInput[]
    connectOrCreate?: FruitCreateOrConnectWithoutNutritionsInput | FruitCreateOrConnectWithoutNutritionsInput[]
    upsert?: FruitUpsertWithWhereUniqueWithoutNutritionsInput | FruitUpsertWithWhereUniqueWithoutNutritionsInput[]
    createMany?: FruitCreateManyNutritionsInputEnvelope
    set?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    disconnect?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    delete?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    connect?: FruitWhereUniqueInput | FruitWhereUniqueInput[]
    update?: FruitUpdateWithWhereUniqueWithoutNutritionsInput | FruitUpdateWithWhereUniqueWithoutNutritionsInput[]
    updateMany?: FruitUpdateManyWithWhereWithoutNutritionsInput | FruitUpdateManyWithWhereWithoutNutritionsInput[]
    deleteMany?: FruitScalarWhereInput | FruitScalarWhereInput[]
  }

  export type PoemCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PoemCreateWithoutAuthorInput, PoemUncheckedCreateWithoutAuthorInput> | PoemCreateWithoutAuthorInput[] | PoemUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PoemCreateOrConnectWithoutAuthorInput | PoemCreateOrConnectWithoutAuthorInput[]
    createMany?: PoemCreateManyAuthorInputEnvelope
    connect?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
  }

  export type PoemUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PoemCreateWithoutAuthorInput, PoemUncheckedCreateWithoutAuthorInput> | PoemCreateWithoutAuthorInput[] | PoemUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PoemCreateOrConnectWithoutAuthorInput | PoemCreateOrConnectWithoutAuthorInput[]
    createMany?: PoemCreateManyAuthorInputEnvelope
    connect?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
  }

  export type PoemUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PoemCreateWithoutAuthorInput, PoemUncheckedCreateWithoutAuthorInput> | PoemCreateWithoutAuthorInput[] | PoemUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PoemCreateOrConnectWithoutAuthorInput | PoemCreateOrConnectWithoutAuthorInput[]
    upsert?: PoemUpsertWithWhereUniqueWithoutAuthorInput | PoemUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PoemCreateManyAuthorInputEnvelope
    set?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    disconnect?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    delete?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    connect?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    update?: PoemUpdateWithWhereUniqueWithoutAuthorInput | PoemUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PoemUpdateManyWithWhereWithoutAuthorInput | PoemUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PoemScalarWhereInput | PoemScalarWhereInput[]
  }

  export type PoemUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PoemCreateWithoutAuthorInput, PoemUncheckedCreateWithoutAuthorInput> | PoemCreateWithoutAuthorInput[] | PoemUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PoemCreateOrConnectWithoutAuthorInput | PoemCreateOrConnectWithoutAuthorInput[]
    upsert?: PoemUpsertWithWhereUniqueWithoutAuthorInput | PoemUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PoemCreateManyAuthorInputEnvelope
    set?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    disconnect?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    delete?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    connect?: PoemWhereUniqueInput | PoemWhereUniqueInput[]
    update?: PoemUpdateWithWhereUniqueWithoutAuthorInput | PoemUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PoemUpdateManyWithWhereWithoutAuthorInput | PoemUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PoemScalarWhereInput | PoemScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutPoemsInput = {
    create?: XOR<AuthorCreateWithoutPoemsInput, AuthorUncheckedCreateWithoutPoemsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPoemsInput
    connect?: AuthorWhereUniqueInput
  }

  export type AuthorUpdateOneWithoutPoemsNestedInput = {
    create?: XOR<AuthorCreateWithoutPoemsInput, AuthorUncheckedCreateWithoutPoemsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPoemsInput
    upsert?: AuthorUpsertWithoutPoemsInput
    disconnect?: AuthorWhereInput | boolean
    delete?: AuthorWhereInput | boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutPoemsInput, AuthorUpdateWithoutPoemsInput>, AuthorUncheckedUpdateWithoutPoemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WinningMatchCreateNestedManyWithoutRockPaperScissorInput = {
    create?: XOR<WinningMatchCreateWithoutRockPaperScissorInput, WinningMatchUncheckedCreateWithoutRockPaperScissorInput> | WinningMatchCreateWithoutRockPaperScissorInput[] | WinningMatchUncheckedCreateWithoutRockPaperScissorInput[]
    connectOrCreate?: WinningMatchCreateOrConnectWithoutRockPaperScissorInput | WinningMatchCreateOrConnectWithoutRockPaperScissorInput[]
    createMany?: WinningMatchCreateManyRockPaperScissorInputEnvelope
    connect?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
  }

  export type WinningMatchUncheckedCreateNestedManyWithoutRockPaperScissorInput = {
    create?: XOR<WinningMatchCreateWithoutRockPaperScissorInput, WinningMatchUncheckedCreateWithoutRockPaperScissorInput> | WinningMatchCreateWithoutRockPaperScissorInput[] | WinningMatchUncheckedCreateWithoutRockPaperScissorInput[]
    connectOrCreate?: WinningMatchCreateOrConnectWithoutRockPaperScissorInput | WinningMatchCreateOrConnectWithoutRockPaperScissorInput[]
    createMany?: WinningMatchCreateManyRockPaperScissorInputEnvelope
    connect?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
  }

  export type WinningMatchUpdateManyWithoutRockPaperScissorNestedInput = {
    create?: XOR<WinningMatchCreateWithoutRockPaperScissorInput, WinningMatchUncheckedCreateWithoutRockPaperScissorInput> | WinningMatchCreateWithoutRockPaperScissorInput[] | WinningMatchUncheckedCreateWithoutRockPaperScissorInput[]
    connectOrCreate?: WinningMatchCreateOrConnectWithoutRockPaperScissorInput | WinningMatchCreateOrConnectWithoutRockPaperScissorInput[]
    upsert?: WinningMatchUpsertWithWhereUniqueWithoutRockPaperScissorInput | WinningMatchUpsertWithWhereUniqueWithoutRockPaperScissorInput[]
    createMany?: WinningMatchCreateManyRockPaperScissorInputEnvelope
    set?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    disconnect?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    delete?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    connect?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    update?: WinningMatchUpdateWithWhereUniqueWithoutRockPaperScissorInput | WinningMatchUpdateWithWhereUniqueWithoutRockPaperScissorInput[]
    updateMany?: WinningMatchUpdateManyWithWhereWithoutRockPaperScissorInput | WinningMatchUpdateManyWithWhereWithoutRockPaperScissorInput[]
    deleteMany?: WinningMatchScalarWhereInput | WinningMatchScalarWhereInput[]
  }

  export type WinningMatchUncheckedUpdateManyWithoutRockPaperScissorNestedInput = {
    create?: XOR<WinningMatchCreateWithoutRockPaperScissorInput, WinningMatchUncheckedCreateWithoutRockPaperScissorInput> | WinningMatchCreateWithoutRockPaperScissorInput[] | WinningMatchUncheckedCreateWithoutRockPaperScissorInput[]
    connectOrCreate?: WinningMatchCreateOrConnectWithoutRockPaperScissorInput | WinningMatchCreateOrConnectWithoutRockPaperScissorInput[]
    upsert?: WinningMatchUpsertWithWhereUniqueWithoutRockPaperScissorInput | WinningMatchUpsertWithWhereUniqueWithoutRockPaperScissorInput[]
    createMany?: WinningMatchCreateManyRockPaperScissorInputEnvelope
    set?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    disconnect?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    delete?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    connect?: WinningMatchWhereUniqueInput | WinningMatchWhereUniqueInput[]
    update?: WinningMatchUpdateWithWhereUniqueWithoutRockPaperScissorInput | WinningMatchUpdateWithWhereUniqueWithoutRockPaperScissorInput[]
    updateMany?: WinningMatchUpdateManyWithWhereWithoutRockPaperScissorInput | WinningMatchUpdateManyWithWhereWithoutRockPaperScissorInput[]
    deleteMany?: WinningMatchScalarWhereInput | WinningMatchScalarWhereInput[]
  }

  export type RockPaperScissorCreateNestedOneWithoutWinningMatchesInput = {
    create?: XOR<RockPaperScissorCreateWithoutWinningMatchesInput, RockPaperScissorUncheckedCreateWithoutWinningMatchesInput>
    connectOrCreate?: RockPaperScissorCreateOrConnectWithoutWinningMatchesInput
    connect?: RockPaperScissorWhereUniqueInput
  }

  export type RockPaperScissorUpdateOneWithoutWinningMatchesNestedInput = {
    create?: XOR<RockPaperScissorCreateWithoutWinningMatchesInput, RockPaperScissorUncheckedCreateWithoutWinningMatchesInput>
    connectOrCreate?: RockPaperScissorCreateOrConnectWithoutWinningMatchesInput
    upsert?: RockPaperScissorUpsertWithoutWinningMatchesInput
    disconnect?: RockPaperScissorWhereInput | boolean
    delete?: RockPaperScissorWhereInput | boolean
    connect?: RockPaperScissorWhereUniqueInput
    update?: XOR<XOR<RockPaperScissorUpdateToOneWithWhereWithoutWinningMatchesInput, RockPaperScissorUpdateWithoutWinningMatchesInput>, RockPaperScissorUncheckedUpdateWithoutWinningMatchesInput>
  }

  export type IngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type MeasurementCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MeasurementCreateWithoutRecipeInput, MeasurementUncheckedCreateWithoutRecipeInput> | MeasurementCreateWithoutRecipeInput[] | MeasurementUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutRecipeInput | MeasurementCreateOrConnectWithoutRecipeInput[]
    createMany?: MeasurementCreateManyRecipeInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type TagsCreateNestedManyWithoutRecipeInput = {
    create?: XOR<TagsCreateWithoutRecipeInput, TagsUncheckedCreateWithoutRecipeInput> | TagsCreateWithoutRecipeInput[] | TagsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutRecipeInput | TagsCreateOrConnectWithoutRecipeInput[]
    createMany?: TagsCreateManyRecipeInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type MeasurementUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MeasurementCreateWithoutRecipeInput, MeasurementUncheckedCreateWithoutRecipeInput> | MeasurementCreateWithoutRecipeInput[] | MeasurementUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutRecipeInput | MeasurementCreateOrConnectWithoutRecipeInput[]
    createMany?: MeasurementCreateManyRecipeInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type TagsUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<TagsCreateWithoutRecipeInput, TagsUncheckedCreateWithoutRecipeInput> | TagsCreateWithoutRecipeInput[] | TagsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutRecipeInput | TagsCreateOrConnectWithoutRecipeInput[]
    createMany?: TagsCreateManyRecipeInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutRecipeInput | IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type MeasurementUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MeasurementCreateWithoutRecipeInput, MeasurementUncheckedCreateWithoutRecipeInput> | MeasurementCreateWithoutRecipeInput[] | MeasurementUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutRecipeInput | MeasurementCreateOrConnectWithoutRecipeInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutRecipeInput | MeasurementUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MeasurementCreateManyRecipeInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutRecipeInput | MeasurementUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutRecipeInput | MeasurementUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type TagsUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<TagsCreateWithoutRecipeInput, TagsUncheckedCreateWithoutRecipeInput> | TagsCreateWithoutRecipeInput[] | TagsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutRecipeInput | TagsCreateOrConnectWithoutRecipeInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutRecipeInput | TagsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: TagsCreateManyRecipeInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutRecipeInput | TagsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutRecipeInput | TagsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutRecipeInput | IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type MeasurementUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MeasurementCreateWithoutRecipeInput, MeasurementUncheckedCreateWithoutRecipeInput> | MeasurementCreateWithoutRecipeInput[] | MeasurementUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutRecipeInput | MeasurementCreateOrConnectWithoutRecipeInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutRecipeInput | MeasurementUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MeasurementCreateManyRecipeInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutRecipeInput | MeasurementUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutRecipeInput | MeasurementUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type TagsUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<TagsCreateWithoutRecipeInput, TagsUncheckedCreateWithoutRecipeInput> | TagsCreateWithoutRecipeInput[] | TagsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutRecipeInput | TagsCreateOrConnectWithoutRecipeInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutRecipeInput | TagsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: TagsCreateManyRecipeInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutRecipeInput | TagsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutRecipeInput | TagsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<RecipeCreateWithoutMeasurementsInput, RecipeUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMeasurementsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<RecipeCreateWithoutMeasurementsInput, RecipeUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMeasurementsInput
    upsert?: RecipeUpsertWithoutMeasurementsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutMeasurementsInput, RecipeUpdateWithoutMeasurementsInput>, RecipeUncheckedUpdateWithoutMeasurementsInput>
  }

  export type RecipeCreateNestedOneWithoutTagsInput = {
    create?: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutTagsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneWithoutTagsNestedInput = {
    create?: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutTagsInput
    upsert?: RecipeUpsertWithoutTagsInput
    disconnect?: RecipeWhereInput | boolean
    delete?: RecipeWhereInput | boolean
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutTagsInput, RecipeUpdateWithoutTagsInput>, RecipeUncheckedUpdateWithoutTagsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NutritionsCreateWithoutFruitInput = {
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
  }

  export type NutritionsUncheckedCreateWithoutFruitInput = {
    id?: number
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
  }

  export type NutritionsCreateOrConnectWithoutFruitInput = {
    where: NutritionsWhereUniqueInput
    create: XOR<NutritionsCreateWithoutFruitInput, NutritionsUncheckedCreateWithoutFruitInput>
  }

  export type NutritionsUpsertWithoutFruitInput = {
    update: XOR<NutritionsUpdateWithoutFruitInput, NutritionsUncheckedUpdateWithoutFruitInput>
    create: XOR<NutritionsCreateWithoutFruitInput, NutritionsUncheckedCreateWithoutFruitInput>
    where?: NutritionsWhereInput
  }

  export type NutritionsUpdateToOneWithWhereWithoutFruitInput = {
    where?: NutritionsWhereInput
    data: XOR<NutritionsUpdateWithoutFruitInput, NutritionsUncheckedUpdateWithoutFruitInput>
  }

  export type NutritionsUpdateWithoutFruitInput = {
    calories?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    carbohydrates?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionsUncheckedUpdateWithoutFruitInput = {
    id?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    fat?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    carbohydrates?: IntFieldUpdateOperationsInput | number
    protein?: IntFieldUpdateOperationsInput | number
  }

  export type FruitCreateWithoutNutritionsInput = {
    id: number
    name: string
    family: string
    order: string
    genus: string
  }

  export type FruitUncheckedCreateWithoutNutritionsInput = {
    id: number
    name: string
    family: string
    order: string
    genus: string
  }

  export type FruitCreateOrConnectWithoutNutritionsInput = {
    where: FruitWhereUniqueInput
    create: XOR<FruitCreateWithoutNutritionsInput, FruitUncheckedCreateWithoutNutritionsInput>
  }

  export type FruitCreateManyNutritionsInputEnvelope = {
    data: FruitCreateManyNutritionsInput | FruitCreateManyNutritionsInput[]
    skipDuplicates?: boolean
  }

  export type FruitUpsertWithWhereUniqueWithoutNutritionsInput = {
    where: FruitWhereUniqueInput
    update: XOR<FruitUpdateWithoutNutritionsInput, FruitUncheckedUpdateWithoutNutritionsInput>
    create: XOR<FruitCreateWithoutNutritionsInput, FruitUncheckedCreateWithoutNutritionsInput>
  }

  export type FruitUpdateWithWhereUniqueWithoutNutritionsInput = {
    where: FruitWhereUniqueInput
    data: XOR<FruitUpdateWithoutNutritionsInput, FruitUncheckedUpdateWithoutNutritionsInput>
  }

  export type FruitUpdateManyWithWhereWithoutNutritionsInput = {
    where: FruitScalarWhereInput
    data: XOR<FruitUpdateManyMutationInput, FruitUncheckedUpdateManyWithoutNutritionsInput>
  }

  export type FruitScalarWhereInput = {
    AND?: FruitScalarWhereInput | FruitScalarWhereInput[]
    OR?: FruitScalarWhereInput[]
    NOT?: FruitScalarWhereInput | FruitScalarWhereInput[]
    id?: IntFilter<"Fruit"> | number
    name?: StringFilter<"Fruit"> | string
    family?: StringFilter<"Fruit"> | string
    order?: StringFilter<"Fruit"> | string
    genus?: StringFilter<"Fruit"> | string
    nutritionsId?: IntFilter<"Fruit"> | number
  }

  export type PoemCreateWithoutAuthorInput = {
    title: string
    lines: string
  }

  export type PoemUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    lines: string
  }

  export type PoemCreateOrConnectWithoutAuthorInput = {
    where: PoemWhereUniqueInput
    create: XOR<PoemCreateWithoutAuthorInput, PoemUncheckedCreateWithoutAuthorInput>
  }

  export type PoemCreateManyAuthorInputEnvelope = {
    data: PoemCreateManyAuthorInput | PoemCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PoemUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PoemWhereUniqueInput
    update: XOR<PoemUpdateWithoutAuthorInput, PoemUncheckedUpdateWithoutAuthorInput>
    create: XOR<PoemCreateWithoutAuthorInput, PoemUncheckedCreateWithoutAuthorInput>
  }

  export type PoemUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PoemWhereUniqueInput
    data: XOR<PoemUpdateWithoutAuthorInput, PoemUncheckedUpdateWithoutAuthorInput>
  }

  export type PoemUpdateManyWithWhereWithoutAuthorInput = {
    where: PoemScalarWhereInput
    data: XOR<PoemUpdateManyMutationInput, PoemUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PoemScalarWhereInput = {
    AND?: PoemScalarWhereInput | PoemScalarWhereInput[]
    OR?: PoemScalarWhereInput[]
    NOT?: PoemScalarWhereInput | PoemScalarWhereInput[]
    id?: IntFilter<"Poem"> | number
    title?: StringFilter<"Poem"> | string
    lines?: StringFilter<"Poem"> | string
    authorId?: IntNullableFilter<"Poem"> | number | null
  }

  export type AuthorCreateWithoutPoemsInput = {
    name: string
  }

  export type AuthorUncheckedCreateWithoutPoemsInput = {
    id?: number
    name: string
  }

  export type AuthorCreateOrConnectWithoutPoemsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutPoemsInput, AuthorUncheckedCreateWithoutPoemsInput>
  }

  export type AuthorUpsertWithoutPoemsInput = {
    update: XOR<AuthorUpdateWithoutPoemsInput, AuthorUncheckedUpdateWithoutPoemsInput>
    create: XOR<AuthorCreateWithoutPoemsInput, AuthorUncheckedCreateWithoutPoemsInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutPoemsInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutPoemsInput, AuthorUncheckedUpdateWithoutPoemsInput>
  }

  export type AuthorUpdateWithoutPoemsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutPoemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WinningMatchCreateWithoutRockPaperScissorInput = {
    name: string
    action: string
  }

  export type WinningMatchUncheckedCreateWithoutRockPaperScissorInput = {
    id?: number
    name: string
    action: string
  }

  export type WinningMatchCreateOrConnectWithoutRockPaperScissorInput = {
    where: WinningMatchWhereUniqueInput
    create: XOR<WinningMatchCreateWithoutRockPaperScissorInput, WinningMatchUncheckedCreateWithoutRockPaperScissorInput>
  }

  export type WinningMatchCreateManyRockPaperScissorInputEnvelope = {
    data: WinningMatchCreateManyRockPaperScissorInput | WinningMatchCreateManyRockPaperScissorInput[]
    skipDuplicates?: boolean
  }

  export type WinningMatchUpsertWithWhereUniqueWithoutRockPaperScissorInput = {
    where: WinningMatchWhereUniqueInput
    update: XOR<WinningMatchUpdateWithoutRockPaperScissorInput, WinningMatchUncheckedUpdateWithoutRockPaperScissorInput>
    create: XOR<WinningMatchCreateWithoutRockPaperScissorInput, WinningMatchUncheckedCreateWithoutRockPaperScissorInput>
  }

  export type WinningMatchUpdateWithWhereUniqueWithoutRockPaperScissorInput = {
    where: WinningMatchWhereUniqueInput
    data: XOR<WinningMatchUpdateWithoutRockPaperScissorInput, WinningMatchUncheckedUpdateWithoutRockPaperScissorInput>
  }

  export type WinningMatchUpdateManyWithWhereWithoutRockPaperScissorInput = {
    where: WinningMatchScalarWhereInput
    data: XOR<WinningMatchUpdateManyMutationInput, WinningMatchUncheckedUpdateManyWithoutRockPaperScissorInput>
  }

  export type WinningMatchScalarWhereInput = {
    AND?: WinningMatchScalarWhereInput | WinningMatchScalarWhereInput[]
    OR?: WinningMatchScalarWhereInput[]
    NOT?: WinningMatchScalarWhereInput | WinningMatchScalarWhereInput[]
    id?: IntFilter<"WinningMatch"> | number
    name?: StringFilter<"WinningMatch"> | string
    action?: StringFilter<"WinningMatch"> | string
    rockPaperScissorId?: IntNullableFilter<"WinningMatch"> | number | null
  }

  export type RockPaperScissorCreateWithoutWinningMatchesInput = {
    name: string
  }

  export type RockPaperScissorUncheckedCreateWithoutWinningMatchesInput = {
    id?: number
    name: string
  }

  export type RockPaperScissorCreateOrConnectWithoutWinningMatchesInput = {
    where: RockPaperScissorWhereUniqueInput
    create: XOR<RockPaperScissorCreateWithoutWinningMatchesInput, RockPaperScissorUncheckedCreateWithoutWinningMatchesInput>
  }

  export type RockPaperScissorUpsertWithoutWinningMatchesInput = {
    update: XOR<RockPaperScissorUpdateWithoutWinningMatchesInput, RockPaperScissorUncheckedUpdateWithoutWinningMatchesInput>
    create: XOR<RockPaperScissorCreateWithoutWinningMatchesInput, RockPaperScissorUncheckedCreateWithoutWinningMatchesInput>
    where?: RockPaperScissorWhereInput
  }

  export type RockPaperScissorUpdateToOneWithWhereWithoutWinningMatchesInput = {
    where?: RockPaperScissorWhereInput
    data: XOR<RockPaperScissorUpdateWithoutWinningMatchesInput, RockPaperScissorUncheckedUpdateWithoutWinningMatchesInput>
  }

  export type RockPaperScissorUpdateWithoutWinningMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RockPaperScissorUncheckedUpdateWithoutWinningMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateWithoutRecipeInput = {
    name: string
  }

  export type IngredientUncheckedCreateWithoutRecipeInput = {
    id?: number
    name: string
  }

  export type IngredientCreateOrConnectWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientCreateManyRecipeInputEnvelope = {
    data: IngredientCreateManyRecipeInput | IngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type MeasurementCreateWithoutRecipeInput = {
    name: string
  }

  export type MeasurementUncheckedCreateWithoutRecipeInput = {
    id?: number
    name: string
  }

  export type MeasurementCreateOrConnectWithoutRecipeInput = {
    where: MeasurementWhereUniqueInput
    create: XOR<MeasurementCreateWithoutRecipeInput, MeasurementUncheckedCreateWithoutRecipeInput>
  }

  export type MeasurementCreateManyRecipeInputEnvelope = {
    data: MeasurementCreateManyRecipeInput | MeasurementCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type TagsCreateWithoutRecipeInput = {
    name: string
  }

  export type TagsUncheckedCreateWithoutRecipeInput = {
    id?: number
    name: string
  }

  export type TagsCreateOrConnectWithoutRecipeInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutRecipeInput, TagsUncheckedCreateWithoutRecipeInput>
  }

  export type TagsCreateManyRecipeInputEnvelope = {
    data: TagsCreateManyRecipeInput | TagsCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type IngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type IngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    name?: StringFilter<"Ingredient"> | string
    recipeId?: IntFilter<"Ingredient"> | number
  }

  export type MeasurementUpsertWithWhereUniqueWithoutRecipeInput = {
    where: MeasurementWhereUniqueInput
    update: XOR<MeasurementUpdateWithoutRecipeInput, MeasurementUncheckedUpdateWithoutRecipeInput>
    create: XOR<MeasurementCreateWithoutRecipeInput, MeasurementUncheckedCreateWithoutRecipeInput>
  }

  export type MeasurementUpdateWithWhereUniqueWithoutRecipeInput = {
    where: MeasurementWhereUniqueInput
    data: XOR<MeasurementUpdateWithoutRecipeInput, MeasurementUncheckedUpdateWithoutRecipeInput>
  }

  export type MeasurementUpdateManyWithWhereWithoutRecipeInput = {
    where: MeasurementScalarWhereInput
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyWithoutRecipeInput>
  }

  export type MeasurementScalarWhereInput = {
    AND?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    OR?: MeasurementScalarWhereInput[]
    NOT?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    id?: IntFilter<"Measurement"> | number
    name?: StringFilter<"Measurement"> | string
    recipeId?: IntFilter<"Measurement"> | number
  }

  export type TagsUpsertWithWhereUniqueWithoutRecipeInput = {
    where: TagsWhereUniqueInput
    update: XOR<TagsUpdateWithoutRecipeInput, TagsUncheckedUpdateWithoutRecipeInput>
    create: XOR<TagsCreateWithoutRecipeInput, TagsUncheckedCreateWithoutRecipeInput>
  }

  export type TagsUpdateWithWhereUniqueWithoutRecipeInput = {
    where: TagsWhereUniqueInput
    data: XOR<TagsUpdateWithoutRecipeInput, TagsUncheckedUpdateWithoutRecipeInput>
  }

  export type TagsUpdateManyWithWhereWithoutRecipeInput = {
    where: TagsScalarWhereInput
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyWithoutRecipeInput>
  }

  export type TagsScalarWhereInput = {
    AND?: TagsScalarWhereInput | TagsScalarWhereInput[]
    OR?: TagsScalarWhereInput[]
    NOT?: TagsScalarWhereInput | TagsScalarWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
    recipeId?: IntNullableFilter<"Tags"> | number | null
  }

  export type RecipeCreateWithoutIngredientsInput = {
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    measurements?: MeasurementCreateNestedManyWithoutRecipeInput
    tags?: TagsCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    measurements?: MeasurementUncheckedCreateNestedManyWithoutRecipeInput
    tags?: TagsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: MeasurementUpdateManyWithoutRecipeNestedInput
    tags?: TagsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: MeasurementUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: TagsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutMeasurementsInput = {
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    tags?: TagsCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutMeasurementsInput = {
    id?: number
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    tags?: TagsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutMeasurementsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutMeasurementsInput, RecipeUncheckedCreateWithoutMeasurementsInput>
  }

  export type RecipeUpsertWithoutMeasurementsInput = {
    update: XOR<RecipeUpdateWithoutMeasurementsInput, RecipeUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<RecipeCreateWithoutMeasurementsInput, RecipeUncheckedCreateWithoutMeasurementsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutMeasurementsInput, RecipeUncheckedUpdateWithoutMeasurementsInput>
  }

  export type RecipeUpdateWithoutMeasurementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    tags?: TagsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutMeasurementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: TagsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutTagsInput = {
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    measurements?: MeasurementCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    youtubeUrl?: string | null
    source?: string | null
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutTagsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
  }

  export type RecipeUpsertWithoutTagsInput = {
    update: XOR<RecipeUpdateWithoutTagsInput, RecipeUncheckedUpdateWithoutTagsInput>
    create: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutTagsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutTagsInput, RecipeUncheckedUpdateWithoutTagsInput>
  }

  export type RecipeUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    measurements?: MeasurementUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type FruitCreateManyNutritionsInput = {
    id: number
    name: string
    family: string
    order: string
    genus: string
  }

  export type FruitUpdateWithoutNutritionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
  }

  export type FruitUncheckedUpdateWithoutNutritionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
  }

  export type FruitUncheckedUpdateManyWithoutNutritionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
  }

  export type PoemCreateManyAuthorInput = {
    id?: number
    title: string
    lines: string
  }

  export type PoemUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
  }

  export type PoemUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
  }

  export type PoemUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lines?: StringFieldUpdateOperationsInput | string
  }

  export type WinningMatchCreateManyRockPaperScissorInput = {
    id?: number
    name: string
    action: string
  }

  export type WinningMatchUpdateWithoutRockPaperScissorInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type WinningMatchUncheckedUpdateWithoutRockPaperScissorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type WinningMatchUncheckedUpdateManyWithoutRockPaperScissorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateManyRecipeInput = {
    id?: number
    name: string
  }

  export type MeasurementCreateManyRecipeInput = {
    id?: number
    name: string
  }

  export type TagsCreateManyRecipeInput = {
    id?: number
    name: string
  }

  export type IngredientUpdateWithoutRecipeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUpdateWithoutRecipeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUpdateWithoutRecipeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use NutritionsCountOutputTypeDefaultArgs instead
     */
    export type NutritionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NutritionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorCountOutputTypeDefaultArgs instead
     */
    export type AuthorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RockPaperScissorCountOutputTypeDefaultArgs instead
     */
    export type RockPaperScissorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RockPaperScissorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeCountOutputTypeDefaultArgs instead
     */
    export type RecipeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FruitDefaultArgs instead
     */
    export type FruitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FruitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NutritionsDefaultArgs instead
     */
    export type NutritionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NutritionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorDefaultArgs instead
     */
    export type AuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PoemDefaultArgs instead
     */
    export type PoemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PoemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RockPaperScissorDefaultArgs instead
     */
    export type RockPaperScissorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RockPaperScissorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WinningMatchDefaultArgs instead
     */
    export type WinningMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WinningMatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeDefaultArgs instead
     */
    export type RecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientDefaultArgs instead
     */
    export type IngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeasurementDefaultArgs instead
     */
    export type MeasurementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeasurementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsDefaultArgs instead
     */
    export type TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}