// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_死と闇レッサー\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000トラップロード_闇魔法_解除状態\u0000トラップロード_闇魔法_発動状態\u0000PC情報_ボス撃破_トラップロード中ボス\u0000トラップロード_中ボス戦_撃破時間\u0000PC情報_トラップロード到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [300]
// @version    3.4.2
// ==/EMEVD==

const area_id = 26;
const block_id = 0;

const nightmare_lamp_offset = 30;
const nightmare_lamp_id = 2601950;
const nightmare_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const base_lamp_offset = 33;
const base_lamp_id = 2601953;
const base_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;

const micolash_lamp_offset = 32;
const micolash_offset = 10;
const micolash_defeat = 12601850;
const micolash_return = 2601889;
const micolash_lamp_id = 2601952;
const micolash_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;
const micolash_region = 2602852;
const micolash_id = 2600850;

const wet_nurse_lamp_offset = 31;
const wet_nurse_offset = 11;
const wet_nurse_defeat = 12601800;
const wet_nurse_return = 2601899;
const wet_nurse_lamp_id = 2601951;
const wet_nurse_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 6;
const wet_nurse_region = 2602802;
const wet_nurse_id = 2600800;
const wet_nurse_id2 = 2600801;

// 2 cage elevators
// 2 big elevators

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+micolash_offset, OFF);
    SetEventFlag(8900+wet_nurse_offset, OFF);
    
    SetEventFlag(wet_nurse_defeat+15, OFF);
    if (EventFlag(wet_nurse_defeat+14)) {
        SetEventFlag(wet_nurse_defeat+14, OFF);
        SetEventFlag(wet_nurse_defeat+15, ON); 
    }
    
    InitializeEvent(14, 7900, 10000000+micolash_return, micolash_return, area_id, block_id, 8500+nightmare_lamp_offset);
    InitializeEvent(15, 7900, 10000000+micolash_return-3, micolash_return, area_id, block_id, 8500+base_lamp_offset);
    InitializeEvent(16, 7900, 10000000+wet_nurse_return, wet_nurse_return, area_id, block_id, 8500+nightmare_lamp_offset);
    InitializeEvent(17, 7900, 10000000+wet_nurse_return-3, wet_nurse_return, area_id, block_id, 8500+base_lamp_offset);
    InitializeEvent(18, 7900, 10000000+wet_nurse_return-2, wet_nurse_return, area_id, block_id, 8500+micolash_lamp_offset);
    
    InitializeEvent(nightmare_lamp_offset, 8500, 8500+nightmare_lamp_offset, nightmare_lamp_id, 72113030);
    InitializeEvent(base_lamp_offset, 8500, 8500+base_lamp_offset, base_lamp_id, 72113131);
    InitializeEvent(micolash_lamp_offset, 8500, 8500+micolash_lamp_offset, micolash_lamp_id, 72113232);
    InitializeEvent(wet_nurse_lamp_offset, 8500, 8500+wet_nurse_lamp_offset, wet_nurse_lamp_id, 72113333);
    
    InitializeEvent(nightmare_lamp_offset, 8100, 8100+nightmare_lamp_offset, nightmare_lamp_kindle);
    InitializeEvent(base_lamp_offset, 8100, 8100+base_lamp_offset, base_lamp_kindle);
    InitializeEvent(micolash_lamp_offset, 8100, 8100+micolash_lamp_offset, micolash_lamp_kindle);
    InitializeEvent(wet_nurse_lamp_offset, 8100, 8100+wet_nurse_lamp_offset, wet_nurse_lamp_kindle);
    
    InitializeEvent(nightmare_lamp_offset, 8300, nightmare_lamp_id+2000, -1, nightmare_lamp_kindle, nightmare_lamp_id+6000, nightmare_lamp_id+3000);
    InitializeEvent(base_lamp_offset, 8300, base_lamp_id+2000, -1, base_lamp_kindle, base_lamp_id+6000, base_lamp_id+3000);
    
    if(EventFlag(micolash_defeat+13) && !EventFlag(micolash_defeat-1)) {
        if (EventFlag(micolash_defeat-2)) {
            SetEventFlag(micolash_defeat-2, OFF);
            InitializeEvent(micolash_offset, 7500, micolash_region, micolash_lamp_id+4000);
        }
        SetEventFlag(micolash_defeat+13, OFF);
        SetEventFlag(micolash_defeat, ON);
        InitializeEvent(micolash_lamp_offset, 8300, micolash_lamp_id+2000, 999, micolash_lamp_kindle, micolash_lamp_id+6000, micolash_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(micolash_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(micolash_defeat+12) || EventFlag(micolash_defeat-1)) {
        if (EventFlag(micolash_defeat-2)) {
            SetEventFlag(micolash_defeat-2, OFF);
            InitializeEvent(micolash_offset, 7500, micolash_region, micolash_lamp_id+5000);
        }
        SetEventFlag(1082, OFF);
        SetEventFlag(micolash_defeat, OFF);
        SetEventFlag(micolash_defeat+2, OFF);
        SetEventFlag(micolash_defeat+12, OFF);
        SetEventFlag(micolash_defeat+13, ON);
        SetEventFlag(micolash_defeat-1, OFF);
        SetEventFlag(8900+micolash_offset, ON);
        InitializeEvent(micolash_lamp_offset, 8300, micolash_lamp_id+2000, -1, micolash_lamp_kindle, micolash_lamp_id+6000, micolash_lamp_id+3000);
    }
    else {
        InitializeEvent(micolash_lamp_offset, 8300, micolash_lamp_id+2000, -1, micolash_lamp_kindle, micolash_lamp_id+6000, micolash_lamp_id+3000);
    }
    
    if(EventFlag(wet_nurse_defeat+13) && !EventFlag(wet_nurse_defeat-1)) {
        if (EventFlag(wet_nurse_defeat-2)) {
            SetEventFlag(wet_nurse_defeat-2, OFF);
            InitializeEvent(wet_nurse_offset, 7500, wet_nurse_region, micolash_lamp_id+4000);
        }
        SetEventFlag(wet_nurse_defeat+13, OFF);
        SetEventFlag(wet_nurse_defeat, ON);
        InitializeEvent(wet_nurse_lamp_offset, 8300, wet_nurse_lamp_id+2000, 999, wet_nurse_lamp_kindle, wet_nurse_lamp_id+6000, wet_nurse_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(wet_nurse_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(wet_nurse_defeat+12) || EventFlag(wet_nurse_defeat-1)) {
        if (EventFlag(wet_nurse_defeat-2)) {
            SetEventFlag(wet_nurse_defeat-2, OFF);
            InitializeEvent(wet_nurse_offset, 7500, wet_nurse_region, micolash_lamp_id+5000);
        }
        SetEventFlag(wet_nurse_defeat, OFF);
        SetEventFlag(wet_nurse_defeat+2, OFF);
        SetEventFlag(wet_nurse_defeat+3000, ON);
        SetEventFlag(wet_nurse_defeat+3002, ON);
        SetEventFlag(wet_nurse_defeat+12, OFF);
        SetEventFlag(wet_nurse_defeat+13, ON);
        SetEventFlag(wet_nurse_defeat-1, OFF);
        SetEventFlag(8900+wet_nurse_offset, ON);
        InitializeEvent(wet_nurse_lamp_offset, 8300, wet_nurse_lamp_id+2000, -1, wet_nurse_lamp_kindle, wet_nurse_lamp_id+6000, wet_nurse_lamp_id+3000);
    }
    else {
        InitializeEvent(wet_nurse_lamp_offset, 8300, wet_nurse_lamp_id+2000, -1, wet_nurse_lamp_kindle, wet_nurse_lamp_id+6000, wet_nurse_lamp_id+3000);
    }
    
    InitializeEvent(micolash_offset, 12102070, micolash_defeat+13, 0, 7460, micolash_id);
    InitializeEvent(wet_nurse_offset, 12102070, wet_nurse_defeat+13, 0, 7461, wet_nurse_id, wet_nurse_id2);
    
    InitializeEvent(micolash_offset, 8900, micolash_defeat-1, micolash_lamp_id+1000, micolash_defeat-2, 0, 0, micolash_lamp_id+5000, area_id, block_id);
    InitializeEvent(wet_nurse_offset, 8900, wet_nurse_defeat-1, wet_nurse_lamp_id+1000, wet_nurse_defeat-2, wet_nurse_defeat+15, wet_nurse_defeat+14, wet_nurse_lamp_id+5000, area_id, block_id);
    
    InitializeEvent(micolash_offset, 7700, micolash_defeat+11, micolash_defeat+12, micolash_lamp_id+1000, 826000);
    InitializeEvent(wet_nurse_offset, 7700, wet_nurse_defeat+11, wet_nurse_defeat+12, wet_nurse_lamp_id+1000, 826002);
    
    InitializeEvent(3000, 12107000, 72113000, 2601950, 2412950);
    InitializeEvent(3001, 12107000, 72113001, 2601950, 2412951);
    InitializeEvent(3002, 12107000, 72113002, 2601950, 2412952);
    InitializeEvent(3003, 12107000, 72113003, 2601950, 2412953);
    InitializeEvent(3004, 12107000, 72113004, 2601950, 2402950);
    InitializeEvent(3005, 12107000, 72113005, 2601950, 2402951);
    InitializeEvent(3006, 12107000, 72113006, 2601950, 2422950);
    InitializeEvent(3007, 12107000, 72113007, 2601950, 2422952);
    InitializeEvent(3008, 12107000, 72113008, 2601950, 2422951);
    InitializeEvent(3009, 12107000, 72113009, 2601950, 2302950);
    InitializeEvent(3010, 12107000, 72113010, 2601950, 2302951);
    InitializeEvent(3011, 12107000, 72113011, 2601950, 2302952);
    InitializeEvent(3012, 12107000, 72113012, 2601950, 2202950);
    InitializeEvent(3013, 12107000, 72113013, 2601950, 2202951);
    InitializeEvent(3014, 12107000, 72113014, 2601950, 2702950);
    InitializeEvent(3015, 12107000, 72113015, 2601950, 2702951);
    InitializeEvent(3016, 12107000, 72113016, 2601950, 3202950);
    InitializeEvent(3017, 12107000, 72113017, 2601950, 3202952);
    InitializeEvent(3018, 12107000, 72113018, 2601950, 2802950);
    InitializeEvent(3019, 12107000, 72113019, 2601950, 2802953);
    InitializeEvent(3020, 12107000, 72113020, 2601950, 2802951);
    InitializeEvent(3021, 12107000, 72113021, 2601950, 2802952);
    InitializeEvent(3022, 12107000, 72113022, 2601950, 2502950);
    InitializeEvent(3023, 12107000, 72113023, 2601950, 2502952);
    InitializeEvent(3024, 12107000, 72113024, 2601950, 2502951);
    InitializeEvent(3025, 12107000, 72113025, 2601950, 2112950);
    InitializeEvent(3026, 12107000, 72113026, 2601950, 3202951);
    InitializeEvent(3027, 12107000, 72113027, 2601950, 3202953);
    InitializeEvent(3028, 12107000, 72113028, 2601950, 3302950);
    InitializeEvent(3029, 12107000, 72113029, 2601950, 3302951);
    InitializeEvent(3030, 12107000, 72113030, 2601950, 2602950);
    InitializeEvent(3031, 12107000, 72113031, 2601950, 2602953);
    InitializeEvent(3032, 12107000, 72113032, 2601950, 2602952);
    InitializeEvent(3033, 12107000, 72113033, 2601950, 2602951);
    InitializeEvent(3034, 12107000, 72113034, 2601950, 3402950);
    InitializeEvent(3035, 12107000, 72113035, 2601950, 3402951);
    InitializeEvent(3036, 12107000, 72113036, 2601950, 3402953);
    InitializeEvent(3037, 12107000, 72113037, 2601950, 3402952);
    InitializeEvent(3038, 12107000, 72113038, 2601950, 3502950);
    InitializeEvent(3039, 12107000, 72113039, 2601950, 3502951);
    InitializeEvent(3040, 12107000, 72113040, 2601950, 3502952);
    InitializeEvent(3041, 12107000, 72113041, 2601950, 3602950);
    InitializeEvent(3042, 12107000, 72113042, 2601950, 3602951);
    InitializeEvent(3043, 12107000, 72113043, 2601950, 3602952);
    InitializeEvent(3044, 12107000, 72113044, 2601950, 2902950);
    InitializeEvent(3045, 12107000, 72113045, 2601950, 2902951);
    InitializeEvent(3046, 12107000, 72113046, 2601950, 2902952);
    InitializeEvent(3047, 12107000, 72113047, 2601950, 2902953);
    InitializeEvent(3048, 12107000, 72113048, 2601950, 2902954);
    InitializeEvent(3049, 12107000, 72113049, 2601950, 2902955);
    InitializeEvent(3050, 12107000, 72113050, 2601950, 2902956);
    InitializeEvent(3051, 12107000, 72113051, 2601950, 2902957);
    InitializeEvent(3052, 12107000, 72113052, 2601950, 2902958);
    InitializeEvent(3053, 12107000, 72113053, 2601950, 2902959);

    InitializeEvent(3100, 12107000, 72113100, 2601953, 2412950);
    InitializeEvent(3101, 12107000, 72113101, 2601953, 2412951);
    InitializeEvent(3102, 12107000, 72113102, 2601953, 2412952);
    InitializeEvent(3103, 12107000, 72113103, 2601953, 2412953);
    InitializeEvent(3104, 12107000, 72113104, 2601953, 2402950);
    InitializeEvent(3105, 12107000, 72113105, 2601953, 2402951);
    InitializeEvent(3106, 12107000, 72113106, 2601953, 2422950);
    InitializeEvent(3107, 12107000, 72113107, 2601953, 2422952);
    InitializeEvent(3108, 12107000, 72113108, 2601953, 2422951);
    InitializeEvent(3109, 12107000, 72113109, 2601953, 2302950);
    InitializeEvent(3110, 12107000, 72113110, 2601953, 2302951);
    InitializeEvent(3111, 12107000, 72113111, 2601953, 2302952);
    InitializeEvent(3112, 12107000, 72113112, 2601953, 2202950);
    InitializeEvent(3113, 12107000, 72113113, 2601953, 2202951);
    InitializeEvent(3114, 12107000, 72113114, 2601953, 2702950);
    InitializeEvent(3115, 12107000, 72113115, 2601953, 2702951);
    InitializeEvent(3116, 12107000, 72113116, 2601953, 3202950);
    InitializeEvent(3117, 12107000, 72113117, 2601953, 3202952);
    InitializeEvent(3118, 12107000, 72113118, 2601953, 2802950);
    InitializeEvent(3119, 12107000, 72113119, 2601953, 2802953);
    InitializeEvent(3120, 12107000, 72113120, 2601953, 2802951);
    InitializeEvent(3121, 12107000, 72113121, 2601953, 2802952);
    InitializeEvent(3122, 12107000, 72113122, 2601953, 2502950);
    InitializeEvent(3123, 12107000, 72113123, 2601953, 2502952);
    InitializeEvent(3124, 12107000, 72113124, 2601953, 2502951);
    InitializeEvent(3125, 12107000, 72113125, 2601953, 2112950);
    InitializeEvent(3126, 12107000, 72113126, 2601953, 3202951);
    InitializeEvent(3127, 12107000, 72113127, 2601953, 3202953);
    InitializeEvent(3128, 12107000, 72113128, 2601953, 3302950);
    InitializeEvent(3129, 12107000, 72113129, 2601953, 3302951);
    InitializeEvent(3130, 12107000, 72113130, 2601953, 2602950);
    InitializeEvent(3131, 12107000, 72113131, 2601953, 2602953);
    InitializeEvent(3132, 12107000, 72113132, 2601953, 2602952);
    InitializeEvent(3133, 12107000, 72113133, 2601953, 2602951);
    InitializeEvent(3134, 12107000, 72113134, 2601953, 3402950);
    InitializeEvent(3135, 12107000, 72113135, 2601953, 3402951);
    InitializeEvent(3136, 12107000, 72113136, 2601953, 3402953);
    InitializeEvent(3137, 12107000, 72113137, 2601953, 3402952);
    InitializeEvent(3138, 12107000, 72113138, 2601953, 3502950);
    InitializeEvent(3139, 12107000, 72113139, 2601953, 3502951);
    InitializeEvent(3140, 12107000, 72113140, 2601953, 3502952);
    InitializeEvent(3141, 12107000, 72113141, 2601953, 3602950);
    InitializeEvent(3142, 12107000, 72113142, 2601953, 3602951);
    InitializeEvent(3143, 12107000, 72113143, 2601953, 3602952);
    InitializeEvent(3144, 12107000, 72113144, 2601953, 2902950);
    InitializeEvent(3145, 12107000, 72113145, 2601953, 2902951);
    InitializeEvent(3146, 12107000, 72113146, 2601953, 2902952);
    InitializeEvent(3147, 12107000, 72113147, 2601953, 2902953);
    InitializeEvent(3148, 12107000, 72113148, 2601953, 2902954);
    InitializeEvent(3149, 12107000, 72113149, 2601953, 2902955);
    InitializeEvent(3150, 12107000, 72113150, 2601953, 2902956);
    InitializeEvent(3151, 12107000, 72113151, 2601953, 2902957);
    InitializeEvent(3152, 12107000, 72113152, 2601953, 2902958);
    InitializeEvent(3153, 12107000, 72113153, 2601953, 2902959);

    InitializeEvent(3200, 12107000, 72113200, 2601952, 2412950);
    InitializeEvent(3201, 12107000, 72113201, 2601952, 2412951);
    InitializeEvent(3202, 12107000, 72113202, 2601952, 2412952);
    InitializeEvent(3203, 12107000, 72113203, 2601952, 2412953);
    InitializeEvent(3204, 12107000, 72113204, 2601952, 2402950);
    InitializeEvent(3205, 12107000, 72113205, 2601952, 2402951);
    InitializeEvent(3206, 12107000, 72113206, 2601952, 2422950);
    InitializeEvent(3207, 12107000, 72113207, 2601952, 2422952);
    InitializeEvent(3208, 12107000, 72113208, 2601952, 2422951);
    InitializeEvent(3209, 12107000, 72113209, 2601952, 2302950);
    InitializeEvent(3210, 12107000, 72113210, 2601952, 2302951);
    InitializeEvent(3211, 12107000, 72113211, 2601952, 2302952);
    InitializeEvent(3212, 12107000, 72113212, 2601952, 2202950);
    InitializeEvent(3213, 12107000, 72113213, 2601952, 2202951);
    InitializeEvent(3214, 12107000, 72113214, 2601952, 2702950);
    InitializeEvent(3215, 12107000, 72113215, 2601952, 2702951);
    InitializeEvent(3216, 12107000, 72113216, 2601952, 3202950);
    InitializeEvent(3217, 12107000, 72113217, 2601952, 3202952);
    InitializeEvent(3218, 12107000, 72113218, 2601952, 2802950);
    InitializeEvent(3219, 12107000, 72113219, 2601952, 2802953);
    InitializeEvent(3220, 12107000, 72113220, 2601952, 2802951);
    InitializeEvent(3221, 12107000, 72113221, 2601952, 2802952);
    InitializeEvent(3222, 12107000, 72113222, 2601952, 2502950);
    InitializeEvent(3223, 12107000, 72113223, 2601952, 2502952);
    InitializeEvent(3224, 12107000, 72113224, 2601952, 2502951);
    InitializeEvent(3225, 12107000, 72113225, 2601952, 2112950);
    InitializeEvent(3226, 12107000, 72113226, 2601952, 3202951);
    InitializeEvent(3227, 12107000, 72113227, 2601952, 3202953);
    InitializeEvent(3228, 12107000, 72113228, 2601952, 3302950);
    InitializeEvent(3229, 12107000, 72113229, 2601952, 3302951);
    InitializeEvent(3230, 12107000, 72113230, 2601952, 2602950);
    InitializeEvent(3231, 12107000, 72113231, 2601952, 2602953);
    InitializeEvent(3232, 12107000, 72113232, 2601952, 2602952);
    InitializeEvent(3233, 12107000, 72113233, 2601952, 2602951);
    InitializeEvent(3234, 12107000, 72113234, 2601952, 3402950);
    InitializeEvent(3235, 12107000, 72113235, 2601952, 3402951);
    InitializeEvent(3236, 12107000, 72113236, 2601952, 3402953);
    InitializeEvent(3237, 12107000, 72113237, 2601952, 3402952);
    InitializeEvent(3238, 12107000, 72113238, 2601952, 3502950);
    InitializeEvent(3239, 12107000, 72113239, 2601952, 3502951);
    InitializeEvent(3240, 12107000, 72113240, 2601952, 3502952);
    InitializeEvent(3241, 12107000, 72113241, 2601952, 3602950);
    InitializeEvent(3242, 12107000, 72113242, 2601952, 3602951);
    InitializeEvent(3243, 12107000, 72113243, 2601952, 3602952);
    InitializeEvent(3244, 12107000, 72113244, 2601952, 2902950);
    InitializeEvent(3245, 12107000, 72113245, 2601952, 2902951);
    InitializeEvent(3246, 12107000, 72113246, 2601952, 2902952);
    InitializeEvent(3247, 12107000, 72113247, 2601952, 2902953);
    InitializeEvent(3248, 12107000, 72113248, 2601952, 2902954);
    InitializeEvent(3249, 12107000, 72113249, 2601952, 2902955);
    InitializeEvent(3250, 12107000, 72113250, 2601952, 2902956);
    InitializeEvent(3251, 12107000, 72113251, 2601952, 2902957);
    InitializeEvent(3252, 12107000, 72113252, 2601952, 2902958);
    InitializeEvent(3253, 12107000, 72113253, 2601952, 2902959);

    InitializeEvent(3300, 12107000, 72113300, 2601951, 2412950);
    InitializeEvent(3301, 12107000, 72113301, 2601951, 2412951);
    InitializeEvent(3302, 12107000, 72113302, 2601951, 2412952);
    InitializeEvent(3303, 12107000, 72113303, 2601951, 2412953);
    InitializeEvent(3304, 12107000, 72113304, 2601951, 2402950);
    InitializeEvent(3305, 12107000, 72113305, 2601951, 2402951);
    InitializeEvent(3306, 12107000, 72113306, 2601951, 2422950);
    InitializeEvent(3307, 12107000, 72113307, 2601951, 2422952);
    InitializeEvent(3308, 12107000, 72113308, 2601951, 2422951);
    InitializeEvent(3309, 12107000, 72113309, 2601951, 2302950);
    InitializeEvent(3310, 12107000, 72113310, 2601951, 2302951);
    InitializeEvent(3311, 12107000, 72113311, 2601951, 2302952);
    InitializeEvent(3312, 12107000, 72113312, 2601951, 2202950);
    InitializeEvent(3313, 12107000, 72113313, 2601951, 2202951);
    InitializeEvent(3314, 12107000, 72113314, 2601951, 2702950);
    InitializeEvent(3315, 12107000, 72113315, 2601951, 2702951);
    InitializeEvent(3316, 12107000, 72113316, 2601951, 3202950);
    InitializeEvent(3317, 12107000, 72113317, 2601951, 3202952);
    InitializeEvent(3318, 12107000, 72113318, 2601951, 2802950);
    InitializeEvent(3319, 12107000, 72113319, 2601951, 2802953);
    InitializeEvent(3320, 12107000, 72113320, 2601951, 2802951);
    InitializeEvent(3321, 12107000, 72113321, 2601951, 2802952);
    InitializeEvent(3322, 12107000, 72113322, 2601951, 2502950);
    InitializeEvent(3323, 12107000, 72113323, 2601951, 2502952);
    InitializeEvent(3324, 12107000, 72113324, 2601951, 2502951);
    InitializeEvent(3325, 12107000, 72113325, 2601951, 2112950);
    InitializeEvent(3326, 12107000, 72113326, 2601951, 3202951);
    InitializeEvent(3327, 12107000, 72113327, 2601951, 3202953);
    InitializeEvent(3328, 12107000, 72113328, 2601951, 3302950);
    InitializeEvent(3329, 12107000, 72113329, 2601951, 3302951);
    InitializeEvent(3330, 12107000, 72113330, 2601951, 2602950);
    InitializeEvent(3331, 12107000, 72113331, 2601951, 2602953);
    InitializeEvent(3332, 12107000, 72113332, 2601951, 2602952);
    InitializeEvent(3333, 12107000, 72113333, 2601951, 2602951);
    InitializeEvent(3334, 12107000, 72113334, 2601951, 3402950);
    InitializeEvent(3335, 12107000, 72113335, 2601951, 3402951);
    InitializeEvent(3336, 12107000, 72113336, 2601951, 3402953);
    InitializeEvent(3337, 12107000, 72113337, 2601951, 3402952);
    InitializeEvent(3338, 12107000, 72113338, 2601951, 3502950);
    InitializeEvent(3339, 12107000, 72113339, 2601951, 3502951);
    InitializeEvent(3340, 12107000, 72113340, 2601951, 3502952);
    InitializeEvent(3341, 12107000, 72113341, 2601951, 3602950);
    InitializeEvent(3342, 12107000, 72113342, 2601951, 3602951);
    InitializeEvent(3343, 12107000, 72113343, 2601951, 3602952);
    InitializeEvent(3344, 12107000, 72113344, 2601951, 2902950);
    InitializeEvent(3345, 12107000, 72113345, 2601951, 2902951);
    InitializeEvent(3346, 12107000, 72113346, 2601951, 2902952);
    InitializeEvent(3347, 12107000, 72113347, 2601951, 2902953);
    InitializeEvent(3348, 12107000, 72113348, 2601951, 2902954);
    InitializeEvent(3349, 12107000, 72113349, 2601951, 2902955);
    InitializeEvent(3350, 12107000, 72113350, 2601951, 2902956);
    InitializeEvent(3351, 12107000, 72113351, 2601951, 2902957);
    InitializeEvent(3352, 12107000, 72113352, 2601951, 2902958);
    InitializeEvent(3353, 12107000, 72113353, 2601951, 2902959);

    SetEventFlag(72110030, OFF);
    SetEventFlag(72110130, OFF);
    SetEventFlag(72110230, OFF);
    SetEventFlag(72110330, OFF);
    SetEventFlag(72110430, OFF);
    SetEventFlag(72110530, OFF);
    SetEventFlag(72110630, OFF);
    SetEventFlag(72110730, OFF);
    SetEventFlag(72110830, OFF);
    SetEventFlag(72110930, OFF);
    SetEventFlag(72111030, OFF);
    SetEventFlag(72111130, OFF);
    SetEventFlag(72111230, OFF);
    SetEventFlag(72111330, OFF);
    SetEventFlag(72111430, OFF);
    SetEventFlag(72111530, OFF);
    SetEventFlag(72111630, OFF);
    SetEventFlag(72111730, OFF);
    SetEventFlag(72111830, OFF);
    SetEventFlag(72111930, OFF);
    SetEventFlag(72112030, OFF);
    SetEventFlag(72112130, OFF);
    SetEventFlag(72112230, OFF);
    SetEventFlag(72112330, OFF);
    SetEventFlag(72112430, OFF);
    SetEventFlag(72112530, OFF);
    SetEventFlag(72112630, OFF);
    SetEventFlag(72112730, OFF);
    SetEventFlag(72112830, OFF);
    SetEventFlag(72112930, OFF);
    SetEventFlag(72113030, OFF);
    SetEventFlag(72113130, OFF);
    SetEventFlag(72113230, OFF);
    SetEventFlag(72113330, OFF);
    SetEventFlag(72113430, OFF);
    SetEventFlag(72113530, OFF);
    SetEventFlag(72113630, OFF);
    SetEventFlag(72113730, OFF);
    SetEventFlag(72113830, OFF);
    SetEventFlag(72113930, OFF);
    SetEventFlag(72114030, OFF);
    SetEventFlag(72114130, OFF);
    SetEventFlag(72114230, OFF);
    SetEventFlag(72114330, OFF);
    SetEventFlag(72114430, OFF);
    SetEventFlag(72114530, OFF);
    SetEventFlag(72114630, OFF);
    SetEventFlag(72114730, OFF);
    SetEventFlag(72114830, OFF);
    SetEventFlag(72114930, OFF);
    SetEventFlag(72115030, OFF);
    SetEventFlag(72115130, OFF);
    SetEventFlag(72115230, OFF);
    SetEventFlag(72115330, OFF);

    SetEventFlag(72110031, OFF);
    SetEventFlag(72110131, OFF);
    SetEventFlag(72110231, OFF);
    SetEventFlag(72110331, OFF);
    SetEventFlag(72110431, OFF);
    SetEventFlag(72110531, OFF);
    SetEventFlag(72110631, OFF);
    SetEventFlag(72110731, OFF);
    SetEventFlag(72110831, OFF);
    SetEventFlag(72110931, OFF);
    SetEventFlag(72111031, OFF);
    SetEventFlag(72111131, OFF);
    SetEventFlag(72111231, OFF);
    SetEventFlag(72111331, OFF);
    SetEventFlag(72111431, OFF);
    SetEventFlag(72111531, OFF);
    SetEventFlag(72111631, OFF);
    SetEventFlag(72111731, OFF);
    SetEventFlag(72111831, OFF);
    SetEventFlag(72111931, OFF);
    SetEventFlag(72112031, OFF);
    SetEventFlag(72112131, OFF);
    SetEventFlag(72112231, OFF);
    SetEventFlag(72112331, OFF);
    SetEventFlag(72112431, OFF);
    SetEventFlag(72112531, OFF);
    SetEventFlag(72112631, OFF);
    SetEventFlag(72112731, OFF);
    SetEventFlag(72112831, OFF);
    SetEventFlag(72112931, OFF);
    SetEventFlag(72113031, OFF);
    SetEventFlag(72113131, OFF);
    SetEventFlag(72113231, OFF);
    SetEventFlag(72113331, OFF);
    SetEventFlag(72113431, OFF);
    SetEventFlag(72113531, OFF);
    SetEventFlag(72113631, OFF);
    SetEventFlag(72113731, OFF);
    SetEventFlag(72113831, OFF);
    SetEventFlag(72113931, OFF);
    SetEventFlag(72114031, OFF);
    SetEventFlag(72114131, OFF);
    SetEventFlag(72114231, OFF);
    SetEventFlag(72114331, OFF);
    SetEventFlag(72114431, OFF);
    SetEventFlag(72114531, OFF);
    SetEventFlag(72114631, OFF);
    SetEventFlag(72114731, OFF);
    SetEventFlag(72114831, OFF);
    SetEventFlag(72114931, OFF);
    SetEventFlag(72115031, OFF);
    SetEventFlag(72115131, OFF);
    SetEventFlag(72115231, OFF);
    SetEventFlag(72115331, OFF);

    SetEventFlag(72110032, OFF);
    SetEventFlag(72110132, OFF);
    SetEventFlag(72110232, OFF);
    SetEventFlag(72110332, OFF);
    SetEventFlag(72110432, OFF);
    SetEventFlag(72110532, OFF);
    SetEventFlag(72110632, OFF);
    SetEventFlag(72110732, OFF);
    SetEventFlag(72110832, OFF);
    SetEventFlag(72110932, OFF);
    SetEventFlag(72111032, OFF);
    SetEventFlag(72111132, OFF);
    SetEventFlag(72111232, OFF);
    SetEventFlag(72111332, OFF);
    SetEventFlag(72111432, OFF);
    SetEventFlag(72111532, OFF);
    SetEventFlag(72111632, OFF);
    SetEventFlag(72111732, OFF);
    SetEventFlag(72111832, OFF);
    SetEventFlag(72111932, OFF);
    SetEventFlag(72112032, OFF);
    SetEventFlag(72112132, OFF);
    SetEventFlag(72112232, OFF);
    SetEventFlag(72112332, OFF);
    SetEventFlag(72112432, OFF);
    SetEventFlag(72112532, OFF);
    SetEventFlag(72112632, OFF);
    SetEventFlag(72112732, OFF);
    SetEventFlag(72112832, OFF);
    SetEventFlag(72112932, OFF);
    SetEventFlag(72113032, OFF);
    SetEventFlag(72113132, OFF);
    SetEventFlag(72113232, OFF);
    SetEventFlag(72113332, OFF);
    SetEventFlag(72113432, OFF);
    SetEventFlag(72113532, OFF);
    SetEventFlag(72113632, OFF);
    SetEventFlag(72113732, OFF);
    SetEventFlag(72113832, OFF);
    SetEventFlag(72113932, OFF);
    SetEventFlag(72114032, OFF);
    SetEventFlag(72114132, OFF);
    SetEventFlag(72114232, OFF);
    SetEventFlag(72114332, OFF);
    SetEventFlag(72114432, OFF);
    SetEventFlag(72114532, OFF);
    SetEventFlag(72114632, OFF);
    SetEventFlag(72114732, OFF);
    SetEventFlag(72114832, OFF);
    SetEventFlag(72114932, OFF);
    SetEventFlag(72115032, OFF);
    SetEventFlag(72115132, OFF);
    SetEventFlag(72115232, OFF);
    SetEventFlag(72115332, OFF);

    SetEventFlag(72110033, OFF);
    SetEventFlag(72110133, OFF);
    SetEventFlag(72110233, OFF);
    SetEventFlag(72110333, OFF);
    SetEventFlag(72110433, OFF);
    SetEventFlag(72110533, OFF);
    SetEventFlag(72110633, OFF);
    SetEventFlag(72110733, OFF);
    SetEventFlag(72110833, OFF);
    SetEventFlag(72110933, OFF);
    SetEventFlag(72111033, OFF);
    SetEventFlag(72111133, OFF);
    SetEventFlag(72111233, OFF);
    SetEventFlag(72111333, OFF);
    SetEventFlag(72111433, OFF);
    SetEventFlag(72111533, OFF);
    SetEventFlag(72111633, OFF);
    SetEventFlag(72111733, OFF);
    SetEventFlag(72111833, OFF);
    SetEventFlag(72111933, OFF);
    SetEventFlag(72112033, OFF);
    SetEventFlag(72112133, OFF);
    SetEventFlag(72112233, OFF);
    SetEventFlag(72112333, OFF);
    SetEventFlag(72112433, OFF);
    SetEventFlag(72112533, OFF);
    SetEventFlag(72112633, OFF);
    SetEventFlag(72112733, OFF);
    SetEventFlag(72112833, OFF);
    SetEventFlag(72112933, OFF);
    SetEventFlag(72113033, OFF);
    SetEventFlag(72113133, OFF);
    SetEventFlag(72113233, OFF);
    SetEventFlag(72113333, OFF);
    SetEventFlag(72113433, OFF);
    SetEventFlag(72113533, OFF);
    SetEventFlag(72113633, OFF);
    SetEventFlag(72113733, OFF);
    SetEventFlag(72113833, OFF);
    SetEventFlag(72113933, OFF);
    SetEventFlag(72114033, OFF);
    SetEventFlag(72114133, OFF);
    SetEventFlag(72114233, OFF);
    SetEventFlag(72114333, OFF);
    SetEventFlag(72114433, OFF);
    SetEventFlag(72114533, OFF);
    SetEventFlag(72114633, OFF);
    SetEventFlag(72114733, OFF);
    SetEventFlag(72114833, OFF);
    SetEventFlag(72114933, OFF);
    SetEventFlag(72115033, OFF);
    SetEventFlag(72115133, OFF);
    SetEventFlag(72115233, OFF);
    SetEventFlag(72115333, OFF);

    InitializeEvent(0, 12107100, 72100421, 2601950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2601950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2601950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2601950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2601950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2601950, 9026);

    InitializeEvent(6, 12107100, 72100427, 2601951, 9021);
    InitializeEvent(7, 12107100, 72100428, 2601951, 9022);
    InitializeEvent(8, 12107100, 72100429, 2601951, 9023);
    InitializeEvent(9, 12107100, 72100430, 2601951, 9024);
    InitializeEvent(10, 12107100, 72100431, 2601951, 9025);
    InitializeEvent(11, 12107100, 72100432, 2601951, 9026);

    InitializeEvent(12, 12107100, 72100433, 2601952, 9021);
    InitializeEvent(13, 12107100, 72100434, 2601952, 9022);
    InitializeEvent(14, 12107100, 72100435, 2601952, 9023);
    InitializeEvent(15, 12107100, 72100436, 2601952, 9024);
    InitializeEvent(16, 12107100, 72100437, 2601952, 9025);
    InitializeEvent(17, 12107100, 72100438, 2601952, 9026);

    InitializeEvent(18, 12107100, 72100439, 2601953, 9021);
    InitializeEvent(19, 12107100, 72100440, 2601953, 9022);
    InitializeEvent(20, 12107100, 72100441, 2601953, 9023);
    InitializeEvent(21, 12107100, 72100442, 2601953, 9024);
    InitializeEvent(22, 12107100, 72100443, 2601953, 9025);
    InitializeEvent(23, 12107100, 72100444, 2601953, 9026);

    InitializeEvent(0, 12107200, 72100300, 2902950, 9001, 2901950);
    InitializeEvent(1, 12107200, 72100301, 2902951, 9002, 2901950);
    InitializeEvent(2, 12107200, 72100302, 2902952, 9003, 2901950);
    InitializeEvent(3, 12107200, 72100303, 2902953, 9004, 2901950);
    InitializeEvent(4, 12107200, 72100304, 2902954, 9005, 2901950);
    InitializeEvent(5, 12107200, 72100305, 2902955, 9006, 2901950);
    InitializeEvent(6, 12107200, 72100306, 2902956, 9007, 2901950);
    InitializeEvent(7, 12107200, 72100307, 2902957, 9008, 2901950);
    InitializeEvent(8, 12107200, 72100308, 2902958, 9009, 2901950);
    InitializeEvent(9, 12107200, 72100309, 2902959, 9010, 2901950);

    InitializeEvent(10, 12107200, 72100310, 2902950, 9001, 2901951);
    InitializeEvent(11, 12107200, 72100311, 2902951, 9002, 2901951);
    InitializeEvent(12, 12107200, 72100312, 2902952, 9003, 2901951);
    InitializeEvent(13, 12107200, 72100313, 2902953, 9004, 2901951);
    InitializeEvent(14, 12107200, 72100314, 2902954, 9005, 2901951);
    InitializeEvent(15, 12107200, 72100315, 2902955, 9006, 2901951);
    InitializeEvent(16, 12107200, 72100316, 2902956, 9007, 2901951);
    InitializeEvent(17, 12107200, 72100317, 2902957, 9008, 2901951);
    InitializeEvent(18, 12107200, 72100318, 2902958, 9009, 2901951);
    InitializeEvent(19, 12107200, 72100319, 2902959, 9010, 2901951);

    InitializeEvent(20, 12107200, 72100320, 2902950, 9001, 2901952);
    InitializeEvent(21, 12107200, 72100321, 2902951, 9002, 2901952);
    InitializeEvent(22, 12107200, 72100322, 2902952, 9003, 2901952);
    InitializeEvent(23, 12107200, 72100323, 2902953, 9004, 2901952);
    InitializeEvent(24, 12107200, 72100324, 2902954, 9005, 2901952);
    InitializeEvent(25, 12107200, 72100325, 2902955, 9006, 2901952);
    InitializeEvent(26, 12107200, 72100326, 2902956, 9007, 2901952);
    InitializeEvent(27, 12107200, 72100327, 2902957, 9008, 2901952);
    InitializeEvent(28, 12107200, 72100328, 2902958, 9009, 2901952);
    InitializeEvent(29, 12107200, 72100329, 2902959, 9010, 2901952);

    InitializeEvent(30, 12107200, 72100330, 2902950, 9001, 2901953);
    InitializeEvent(31, 12107200, 72100331, 2902951, 9002, 2901953);
    InitializeEvent(32, 12107200, 72100332, 2902952, 9003, 2901953);
    InitializeEvent(33, 12107200, 72100333, 2902953, 9004, 2901953);
    InitializeEvent(34, 12107200, 72100334, 2902954, 9005, 2901953);
    InitializeEvent(35, 12107200, 72100335, 2902955, 9006, 2901953);
    InitializeEvent(36, 12107200, 72100336, 2902956, 9007, 2901953);
    InitializeEvent(37, 12107200, 72100337, 2902957, 9008, 2901953);
    InitializeEvent(38, 12107200, 72100338, 2902958, 9009, 2901953);
    InitializeEvent(39, 12107200, 72100339, 2902959, 9010, 2901953);
    
    InitializeEvent(30, 7000, 2600950, 2601950, 999, 12607800, -1);
    
    InitializeEvent(31, 7000, 2600951, 2601951, 12601800, 12607820, wet_nurse_defeat+13);
    InitializeEvent(wet_nurse_offset, 8800, wet_nurse_defeat+13, wet_nurse_lamp_id-1000, wet_nurse_lamp_id, wet_nurse_lamp_id+3000);
    
    InitializeEvent(32, 7000, 2600952, 2601952, 999, 12607840, -1);
    InitializeEvent(33, 7000, 2600953, 2601953, 999, 12607860, -1);
    InitializeEvent(30, 7100, 72600200, 2601950);
    InitializeEvent(31, 7100, 72600201, 2601951);
    InitializeEvent(32, 7100, 72600202, 2601952);
    InitializeEvent(33, 7100, 72600203, 2601953);
    InitializeEvent(30, 7200, 72600100, 2601950, 2102953);
    InitializeEvent(31, 7200, 72600101, 2601951, 2102953);
    InitializeEvent(32, 7200, 72600102, 2601952, 2102953);
    InitializeEvent(33, 7200, 72600103, 2601953, 2102953);
    InitializeEvent(30, 7300, 72102600, 2601950);
    InitializeEvent(31, 7300, 72102601, 2601951);
    InitializeEvent(32, 7300, 72102602, 2601952);
    InitializeEvent(33, 7300, 72102603, 2601953);
    InitializeEvent(30, 12102220, 2601950, 2600950);
    InitializeEvent(31, 12102220, 2601951, 2600951);
    InitializeEvent(32, 12102220, 2601952, 2600952);
    InitializeEvent(33, 12102220, 2601953, 2600953);
    InitializeEvent(6, 9200, 2603900);
    StartTimeMeasurement(2600000, 0, Disabled);
    StartTimeMeasurement(2600001, 18, Enabled);
    InitializeEvent(0, 12600990, 0);
    InitializeEvent(0, 12604700, 2600700, 12604701, 12604711, 2600, 12604741, 12601700);
    InitializeEvent(5, 12604700, 2600701, 12604702, 12604712, 2601, 12604743, 12601701);
    InitializeEvent(0, 12604710, 2600700, 12604701, 12604711, 12604721, 12604741);
    InitializeEvent(5, 12604710, 2600701, 12604702, 12604712, 12604722, 12604743);
    InitializeEvent(0, 12604720, 2600700, 12604701, 12604711, 12604721, 12604741);
    InitializeEvent(5, 12604720, 2600701, 12604702, 12604712, 12604722, 12604743);
    InitializeEvent(0, 12604730, 2600700, 12604701, 12604711, 2600, 12604731, 12601700, 12604741);
    InitializeEvent(5, 12604730, 2600701, 12604702, 12604712, 2601, 12604732, 12601701, 12604743);
    InitializeEvent(0, 12604740, 0);
    InitializeEvent(0, 12604742, 0);
    InitializeEvent(0, 12604847, 0);
    InitializeEvent(0, 12604848, 0);
    InitializeEvent(0, 12601800, 0);
    InitializeEvent(0, 12601801, 0);
    InitializeEvent(0, 12601802, 0);
    InitializeEvent(0, 12604845, 0);
    InitializeEvent(0, 12604846, 0);
    InitializeEvent(0, 12604802, 0);
    InitializeEvent(0, 12604803, 0);
    InitializeEvent(0, 12604804, 0);
    InitializeEvent(0, 12604805, 0);
    InitializeEvent(0, 12604807, 0);
    InitializeEvent(0, 12601803, 0);
    InitializeEvent(0, 12604820, 2600800, 12605880, 12605885);
    InitializeEvent(0, 12604830, 2600800, 12605880, 2602830, 2602831);
    InitializeEvent(1, 12604830, 2600800, 12605881, 2602831, 2602832);
    InitializeEvent(2, 12604830, 2600800, 12605882, 2602832, 2602830);
    InitializeEvent(3, 12604830, 2600800, 12605883, 2602833, 2602834);
    InitializeEvent(4, 12604830, 2600800, 12605884, 2602834, 2602835);
    InitializeEvent(5, 12604830, 2600800, 12605885, 2602835, 2602833);
    InitializeEvent(0, 12604806, 0);
    InitializeEvent(0, 12604810, 0);
    InitializeEvent(0, 12604840, 0);
    InitializeEvent(0, 12604815, 0);
    InitializeEvent(0, 12604862, 0);
    InitializeEvent(0, 12604863, 0);
    InitializeEvent(0, 12601850, 0);
    InitializeEvent(0, 12601851, 0);
    InitializeEvent(0, 12601852, 0);
    InitializeEvent(0, 12601853, 0);
    InitializeEvent(0, 12604860, 0);
    InitializeEvent(0, 12604861, 0);
    InitializeEvent(0, 12604852, 0);
    InitializeEvent(0, 12604853, 0);
    InitializeEvent(0, 12604854, 0);
    InitializeEvent(0, 12604855, 0);
    InitializeEvent(0, 12604856, 0);
    InitializeEvent(0, 12604985, 0);
    InitializeEvent(0, 12604986, 0);
    InitializeEvent(0, 12601854, 0);
    InitializeEvent(0, 12601855, 0);
    InitializeEvent(0, 12604870, 2602040, 2602042, 2602041, 2602042, 2602042, 12604942, 12604941, 12604942);
    InitializeEvent(1, 12604870, 2602041, 2602043, 2602040, 2602043, 2602043, 12604943, 12604940, 12604943);
    InitializeEvent(2, 12604870, 2602042, 2602040, 2602044, 2602040, 2602044, 12604940, 12604944, 12604940);
    InitializeEvent(3, 12604870, 2602043, 2602046, 2602045, 2602041, 2602046, 12604946, 12604945, 12604941);
    InitializeEvent(4, 12604870, 2602044, 2602042, 2602042, 2602045, 2602042, 12604942, 12604942, 12604945);
    InitializeEvent(5, 12604870, 2602045, 2602043, 2602043, 2602044, 2602043, 12604943, 12604943, 12604944);
    InitializeEvent(0, 12604877, 0);
    InitializeEvent(0, 12604888, 0);
    InitializeEvent(0, 12604878, 0);
    InitializeEvent(0, 12604880, 2602060, 2602062, 2602061, 2602062, 12604952, 12604951, 12604952, 2602070);
    InitializeEvent(1, 12604880, 2602061, 2602065, 2602060, 2602065, 12604955, 12604950, 12604955, 2602070);
    InitializeEvent(2, 12604880, 2602062, 2602063, 2602063, 2602060, 12604953, 12604953, 12604950, 2602070);
    InitializeEvent(3, 12604880, 2602063, 2602064, 2602064, 2602064, 12604954, 12604954, 12604954, 2602070);
    InitializeEvent(4, 12604880, 2602065, 2602066, 2602067, 2602061, 12604956, 12604957, 12604951, 2602079);
    InitializeEvent(5, 12604880, 2602067, 2602065, 2602065, 2602068, 12604955, 12604955, 12604958, 2602070);
    InitializeEvent(6, 12604880, 2602068, 2602069, 2602069, 2602067, 12604959, 12604959, 12604957, 2602070);
    InitializeEvent(7, 12604880, 2602059, 2602065, 2602065, 2602065, 12604955, 12604955, 12604955, 2602070);
    InitializeEvent(0, 12604956, 0);
    InitializeEvent(0, 12604879, 0);
    InitializeEvent(0, 12604930, 0);
    InitializeEvent(0, 12604889, 0);
    InitializeEvent(1, 12604890, 2600161, 12601850, 12604857);
    InitializeEvent(2, 12604890, 2600162, 12601850, 12604857);
    InitializeEvent(3, 12604890, 2600163, 12601850, 12604857);
    InitializeEvent(4, 12604890, 2600164, 12601850, 12604857);
    InitializeEvent(5, 12604890, 2600165, 12601850, 12604857);
    InitializeEvent(7, 12604890, 2600167, 12601850, 12604857);
    InitializeEvent(9, 12604890, 2600169, 12601850, 12604857);
    InitializeEvent(10, 12604890, 2600170, 12601850, 12604857);
    InitializeEvent(11, 12604890, 2600171, 12601850, 12604857);
    InitializeEvent(12, 12604890, 2600172, 12601850, 12604857);
    InitializeEvent(13, 12604890, 2600173, 12601850, 12604857);
    InitializeEvent(15, 12604890, 2600175, 12601850, 12604857);
    InitializeEvent(16, 12604890, 2600176, 12601850, 12604857);
    InitializeEvent(17, 12604890, 2600177, 12601850, 12604857);
    InitializeEvent(18, 12604890, 2600178, 12601850, 12604857);
    InitializeEvent(19, 12604890, 2600179, 12601850, 12604857);
    InitializeEvent(1, 12604910, 2600161, 12601850);
    InitializeEvent(2, 12604910, 2600162, 12601850);
    InitializeEvent(3, 12604910, 2600163, 12601850);
    InitializeEvent(4, 12604910, 2600164, 12601850);
    InitializeEvent(5, 12604910, 2600165, 12601850);
    InitializeEvent(7, 12604910, 2600167, 12601850);
    InitializeEvent(9, 12604910, 2600169, 12601850);
    InitializeEvent(10, 12604910, 2600170, 12601850);
    InitializeEvent(11, 12604910, 2600171, 12601850);
    InitializeEvent(12, 12604910, 2600172, 12601850);
    InitializeEvent(13, 12604910, 2600173, 12601850);
    InitializeEvent(15, 12604910, 2600175, 12601850);
    InitializeEvent(16, 12604910, 2600176, 12601850);
    InitializeEvent(17, 12604910, 2600177, 12601850);
    InitializeEvent(18, 12604910, 2600178, 12601850);
    InitializeEvent(19, 12604910, 2600179, 12601850);
    InitializeEvent(0, 12604931, 12604946, 12604856);
    InitializeEvent(1, 12604931, 12604956, 12601850);
    InitializeEvent(0, 12604960, 2602040);
    InitializeEvent(1, 12604960, 2602041);
    InitializeEvent(2, 12604960, 2602042);
    InitializeEvent(3, 12604960, 2602043);
    InitializeEvent(4, 12604960, 2602044);
    InitializeEvent(5, 12604960, 2602045);
    InitializeEvent(6, 12604960, 2602046);
    InitializeEvent(0, 12604970, 2602060);
    InitializeEvent(1, 12604970, 2602061);
    InitializeEvent(2, 12604970, 2602062);
    InitializeEvent(3, 12604970, 2602063);
    InitializeEvent(4, 12604970, 2602064);
    InitializeEvent(5, 12604970, 2602065);
    InitializeEvent(6, 12604970, 2602066);
    InitializeEvent(7, 12604970, 2602067);
    InitializeEvent(8, 12604970, 2602068);
    InitializeEvent(9, 12604970, 2602059);
    InitializeEvent(0, 12604980, 20, 72600307, 72600311, 72600307, 72600311, 72600311, 72600306);
    InitializeEvent(1, 12604980, 10, 72600312, 72600316, 72600312, 72600316, 72600316, 72600306);
    InitializeEvent(0, 12600020, 2600100, 2600101);
    InitializeEvent(0, 12600021, 0);
    InitializeEvent(0, 12600025, 0);
    InitializeEvent(0, 12600026, 0);
    InitializeEvent(0, 12600027, 0);
    InitializeEvent(0, 12600028, 0);
    InitializeEvent(0, 12600029, 0);
    InitializeEvent(0, 12600500, 2600720);
    InitializeEvent(0, 12600030, 0);
    InitializeEvent(0, 12600031, 0);
    SetMapSoundState(2603100, Disabled);
    InitializeEvent(0, 12600010, 2602301, 260000001, 0);
    InitializeEvent(1, 12600010, 2602302, 260000001, 0);
    InitializeEvent(2, 12600010, 2602303, 260000001, 0);
    InitializeEvent(3, 12600010, 2602304, 260000001, 0);
    InitializeEvent(4, 12600010, 2602305, 260000001, 0);
    InitializeEvent(5, 12600010, 2602310, 2603100, 1);
    InitializeEvent(0, 12600130, 10000);
    InitializeEvent(1, 12600130, 10000);
    InitializeEvent(2, 12600130, 10000);
    InitializeEvent(3, 12600130, 2600104);
    InitializeEvent(4, 12600130, 2600113);
    InitializeEvent(5, 12600130, 2600150);
    InitializeEvent(6, 12600130, 2600153);
    InitializeEvent(7, 12600130, 2600155);
    InitializeEvent(8, 12600130, 2600201);
    InitializeEvent(9, 12600130, 2600180);
    InitializeEvent(10, 12600130, 2600181);
    InitializeEvent(11, 12600130, 2600182);
    InitializeEvent(12, 12600130, 2600183);
    InitializeEvent(13, 12600130, 2600103);
    InitializeEvent(0, 12600150, 10000);
    InitializeEvent(1, 12600150, 2600104);
    InitializeEvent(2, 12600150, 2600113);
    InitializeEvent(3, 12600150, 2600150);
    InitializeEvent(4, 12600150, 2600153);
    InitializeEvent(5, 12600150, 2600155);
    InitializeEvent(6, 12600150, 2600201);
    InitializeEvent(7, 12600150, 2600180);
    InitializeEvent(8, 12600150, 2600181);
    InitializeEvent(9, 12600150, 2600182);
    InitializeEvent(10, 12600150, 2600183);
    InitializeEvent(11, 12600150, 2600103);
    InitializeEvent(0, 12601294, 0);
    InitializeEvent(0, 12601295, 2601211, 12601294, 12605250, 12601250, 0);
    InitializeEvent(1, 12601295, 2601212, 12601294, 12605250, 12601250, 1);
    InitializeEvent(2, 12601295, 2601221, 12601331, 12605251, 12601251, 0);
    InitializeEvent(3, 12601295, 2601222, 12601331, 12605251, 12601251, 1);
    InitializeEvent(4, 12601295, 2601231, 12601294, 12605252, 12601252, 0);
    InitializeEvent(5, 12601295, 2601232, 12601294, 12605252, 12601252, 1);
    InitializeEvent(6, 12601295, 2601241, 12601323, 12605256, 12601256, 1);
    InitializeEvent(7, 12601295, 2601242, 12601323, 12605256, 12601256, 0);
    InitializeEvent(8, 12601295, 2601281, 12601334, 12605253, 12601254, 0);
    InitializeEvent(9, 12601295, 2601282, 12601334, 12605253, 12601254, 1);
    InitializeEvent(10, 12601295, 2601291, 12601335, 12605254, 12601255, 0);
    InitializeEvent(11, 12601295, 2601292, 12601335, 12605254, 12601255, 1);
    InitializeEvent(0, 12601340, 12601331, 12601251, 2601221);
    InitializeEvent(1, 12601340, 12601334, 12601254, 2601281);
    InitializeEvent(2, 12601340, 12601335, 12601255, 2601291);
    InitializeEvent(0, 12601310, 12601250, 2601210, 2601211, 2601212, 12601294);
    InitializeEvent(1, 12601310, 12601251, 2601220, 2601221, 2601222, 12601331);
    InitializeEvent(2, 12601310, 12601252, 2601230, 2601231, 2601232, 12601294);
    InitializeEvent(0, 12601315, 12601256, 2601240, 2601241, 2601242, 12601323);
    InitializeEvent(3, 12601310, 12601254, 2601280, 2601281, 2601282, 12601334);
    InitializeEvent(4, 12601310, 12601255, 2601290, 2601291, 2601292, 12601335);
    InitializeEvent(0, 12601320, 12605250, 12601250, 2602211, 2602212, 2601211, 2601212, 2601210, 12601211);
    InitializeEvent(0, 12601330, 12605250, 12601250, 2602211, 2602212, 2601211, 2601212, 2601210, 12601211);
    InitializeEvent(1, 12601320, 12605251, 12601251, 2602221, 2602222, 2601221, 2601222, 2601220, 12601221);
    InitializeEvent(1, 12601330, 12605251, 12601251, 2602221, 2602222, 2601221, 2601222, 2601220, 12601221);
    InitializeEvent(2, 12601320, 12605252, 12601252, 2602231, 2602232, 2601231, 2601232, 2601230, 12601231);
    InitializeEvent(2, 12601330, 12605252, 12601252, 2602231, 2602232, 2601231, 2601232, 2601230, 12601231);
    InitializeEvent(3, 12601320, 12605256, 12601256, 2602252, 2602251, 2601242, 2601241, 2601240, 12601241);
    InitializeEvent(3, 12601330, 12605256, 12601256, 2602252, 2602251, 2601242, 2601241, 2601240, 12601241);
    InitializeEvent(4, 12601320, 12605253, 12601254, 2602281, 2602282, 2601281, 2601282, 2601280, 12601281);
    InitializeEvent(4, 12601330, 12605253, 12601254, 2602281, 2602282, 2601281, 2601282, 2601280, 12601281);
    InitializeEvent(5, 12601320, 12605254, 12601255, 2602291, 2602292, 2601291, 2601292, 2601290, 12601291);
    InitializeEvent(5, 12601330, 12605254, 12601255, 2602291, 2602292, 2601291, 2601292, 2601290, 12601291);
    InitializeEvent(0, 12601351, 12601850, 2601260, 2601261);
    InitializeEvent(0, 12601352, 0);
    InitializeEvent(0, 12605200, 2600300, 2600310);
    InitializeEvent(1, 12605200, 2600301, 2600311);
    InitializeEvent(2, 12605200, 2600302, 2600312);
    InitializeEvent(3, 12605200, 2600303, 2600313);
    InitializeEvent(0, 12600080, 2600183, 7011, 7013, 7014);
    InitializeEvent(0, 12600040, 2602001, 2600105, 2602004, 10000, 2602015);
    InitializeEvent(0, 12600041, 2600105);
    InitializeEvent(1, 12600041, 2600111);
    InitializeEvent(2, 12600041, 2600106);
    InitializeEvent(3, 12600041, 2600195);
    InitializeEvent(4, 12600041, 2600196);
    InitializeEvent(5, 12600041, 2600197);
    InitializeEvent(1, 12600047, 2600109);
    InitializeEvent(2, 12600047, 2600110);
    InitializeEvent(3, 12600047, 2600198);
    InitializeEvent(0, 12600180, 2600106, 22502610);
    InitializeEvent(0, 12600400, 2600400, 52600990);
    InitializeEvent(1, 12600400, 2600401, 52600980);
    InitializeEvent(2, 12600400, 2600402, 52600970);
    InitializeEvent(3, 12600400, 2600403, 52600960);
    InitializeEvent(4, 12600400, 2600404, 52600950);
    InitializeEvent(0, 12600410, 0);
    InitializeEvent(0, 12600050, 2600134, 2602020);
    InitializeEvent(1, 12600050, 2600135, 2602020);
    InitializeEvent(2, 12600050, 2600136, 2602020);
    InitializeEvent(3, 12600050, 2600137, 2602020);
    InitializeEvent(4, 12600050, 2600138, 2602031);
    InitializeEvent(5, 12600050, 2600139, 2602031);
    InitializeEvent(6, 12600050, 2600140, 2602020);
    InitializeEvent(7, 12600050, 2600141, 2602031);
    InitializeEvent(8, 12600050, 2600102, 2602020);
    InitializeEvent(0, 12600035, 2600104);
    InitializeEvent(1, 12600035, 2600201);
    InitializeEvent(2, 12600035, 2600190);
    InitializeEvent(3, 12600035, 2600220);
    InitializeEvent(4, 12600035, 2600221);
    InitializeEvent(0, 12600190, 2600191, 2600192);
    InitializeEvent(1, 12600190, 2600192, 2600191);
    InitializeEvent(0, 12600110, 2600104, 2600210, 2600211);
    InitializeEvent(1, 12600110, 2600113, 2600212, 2600213);
    InitializeEvent(2, 12600110, 2600201, 2600214, 2600215);
    InitializeEvent(3, 12600110, 2600103, 2600216, 2600217);
    InitializeEvent(0, 12600070, 2600114, 2602012, 1098907648);
    InitializeEvent(3, 12600070, 2600117, 2602013, 1097859072);
    InitializeEvent(4, 12600070, 2600118, 2602014, 1097859072);
    InitializeEvent(5, 12600070, 2600119, 2602014, 1097859072);
    InitializeEvent(0, 12600105, 2600123, 7010, 7011, 2600120, 2600121, 2600122);
    InitializeEvent(1, 12600105, 2600145, 7010, 7011, 2600125, 2600126, 0);
    InitializeEvent(0, 12600060, 2600120, 9001, 9060);
    InitializeEvent(1, 12600060, 2600121, 9000, 9060);
    InitializeEvent(2, 12600060, 2600122, 9000, 9060);
    InitializeEvent(3, 12600060, 2600125, 9000, 9060);
    InitializeEvent(4, 12600060, 2600126, 9001, 9060);
    InitializeEvent(5, 12600060, 2600129, 9000, 9060);
    InitializeEvent(0, 12600090, 2600107, 2602008);
    InitializeEvent(1, 12600090, 2600108, 2602009);
    InitializeEvent(2, 12600090, 2600116, 2602009);
    InitializeEvent(3, 12600090, 2600202, 2602005);
    InitializeEvent(0, 12600120, 12601000, 2601005);
    InitializeEvent(1, 12600120, 12601001, 2601006);
    InitializeEvent(2, 12600120, 12601002, 2601007);
    InitializeEvent(3, 12600120, 12601003, 2601009);
    InitializeEvent(0, 12600125, 2601008, 2600570);
    GotoIf(S0, !CharacterType(10000, TargetType.Alive));
    GotoIf(S0, !EventFlag(6314));
    SetEventFlag(12601999, ON);
S0:
    if (!EventFlag(12601999)) {
        DeactivateObject(2601500, Enabled);
        DeactivateObject(2601501, Disabled);
        SetObjectTreasureState(2601500, Enabled);
        SetObjectTreasureState(2601501, Disabled);
    } else {
        DeactivateObject(2601500, Disabled);
        DeactivateObject(2601501, Enabled);
        SetObjectTreasureState(2601500, Disabled);
        SetObjectTreasureState(2601501, Enabled);
    }
    GotoIf(S1, !CharacterType(10000, TargetType.Alive));
    GotoIf(S1, !EventFlag(6315));
    SetEventFlag(12601998, ON);
S1:
    if (!EventFlag(12601998)) {
        DeactivateObject(2601502, Enabled);
        DeactivateObject(2601503, Disabled);
        SetObjectTreasureState(2601502, Enabled);
        SetObjectTreasureState(2601503, Disabled);
    } else {
        DeactivateObject(2601502, Disabled);
        DeactivateObject(2601503, Enabled);
        SetObjectTreasureState(2601502, Disabled);
        SetObjectTreasureState(2601503, Enabled);
    }
    InitializeEvent(0, 12601050, 0);
    InitializeEvent(0, 12601051, 0);
    InitializeEvent(0, 12600701, 0);
    InitializeEvent(0, 12600703, 0);
});

// Appearance Widow_Appearance_TR
$Event(12604700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineFlagChrSp &= IsOnline() && !EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(X20_4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(X20_4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
});

// Appearance Widow_Ring the bell_TR
$Event(12604710, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && !EventFlag(X12_4)
            && !EventFlag(X8_4)
            && EventFlag(X16_4)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// Appearance Widow_Stop the Bell_TR
$Event(12604720, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && EventFlag(X12_4)
            && (EventFlag(X8_4) || NumberOfClientsOfType(ClientType.Invader) >= 1 || !EventFlag(X16_4)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, OFF);
    RestartEvent();
});

// Appearance widow_disappearance_TR
$Event(12604730, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4) || EventFlag(X16_4));
    hp = HPRatio(X0_4) == 0;
    flag = EventFlag(X16_4);
    WaitFor(EventFlag(X4_4) && EventFlag(X24_4) && (hp || flag));
    SetEventFlag(X8_4, ON);
    if (!flag.Passed) {
        SetEventFlag(X20_4, ON);
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
});

// Appearing Widow_Same area determination_TR_Nightmare main area
$Event(12604740, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(2604000)
                || PlayerStandingOnHit(2604001)
                || PlayerStandingOnHit(2604002)
                || PlayerStandingOnHit(2604003)
                || PlayerStandingOnHit(2604004)
                || PlayerStandingOnHit(2604005)
                || PlayerStandingOnHit(2604006)
                || PlayerStandingOnHit(2604007)
                || PlayerStandingOnHit(2604008)
                || PlayerStandingOnHit(2604009)
                || PlayerStandingOnHit(2604010)
                || PlayerStandingOnHit(2604011)
                || PlayerStandingOnHit(2604012)
                || PlayerStandingOnHit(2604013)
                || PlayerStandingOnHit(2604014)
                || PlayerStandingOnHit(2604015)
                || PlayerStandingOnHit(2604016)
                || PlayerStandingOnHit(2604017)
                || PlayerStandingOnHit(2604018)
                || PlayerStandingOnHit(2604019)
                || PlayerStandingOnHit(2604020)
                || PlayerStandingOnHit(2604021)
                || PlayerStandingOnHit(2604022)
                || PlayerStandingOnHit(2604023)
                || PlayerStandingOnHit(2604024)
                || PlayerStandingOnHit(2604025)
                || PlayerStandingOnHit(2604026)));
    SetEventFlag(12604741, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(2604000)
                || PlayerStandingOnHit(2604001)
                || PlayerStandingOnHit(2604002)
                || PlayerStandingOnHit(2604003)
                || PlayerStandingOnHit(2604004)
                || PlayerStandingOnHit(2604005)
                || PlayerStandingOnHit(2604006)
                || PlayerStandingOnHit(2604007)
                || PlayerStandingOnHit(2604008)
                || PlayerStandingOnHit(2604009)
                || PlayerStandingOnHit(2604010)
                || PlayerStandingOnHit(2604011)
                || PlayerStandingOnHit(2604012)
                || PlayerStandingOnHit(2604013)
                || PlayerStandingOnHit(2604014)
                || PlayerStandingOnHit(2604015)
                || PlayerStandingOnHit(2604016)
                || PlayerStandingOnHit(2604017)
                || PlayerStandingOnHit(2604018)
                || PlayerStandingOnHit(2604019)
                || PlayerStandingOnHit(2604020)
                || PlayerStandingOnHit(2604021)
                || PlayerStandingOnHit(2604022)
                || PlayerStandingOnHit(2604023)
                || PlayerStandingOnHit(2604024)
                || PlayerStandingOnHit(2604025)
                || PlayerStandingOnHit(2604026)));
    SetEventFlag(12604741, OFF);
    RestartEvent();
});

// Widow Appearance_Same Area Judgment_TR_Death and Darkness Lesser Area
$Event(12604742, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(2604100)
                || PlayerStandingOnHit(2604101)
                || PlayerStandingOnHit(2604102)
                || PlayerStandingOnHit(2604103)
                || PlayerStandingOnHit(2604104)
                || PlayerStandingOnHit(2604105)
                || PlayerStandingOnHit(2604106)
                || PlayerStandingOnHit(2604107)
                || PlayerStandingOnHit(2604108)
                || PlayerStandingOnHit(2604109)
                || PlayerStandingOnHit(2604110)
                || PlayerStandingOnHit(2604111)
                || PlayerStandingOnHit(2604112)
                || PlayerStandingOnHit(2604113)
                || PlayerStandingOnHit(2604114)
                || PlayerStandingOnHit(2604115)
                || PlayerStandingOnHit(2604116)
                || PlayerStandingOnHit(2604117)
                || PlayerStandingOnHit(2604118)
                || PlayerStandingOnHit(2604119)));
    SetEventFlag(12604743, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(2604100)
                || PlayerStandingOnHit(2604101)
                || PlayerStandingOnHit(2604102)
                || PlayerStandingOnHit(2604103)
                || PlayerStandingOnHit(2604104)
                || PlayerStandingOnHit(2604105)
                || PlayerStandingOnHit(2604106)
                || PlayerStandingOnHit(2604107)
                || PlayerStandingOnHit(2604108)
                || PlayerStandingOnHit(2604109)
                || PlayerStandingOnHit(2604110)
                || PlayerStandingOnHit(2604111)
                || PlayerStandingOnHit(2604112)
                || PlayerStandingOnHit(2604113)
                || PlayerStandingOnHit(2604114)
                || PlayerStandingOnHit(2604115)
                || PlayerStandingOnHit(2604116)
                || PlayerStandingOnHit(2604117)
                || PlayerStandingOnHit(2604118)
                || PlayerStandingOnHit(2604119)));
    SetEventFlag(12604743, OFF);
    RestartEvent();
});

// Boss Defeat_Lesser Demon (Death and Darkness)
$Event(12601800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2603802, Disabled);
        SetMapSoundState(2603803, Disabled);
        ChangeCharacterEnableState(2600800, Disabled);
        ChangeCharacterEnableState(2600801, Disabled);
        ChangeCharacterEnableState(2600802, Disabled);
        DeactivateObject(2601800, Disabled);
        DeleteMapSFX(2603800, false);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2600802) <= 0);
    RequestCharacterAnimationReset(2600800, Interpolation.Uninterpolated);
    RequestCharacterAnimationReset(2600801, Interpolation.Uninterpolated);
    ForceCharacterDeath(2600800, false);
    ForceCharacterDeath(2600801, false);
    WaitFor(CharacterDead(2600800));
    SetEventFlag(12604808, ON);
    WaitFixedTimeSeconds(3);
    if (!EventFlag(wet_nurse_defeat+13)) {
        PlaySE(2602300, SoundType.aEnvironmentalSound, 260000004);
        WaitFixedTimeSeconds(18);
    }
    DisplayBanner(TextBannerType.StadiumDraw);
    DeactivateObject(2601800, Disabled);
    DeleteMapSFX(2603800, true);
    SetLockcamSlotNumber(26, 0, 0);
    ClearSpEffect(10000, 5630);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2600803);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 3);
        AwardAchievement(20);
        if (!EventFlag(wet_nurse_defeat+13)) {
            AwardItemLot(55100000);
        }
        else {
            if (EventFlag(wet_nurse_defeat+15)) {
                AwardItemLot(17030);
            }
            else if (EventFlag(wet_nurse_defeat+13)) {
                AwardItemLot(17020);
            }
        }
        SetEventFlag(2601, ON);
        SetEventFlag(9462, ON);
        EndTimeMeasurement(2600000);
        EndTimeMeasurement(2600001);
        EndTimeMeasurement(2600010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(wet_nurse_defeat+13)) {
            InitializeEvent(wet_nurse_offset, 7800, wet_nurse_lamp_id+1000, 826002);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE play_Lesser Demon (Death and Darkness)
$Event(12601801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    flag = EventFlag(12601800);
    WaitFor(flag || (!CharacterBackreadStatus(2600800) && HPRatio(2600802) <= 0));
    EndIf(flag.Passed);
    PlaySE(2602800, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_First battle_Lesser Demon (Death and Darkness)
$Event(12601802, Default, function() {
    EndIf(EventFlag(12601800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2600800, Disabled);
    ChangeCharacterEnableState(2600801, Disabled);
    SetObjectInvulnerability(2601856, Enabled);
    WaitFor((!EventFlag(12601800) && !ThisEvent() && CharacterType(10000, TargetType.Alive) && InArea(10000, 2602805)) || EventFlag(wet_nurse_defeat+13));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12604732, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    SetMapSoundState(2603100, Disabled);
    WaitFixedTimeFrames(1);
    if (!EventFlag(wet_nurse_defeat+13) || EventFlag(12100866)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(26000010, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(26000010, CutscenePlayMode.Unskippable, 10000);
        }
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetObjectInvulnerability(2601856, Disabled);
    ReproduceObjectDestruction(2601856, 1);
    SetEventFlag(12604800, ON);
    ChangeCharacterEnableState(2600800, Enabled);
    EndIf(EventFlag(9306));
    InitializeEvent(0, 9350, 3);
    SetEventFlag(9306, ON);
});

// Lesser Demon (Death and Darkness)_Countermeasures for guests entering at different times
$Event(12601803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12604800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetObjectInvulnerability(2601856, Disabled);
    ReproduceObjectDestruction(2601856, 1);
    ChangeCharacterEnableState(2600800, Enabled);
    SetEventFlag(12604800, ON);
    SetEventFlag(12601802, ON);
});

// Host enters boss room_Rematch_Lesser Demon (Death and Darkness)
$Event(12604845, Default, function() {
    EndIf(EventFlag(12601800));
    if (!EventFlag(12601802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2601800, Disabled);
            DeleteMapSFX(2603800, false);
        }
        WaitFor(!EventFlag(12601800) && EventFlag(12601802));
        DeactivateObject(2601800, Enabled);
        SpawnMapSFX(2603800);
    }
L0:
    ReproduceObjectDestruction(2601856, 1);
    flagChrAct = !EventFlag(12601800) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2600800, 2601800);
    flag = EventFlag(12601800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2602800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2602801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12604800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Lesser Demon (Death and Darkness)
$Event(12604846, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        !EventFlag(12601800)
            && EventFlag(12601802)
            && EventFlag(12604800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2600800, 2601800));
    RotateCharacter(10000, 2602800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2602801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12604801, ON);
    }
    RestartEvent();
});

// Ineffective against fog wall in other people's world_Lesser Demon (Death and Darkness)
$Event(12604847, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2601800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalidity per fog wall in other people's world 2_Lesser Demon (Death and Darkness)
$Event(12604848, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2601800, 4)
            && EntityInRadiusOfEntity(10000, 2601800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss begins to move_Lesser Demon (Death and Darkness)
$Event(12604802, Default, function() {
    EndIf(EventFlag(12601800));
    SetCharacterAIState(2600800, Disabled);
    SetCharacterAIState(2600801, Disabled);
    SetCharacterAIState(2600802, Disabled);
    SetCharacterHPBarDisplay(2600800, Disabled);
    SetCharacterHPBarDisplay(2600801, Disabled);
    SetCharacterHPBarDisplay(2600802, Disabled);
    SetCharacterGravity(2600802, Disabled);
    SetCharacterImmortality(2600800, Enabled);
    SetCharacterImmortality(2600801, Enabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12604800) || EventFlag(wet_nurse_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12604732)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2600800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2600801, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2600802, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12604732, ON);
    SetEventFlag(12604800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2600800, 7500, true);
    SetSpEffect(2600801, 7500, true);
    SetSpEffect(2600802, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600802);
    Goto(L4);
L3:
    SetSpEffect(2600800, 7501, true);
    SetSpEffect(2600801, 7501, true);
    SetSpEffect(2600802, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600802);
    Goto(L4);
L4:
    if (EventFlag(wet_nurse_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2600800, Enabled);
    SetCharacterAIState(2600801, Enabled);
    DisplayBossHealthBar(Enabled, 2600802, 0, 551000);
    CreateReferredDamagePair(2600800, 2600802);
    CreateReferredDamagePair(2600801, 2600802);
    CreatePlaylog(88);
    StartTimeMeasurement(2600010, 104, Enabled);
});

// Boss BGM ON_Lesser Demon (Death and Darkness)
$Event(12604803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    if (!ThisEvent()) {
        SetMapSoundState(2603802, Disabled);
        SetMapSoundState(2603803, Disabled);
        flagArea &= !EventFlag(12601800) && EventFlag(12604802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12604801);
        }
        flagArea &= InArea(10000, 2602801);
        WaitFor(flagArea);
        EnableBossMapSound(2603802, Enabled);
        SetEventFlag(12604815, ON);
        WaitFor(HPRatio(2600802) < 0.7);
    }
L0:
    flagArea2 &= !EventFlag(12601800) && EventFlag(12604802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12604801);
    }
    flagArea2 &= InArea(10000, 2602801);
    WaitFor(flagArea2);
    EnableBossMapSound(2603802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2603803, Enabled);
});

// Boss Camera_Lesser Demon (Death and Darkness)
$Event(12604804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    WaitFor(EventFlag(12604800) && !CharacterDead(2600803));
    SetLockcamSlotNumber(26, 0, 1);
});

// Boss BGM OFF_Lesser Demon (Death and Darkness)
$Event(12604805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601800));
    WaitFor(EventFlag(12604808));
    EnableBossMapSound(2603802, Disabled);
    EnableBossMapSound(2603803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss clone setup
$Event(12604806, Default, function() {
    ChangeCharacterEnableState(2600801, Disabled);
    SetCharacterGravity(2600801, Disabled);
    SetCharacterMaphits(2600801, true);
});

// Boss dark magic_play log output
$Event(12604807, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12604802) && !CharacterHasSpEffect(10000, 5630));
    CreatePlaylog(122);
    WaitFor(EventFlag(12604802) && CharacterHasSpEffect(10000, 5630));
    CreatePlaylog(156);
    RestartEvent();
});

// Boss dark magic management
$Event(12604810, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 5630) || EventFlag(wet_nurse_defeat+15));
    if (EventFlag(wet_nurse_defeat+15)) {
        SetSpEffect(10000, 5680, false);
        SetSpEffect(2600800, 5682, false);
    }
    else {
        SetSpEffect(2600800, 5631, false);
    }
    RequestCharacterAICommand(2600800, 100, 0);
    if (EventFlag(wet_nurse_defeat+15)) {
        EndEvent();
    }
    WaitFor(!CharacterHasSpEffect(10000, 5630));
    RequestCharacterAICommand(2600800, 110, 0);
    RestartEvent();
});

// The voice of the baby held by the boss
$Event(12604815, Default, function() {
    SetNetworkSyncState(Disabled);
    flag = ThisEvent();
    flag2 = EventFlag(12601800);
    hp = HPRatio(2600800) <= 0;
    WaitFor(flag || flag2 || hp);
    EndIf(flag2.Passed);
    EndIf(hp.Passed);
    PlaySE(2600800, SoundType.aEnvironmentalSound, 260000003);
    WaitRandomTimeSeconds(5, 10);
    RestartEvent();
});

// Boss random warp destination selection_XX
$Event(12604820, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RandomlySetEventFlagInRange(X4_4, X8_4, ON);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Boss random warp_XX
$Event(12604830, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(X4_4));
    if (!InArea(X0_4, X8_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X8_4, -1, 0);
    } else {
        ChangeCharacterEnableState(X0_4, Disabled);
        WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X12_4, -1, 0);
    }
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(X0_4, Enabled);
    RequestAnimationPlayback(X0_4, 7000, false, true);
    RestartEvent();
});

// Clone summon attack
$Event(12604840, Default, function() {
    WaitFor((EventFlag(12604803) && CharacterHasEventMessage(2600800, 20) && CharacterHasSpEffect(2600800, 5631)) || EventFlag(wet_nurse_defeat+15));
    WarpObjectToCharacter(2601857, 10000, 245);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(2600801, Enabled);
    RequestCharacterAnimationReset(2600801, Interpolation.Interpolated);
    BatchSetEventFlags(12604841, 12604844, OFF);
    RandomlySetEventFlagInRange(12604841, 12604844, ON);
    GotoIf(L0, EventFlag(12604841));
    GotoIf(L1, EventFlag(12604842));
    GotoIf(L2, EventFlag(12604843));
    GotoIf(L3, EventFlag(12604844));
L0:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 4);
    Goto(L4);
L1:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 104);
    Goto(L4);
L2:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 10);
    Goto(L4);
L3:
    IssueShortWarpRequest(2600801, TargetEntityType.Object, 2601857, 110);
L4:
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Character, 2600801, 220, 655105);
    RequestCharacterAIReplan(2600801);
    RequestCharacterAICommand(2600801, 100, 0);
    SetSpEffect(2600801, 5631, false);
    WaitFor(CharacterHasEventMessage(2600801, 20) || HasDamageType(2600801, 10000, DamageType.Unspecified));
    SpawnOneshotSFX(TargetEntityType.Character, 2600801, 220, 655105);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(2600801, Disabled);
    RestartEvent();
});

// Boss Defeat_Nightmare Lord
$Event(12601850, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2603852, Disabled);
        SetMapSoundState(2603853, Disabled);
        ChangeCharacterEnableState(2600850, Disabled);
        ForceCharacterDeath(2600850, false);
        DeactivateObject(2601850, Disabled);
        DeactivateObject(2601851, Disabled);
        DeactivateObject(2601859, Disabled);
        DeleteMapSFX(2603850, false);
        DeleteMapSFX(2603851, false);
        DeleteMapSFX(2603859, false);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2600850) == 0);
    SetEventFlag(12604858, ON);
    WaitFor(CharacterDead(2600850));
    SetEventFlag(12604857, ON);
    WaitFor(EventFlag(72600301));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2601850, Disabled);
    DeactivateObject(2601851, Disabled);
    DeactivateObject(2601859, Disabled);
    DeleteMapSFX(2603850, true);
    DeleteMapSFX(2603851, true);
    DeleteMapSFX(2603859, true);
    SetCharacterDefaultBackreadState(2600850, Disabled);
    SetNetworkUpdateRate(2600850, false, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2600850);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardAchievement(19);
        if (!EventFlag(micolash_defeat+13)) {
            AwardItemLot(21000);
        }
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 2);
        SetEventFlag(2600, ON);
        SetEventFlag(9461, ON);
        BatchSetEventFlags(1080, 1099, OFF);
        SetEventFlag(1082, ON);
        CreatePlaylog(40);
        EndTimeMeasurement(2601000);
        EndTimeMeasurement(2601001);
        EndTimeMeasurement(2601010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 190, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 190, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 190, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 190, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(micolash_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(micolash_offset, 7800, micolash_lamp_id+1000, 826000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE playback_Nightmare Lord
$Event(12601851, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    flag = EventFlag(12601800);
    WaitFor(flag || (!CharacterBackreadStatus(2600850) && HPRatio(2600850) <= 0));
    EndIf(flag.Passed);
    PlaySE(2602850, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_First battle_Nightmare Lord
$Event(12601852, Default, function() {
    EndIf(EventFlag(12601850));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2600850, Disabled);
    WaitFor(
        !EventFlag(12601850)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, 2600850, 32));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12604731, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!EventFlag(micolash_defeat+13) || EventFlag(12100866)) {
            PlayCutsceneToPlayer(26000060, CutscenePlayMode.Skippable, 10000);
        }
    } else {
L0:
        if (!EventFlag(micolash_defeat+13) || EventFlag(12100866)) {
            PlayCutsceneToPlayer(26000060, CutscenePlayMode.Unskippable, 10000);
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12604850, ON);
    ChangeCharacterEnableState(2600850, Enabled);
    DeactivateObject(2601850, Enabled);
    SpawnMapSFX(2603850);
    DeactivateObject(2601859, Enabled);
    SpawnMapSFX(2603859);
    EndIf(EventFlag(9342));
    InitializeEvent(0, 9350, 2);
    SetEventFlag(9342, ON);
});

// Nightmare Lord_Door control after defeating
$Event(12601853, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2601852, 2);
        SetObjactState(2601251, 2600000, Disabled);
        EndEvent();
    }
L0:
    SetObjactState(2601251, 2600000, Disabled);
    WaitFor(EventFlag(12601850));
    EndIf(!EventFlag(12604879));
    SetObjactState(2601251, 2600000, Enabled);
    WaitFor(ObjActEventFlag(12601261));
    ForceAnimationPlayback(2601852, 1, false, false, false);
});

// Lord of Nightmares_Cutscene after defeating
$Event(12601854, Default, function() {
    if (ThisEvent()) {
        if (!EventFlag(micolash_defeat+13)) {
            ReproduceObjectAnimation(2601250, 1);
            ReproduceObjectAnimation(2601852, 1);
        }
        EndEvent();
    }
L0:
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        EventFlag(12601850)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, 2602853) || InArea(10000, 2602854)));
    WaitFixedTimeSeconds(3);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (EventFlag(12604879)) {
        PlayCutsceneToPlayer(26000000, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        ReproduceObjectAnimation(2601250, 1);
        ForceAnimationPlayback(2601852, 2, false, false, false);
    } else {
L1:
        PlayCutsceneToPlayer(26000005, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        ReproduceObjectAnimation(2601250, 1);
    }
L2:
    SetEventFlag(9180, OFF);
});

// Lord of Nightmares_Measures for guests entering at different times
$Event(12601855, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12604850));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12604850, ON);
    ChangeCharacterEnableState(2600850, Enabled);
    DeactivateObject(2601850, Enabled);
    SpawnMapSFX(2603850);
    DeactivateObject(2601859, Enabled);
    SpawnMapSFX(2603859);
    SetEventFlag(12604850, ON);
    SetEventFlag(12601852, ON);
});

// Host enters boss room_Rematch_Nightmare Lord
$Event(12604860, Default, function() {
    EndIf(EventFlag(12601850));
    if (!EventFlag(12601852)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2601850, Disabled);
            DeleteMapSFX(2603850, false);
        }
        DeactivateObject(2601859, Disabled);
        DeleteMapSFX(2603859, false);
        WaitFor(!EventFlag(12601850) && EventFlag(12601852));
        DeactivateObject(2601850, Enabled);
        SpawnMapSFX(2603850);
        DeactivateObject(2601859, Enabled);
        SpawnMapSFX(2603859);
    }
L0:
    flagChrAct = !EventFlag(12601850) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2600850, 2601850);
    flag = EventFlag(12601850);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2602850, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2602851);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12604850, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Lord of Nightmare
$Event(12604861, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    WaitFor(
        !EventFlag(12601850)
            && EventFlag(12601852)
            && EventFlag(12604850)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2600850, 2601850));
    RotateCharacter(10000, 2602850, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2602851);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12604851, ON);
    }
    RestartEvent();
});

// Invalid around fog wall in other people's world_Lord of Nightmare
$Event(12604862, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2601850, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalidity per fog wall in other people's world 2_Nightmare Lord
$Event(12604863, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2601850, 4)
            && EntityInRadiusOfEntity(10000, 2601850, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// The boss begins to move_The Lord of Nightmare
$Event(12604852, Default, function() {
    EndIf(EventFlag(12601850));
    SetCharacterAIState(2600850, Disabled);
    SetCharacterHPBarDisplay(2600850, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12604850) || EventFlag(micolash_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12604731)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2600850, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12604731, ON);
    SetEventFlag(12604850, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2600850, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600850);
    Goto(L4);
L3:
    SetSpEffect(2600850, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2600850);
    Goto(L4);
L4:
    SetCharacterDefaultBackreadState(2600850, Enabled);
    SetNetworkUpdateRate(2600850, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(2600850, Enabled);
    DisplayBossHealthBar(Enabled, 2600850, 0, 899000);
    SetDistanceLimitForConversationStateProcessing(2600850, 100);
    RequestCharacterAICommand(2600850, 10, 0);
    CreatePlaylog(88);
    StartTimeMeasurement(2601010, 232, Enabled);
});

// Boss BGM ON_Lord of Nightmare
$Event(12604853, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    if (!ThisEvent()) {
        SetMapSoundState(2603852, Disabled);
        SetMapSoundState(2603853, Disabled);
        flagArea &= !EventFlag(12601850) && EventFlag(12604852);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12604851);
        }
        flagArea &= InArea(10000, 2602852);
        WaitFor(flagArea);
        EnableBossMapSound(2603852, Enabled);
        WaitFor(EventFlag(72600300));
    }
L0:
    flagArea2 &= !EventFlag(12601850) && EventFlag(12604852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12604851);
    }
    flagArea2 &= InArea(10000, 2602852);
    WaitFor(flagArea2);
    EnableBossMapSound(2603852, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2603853, Enabled);
});

// Boss Camera_Nightmare Lord
$Event(12604854, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604850) && CharacterDead(2600850));
    SetLockcamSlotNumber(26, 0, 1);
});

// Boss BGM OFF_Nightmare Lord
$Event(12604855, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604858));
    EnableBossMapSound(2603852, Disabled);
    EnableBossMapSound(2603853, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss retreat_Lord of Nightmare
$Event(12604856, Default, function() {
    EndIf(EventFlag(12601850));
    SetCharacterImmortality(2600850, Enabled);
    if (!ThisEvent()) {
        WaitFor(HPRatio(2600850) <= 0.5);
        DisplayBossHealthBar(Disabled, 2600850, 0, 899000);
        SetEventFlag(12604985, ON);
        WaitFor(EventFlag(12604986));
        DisplayBossHealthBar(Enabled, 2600850, 0, 899000);
        WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602062, -1, 2604810);
        RequestCharacterAnimationReset(2600850, Interpolation.Uninterpolated);
    }
L0:
    SetCharacterImmortality(2600850, Disabled);
    SetCharacterHome(2600850, 2602062);
    BatchSetEventFlags(12604949, 12604959, OFF);
    SetEventFlag(12604952, ON);
    RequestCharacterAIReplan(2600850);
    RequestCharacterAICommand(2600850, 10, 0);
    DeactivateObject(2601851, Disabled);
    DeleteMapSFX(2603851, true);
});

// Boss withdrawal_Fake death of the nightmare lord_Anime playback request
$Event(12604985, Default, function() {
    EndIf(EventFlag(12601850));
    EndIf(EventFlag(12604856));
    flag = EventFlag(12604986);
    WaitFor(flag || ThisEvent());
    EndIf(flag.Passed);
    EzstateInstructionRequest(2600850, 12, 1);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss withdrawal_Fake death of the nightmare lord_Rebirth request completed
$Event(12604986, Default, function() {
    EndIf(EventFlag(12601850));
    EndIf(ThisEvent());
    WaitFor(CharacterHasEventMessage(2600850, 50));
    SetEventState(12604985, 0, EventEndType.End);
    WaitFixedTimeSeconds(6);
    EndEvent();
});

// First half boss (NPC) event
$Event(12604870, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(12601850));
    flagArea = !EventFlag(12604946) && InArea(2600850, X0_4) && EntityInRadiusOfEntity(10000, 2600850, 9);
    flagArea2 = flagArea && InArea(10000, 2602050);
    flagArea3 = flagArea && InArea(10000, 2602051);
    flagArea4 = flagArea && InArea(10000, 2602052);
    flagArea5 = flagArea && EntityInRadiusOfEntity(10000, 2600850, 3);
    WaitFor(flagArea2 || flagArea3 || flagArea4 || flagArea5);
    GotoIf(L7, InArea(2600850, 2602043));
    BatchSetEventFlags(12604870, 12604873, OFF);
    RandomlySetEventFlagInRange(12604870, 12604873, ON);
    if (!EventFlag(12604870)) {
L7:
        GotoIf(L0, flagArea2.Passed);
        GotoIf(L1, flagArea3.Passed);
        GotoIf(L2, flagArea4.Passed);
        GotoIf(L3, flagArea5.Passed);
L0:
        GotoIf(L6, !InArea(2600850, 2602042));
        BatchSetEventFlags(12604870, 12604871, OFF);
        RandomlySetEventFlagInRange(12604870, 12604871, ON);
        if (!EventFlag(12604870)) {
L6:
            SetCharacterHome(2600850, X4_4);
            RequestCharacterAICommand(2600850, 10, 0);
            BatchSetEventFlags(12604940, 12604946, OFF);
            SetEventFlag(X20_4, ON);
            WaitFixedTimeSeconds(2);
            RestartEvent();
        }
L4:
        SetCharacterHome(2600850, X16_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(X24_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L1:
        SetCharacterHome(2600850, X8_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(X24_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L2:
        SetCharacterHome(2600850, X12_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(X28_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L3:
        BatchSetEventFlags(12604870, 12604871, OFF);
        RandomlySetEventFlagInRange(12604870, 12604871, ON);
        if (!EventFlag(12604870)) {
            SetCharacterHome(2600850, X8_4);
            RequestCharacterAICommand(2600850, 10, 0);
            BatchSetEventFlags(12604940, 12604946, OFF);
            SetEventFlag(X24_4, ON);
            WaitFixedTimeSeconds(2);
            RestartEvent();
        }
L5:
        SetCharacterHome(2600850, X12_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(X28_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L8:
    SetCharacterHome(2600850, 2602043);
    RequestCharacterAICommand(2600850, 10, 0);
    BatchSetEventFlags(12604940, 12604946, OFF);
    SetEventFlag(12604943, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// First half boss (NPC) event last
$Event(12604877, Default, function() {
    EndIf(EventFlag(12601850));
    flagHp = !EventFlag(12604856) && HPRatio(2600850) < 0.7 && !EventFlag(12604946);
    flagArea = !EventFlag(12604856) && InArea(2600850, 2602046) && EventFlag(12604946);
    WaitFor(flagHp || flagArea);
    if (!flagArea.Passed) {
        SetCharacterHome(2600850, 2602046);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604940, 12604946, OFF);
        SetEventFlag(12604946, ON);
        WaitFor(InArea(2600850, 2602046));
    }
L0:
    RequestCharacterAICommand(2600850, -1, 0);
});

// Second half boss (NPC) warp event
$Event(12604878, Default, function() {
    EndIf(EventFlag(12601850));
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(2600850, 2602064);
    chrArea2 = CharacterType(10000, TargetType.Alive) && InArea(2600850, 2602069);
    WaitFor(chrArea || chrArea2);
    SetCharacterMaphits(2600850, true);
    SetCharacterGravity(2600850, Disabled);
    SetCharacterInvincibility(2600850, Enabled);
    GotoIf(S0, chrArea.Passed);
    GotoIf(S1, chrArea2.Passed);
S0:
    SpawnOneshotSFX(TargetEntityType.Object, 2601853, 800, 926201);
    ForceAnimationPlayback(2600850, 103122, false, true, false);
    Goto(S2);
S1:
    SpawnOneshotSFX(TargetEntityType.Object, 2601854, 800, 926201);
    ForceAnimationPlayback(2600850, 103122, false, true, false);
S2:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602073, -1, 2604811);
    SetCharacterHome(2600850, 2602065);
    WaitFixedTimeFrames(5);
    SpawnOneshotSFX(TargetEntityType.Object, 2601855, 800, 926201);
    ForceAnimationPlayback(2600850, 103120, false, false, false);
    SetCharacterMaphits(2600850, false);
    SetCharacterGravity(2600850, Enabled);
    SetCharacterInvincibility(2600850, Disabled);
    RestartEvent();
});

// Final room moving target flag synchronization
$Event(12604956, Default, function() {
    WaitFor(ThisEvent());
    EndEvent();
});

// Escape to the final room completed_Nightmare Lord
$Event(12604879, Default, function() {
    if (!EventFlag(12601850)) {
        WaitFor(CharacterType(10000, TargetType.Alive) && InArea(2600850, 2602066));
        SetEventFlag(12604879, ON);
        ForceAnimationPlayback(2601852, 3, false, false, false);
        WaitFixedTimeSeconds(1);
        RequestCharacterAICommand(2600850, -1, 0);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 0));
    WaitFixedTimeSeconds(0);
});

// Second half boss (NPC) event
$Event(12604880, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(12601850));
    flagAreaDmg = (!EventFlag(12604956) && InArea(2600850, X0_4) && EntityInRadiusOfEntity(10000, 2600850, 9))
        || (!EventFlag(12604956)
            && InArea(2600850, X0_4)
            && InArea(2600850, 2602063)
            && HasDamageType(2600850, -1, DamageType.Unspecified));
    flagAreaDmg2 = flagAreaDmg && InArea(10000, X28_4);
    flagAreaDmg3 = flagAreaDmg && InArea(10000, 2602071);
    flagAreaDmg4 = flagAreaDmg && InArea(10000, 2602072);
    flagAreaDmg5 = flagAreaDmg && EntityInRadiusOfEntity(10000, 2600850, 3);
    WaitFor(flagAreaDmg2 || flagAreaDmg3 || flagAreaDmg4 || flagAreaDmg5);
    GotoIf(L9, 
        InArea(2600850, 2602059) || InArea(2600850, 2602063) || InArea(2600850, 2602068) || InArea(2600850, 2602065));
    BatchSetEventFlags(12604865, 12604868, OFF);
    RandomlySetEventFlagInRange(12604865, 12604868, ON);
    if (!EventFlag(12604865)) {
L9:
        GotoIf(L0, flagAreaDmg2.Passed);
        GotoIf(L1, flagAreaDmg3.Passed);
        GotoIf(L2, flagAreaDmg4.Passed);
        GotoIf(L3, flagAreaDmg5.Passed);
L0:
        SetCharacterHome(2600850, X4_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(X16_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L1:
        SetCharacterHome(2600850, X8_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(X20_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L2:
        SetCharacterHome(2600850, X12_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(X24_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
L3:
        BatchSetEventFlags(12604880, 12604881, OFF);
        RandomlySetEventFlagInRange(12604880, 12604881, ON);
        if (!EventFlag(12604880)) {
            SetCharacterHome(2600850, X8_4);
            RequestCharacterAICommand(2600850, 10, 0);
            BatchSetEventFlags(12604949, 12604959, OFF);
            SetEventFlag(X20_4, ON);
            WaitFixedTimeSeconds(2);
            RestartEvent();
        }
L4:
        SetCharacterHome(2600850, X12_4);
        RequestCharacterAICommand(2600850, 10, 0);
        BatchSetEventFlags(12604949, 12604959, OFF);
        SetEventFlag(X24_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L5:
    SetCharacterHome(2600850, 2602059);
    RequestCharacterAICommand(2600850, 10, 0);
    BatchSetEventFlags(12604949, 12604959, OFF);
    SetEventFlag(12604949, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// First half boss (NPC) event_damage warp
$Event(12604888, Default, function() {
    EndIf(EventFlag(12601850));
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && HasDamageType(2600850, -1, DamageType.Unspecified)
            && !EventFlag(12604946)
            && !EventFlag(12604856)
            && HPRatio(2600850) > 0.5);
    WaitFixedTimeFrames(15);
    RestartIf(EventFlag(12604946));
    ForceAnimationPlayback(2600850, 103120, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2600850, 200, 926210);
    GotoIf(L0, EventFlag(12604940));
    GotoIf(L1, EventFlag(12604941));
    GotoIf(L2, EventFlag(12604942));
    GotoIf(L3, EventFlag(12604943));
    GotoIf(L4, EventFlag(12604944));
    GotoIf(L5, EventFlag(12604945));
    RestartEvent();
L0:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602040, -1, 2604800);
    RestartEvent();
L1:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602041, -1, 2604800);
    RestartEvent();
L2:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602042, -1, 2604801);
    RestartEvent();
L3:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602043, -1, 2604801);
    RestartEvent();
L4:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602044, -1, 2604802);
    RestartEvent();
L5:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602045, -1, 2604802);
    RestartEvent();
});

// Second half boss (NPC) event_damage warp
$Event(12604889, Default, function() {
    EndIf(EventFlag(12601850));
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && HasDamageType(2600850, -1, DamageType.Unspecified)
            && !EventFlag(12604956)
            && EventFlag(12604856)
            && HPRatio(2600850) > 0);
    RestartIf(InArea(2600850, 2602063));
    WaitFixedTimeFrames(15);
    ForceAnimationPlayback(2600850, 103120, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2600850, 200, 926210);
    GotoIf(S0, EventFlag(12604949));
    GotoIf(S1, EventFlag(12604950));
    GotoIf(S2, EventFlag(12604951));
    GotoIf(S3, EventFlag(12604952));
    GotoIf(S4, EventFlag(12604953));
    GotoIf(S5, EventFlag(12604954));
    GotoIf(S6, EventFlag(12604955));
    GotoIf(S7, EventFlag(12604956));
    GotoIf(S8, EventFlag(12604957));
    GotoIf(S9, EventFlag(12604958));
    GotoIf(S10, EventFlag(12604959));
S0:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602059, -1, 2604810);
    RestartEvent();
S1:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602060, -1, 2604812);
    RestartEvent();
S2:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602061, -1, 2604812);
    RestartEvent();
S3:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602062, -1, 2604810);
    RestartEvent();
S4:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602063, -1, 2604810);
    RestartEvent();
S5:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602077, -1, 2604810);
    RestartEvent();
S6:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602065, -1, 2604811);
    RestartEvent();
S7:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602066, -1, 2604813);
    RestartEvent();
S8:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602067, -1, 2604811);
    RestartEvent();
S9:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602068, -1, 2604811);
    RestartEvent();
S10:
    WarpCharacterAndSetFloor(2600850, TargetEntityType.Area, 2602078, -1, 2604811);
    RestartEvent();
});

// Common boss (NPC) event_Manipulated skeleton initialization
$Event(12604890, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    SetCharacterImmortality(X0_4, Enabled);
    WaitFor(EventFlag(X8_4));
    SetSpEffect(X0_4, 5914, false);
    ForceAnimationPlayback(X0_4, 7002, false, false, false);
});

// Common boss (NPC) event_Manipulator control
$Event(12604910, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X4_4));
    EndIf(ThisEventSlot());
    SetCharacterGravity(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(10000, X0_4, 7);
    flag = EventFlag(X4_4);
    WaitFor(chrArea || flag);
    EndIf(flag.Passed);
    ClearSpEffect(X0_4, 5914);
    SetCharacterGravity(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
});

// Final room logic control_Nightmare Lord
$Event(12604930, Default, function() {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604879));
    SetCharacterAIState(2600850, Disabled);
    WaitFor(InArea(10000, 2602007) || HasDamageType(2600850, 10000, DamageType.Unspecified));
    SetCharacterAIState(2600850, Enabled);
});

// Nightmare Lord_Damage AI Reset_XX
$Event(12604931, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(X0_4) && HasDamageType(2600850, -1, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(X0_4) && HasDamageType(2600850, -1, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(X0_4) && HasDamageType(2600850, -1, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X4_4));
    RequestCharacterAICommand(2600850, -1, 0);
    RequestCharacterAIReplan(2600850);
});

// Lord of the Nightmare_Lust (first half)_XX
$Event(12604960, Default, function(X0_4) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604852) && !EventFlag(72600300));
    SetEventFlag(72600302, OFF);
    WaitFor(InArea(2600850, X0_4) && !EventFlag(72600302));
    WaitFor(ElapsedSeconds(20));
    RestartIf(!(InArea(2600850, X0_4) && !EntityInRadiusOfEntity(2600850, 10000, 15)));
    SetEventFlag(72600302, ON);
    RandomlySetEventFlagInRange(72600303, 72600305, ON);
    WaitFor(!EventFlag(72600302));
    BatchSetEventFlags(72600303, 72600305, OFF);
    RestartEvent();
});

// Lord of the Nightmare_Lust (second half)_XX
$Event(12604970, Default, function(X0_4) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604852) && EventFlag(72600300));
    SetEventFlag(72600302, OFF);
    WaitFor(InArea(2600850, X0_4) && !EventFlag(72600302));
    WaitFor(ElapsedSeconds(20));
    RestartIf(!(InArea(2600850, X0_4) && !EntityInRadiusOfEntity(2600850, 10000, 15)));
    SetEventFlag(72600302, ON);
    if (EventFlag(12604879)) {
        SetEventFlag(72600317, ON);
    } else {
L0:
        RandomlySetEventFlagInRange(72600303, 72600305, ON);
    }
L1:
    WaitFor(!EventFlag(72600302));
    BatchSetEventFlags(72600303, 72600305, OFF);
    SetEventFlag(72600317, OFF);
    RestartEvent();
});

// Lord of Nightmares_Space Magic Lines
$Event(12604980, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(12601850));
    WaitFor(EventFlag(12604852));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    WaitFor(CharacterHasEventMessage(2600850, X0_4) && !EventFlag(X24_4));
    RandomlySetEventFlagInRange(X12_4, X16_4, ON);
    RestartIf(!EventFlag(X20_4));
    SetEventFlag(X24_4, ON);
    WaitFor(!EventFlag(X24_4));
    RestartEvent();
});

// Crazy evil spirit appears with SAN value_Trap Road_XX
$Event(12604000, Restart, function(X0_4, X4_1, X8_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(
        PlayerInsightAmount() >= X4_1
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 6200, false, true, false);
});

// Destroy crazy evil spirits with SAN value_Trap Road_XX
$Event(12604005, Restart, function(X0_4, X4_1, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X8_4) && PlayerInsightAmount() <= X4_1);
    }
L0:
    ForceCharacterDeath(X0_4, false);
});

// No respawn_XX_Traplord
$Event(12600500, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(X0_4);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    EndEvent();
});

// evil eye_control
$Event(12600020, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterGravity(X4_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterInvincibility(X4_4, Enabled);
    SetCharacterDefaultBackreadState(X0_4, Enabled);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    }
    SetCharacterAnimationState(X0_4, Disabled);
    DeleteMapSFX(2603000, false);
});

// Evil eye_bullet character position control
$Event(12600021, Restart, function() {
    WaitFor(InArea(10000, 2602017));
    IssueShortWarpRequest(2600100, TargetEntityType.Area, 2602019, -1);
    WaitFor(!AllPlayersInArea(2602017));
    IssueShortWarpRequest(2600100, TargetEntityType.Area, 2602018, -1);
    RestartEvent();
});

// Evil eye_effect body 1
$Event(12600130, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    if (!CharacterHasSpEffect(X0_4, 4691)) {
        WaitFor(CharacterHasSpEffect(X0_4, 4690));
        WaitFixedTimeSeconds(2);
        sp = CharacterHasSpEffect(X0_4, 4690);
        sp2 = !CharacterHasSpEffect(X0_4, 4690);
        WaitFor(sp || sp2);
        RestartIf(sp2.Passed);
    }
L0:
    SetSpEffectAndUnknown200455(X0_4, 4691, false);
    RestartEvent();
});

// Evil eye_effect body 2
$Event(12600150, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterHasSpEffect(X0_4, 4690) && CharacterHasSpEffect(X0_4, 4691));
    ClearSpEffect(X0_4, 4691);
    RestartEvent();
});

// Evil eye_light source control
$Event(12600025, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (CharacterAIState(2600100, AIStateType.Recognition)
                || CharacterAIState(2600100, AIStateType.Alert)
                || CharacterAIState(2600100, AIStateType.Combat)));
    SpawnMapSFX(2603000);
    WaitFor(CharacterType(10000, TargetType.Alive) && CharacterAIState(2600100, AIStateType.Normal));
    DeleteMapSFX(2603000, true);
    RestartEvent();
});

// Evil eye_stop function
$Event(12600026, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(ActionButtonInArea(7100, 2601271));
        DeleteMapSFX(2603050, false);
        DeleteMapSFX(2603051, false);
        DeleteMapSFX(2603052, false);
        DeleteMapSFX(2603053, false);
        DeleteMapSFX(2603054, false);
        DeleteMapSFX(2603055, false);
        DeleteMapSFX(2603056, false);
        DeleteMapSFX(2603057, false);
        DeleteMapSFX(2603058, false);
        DeleteMapSFX(2603059, false);
        DeleteMapSFX(2603060, false);
        DeleteMapSFX(2603061, false);
        DeleteMapSFX(2603062, false);
        DeleteMapSFX(2603063, false);
        DeleteMapSFX(2603064, false);
        DeleteMapSFX(2603065, false);
        DeleteMapSFX(2603066, false);
        DeleteMapSFX(2603067, false);
        DeleteMapSFX(2603068, false);
        SetEventFlag(9180, ON);
        WaitFixedTimeFrames(1);
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(26000040, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(26000040, CutscenePlayMode.Unskippable, 10000);
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SpawnMapSFX(2603050);
        SpawnMapSFX(2603051);
        SpawnMapSFX(2603052);
        SpawnMapSFX(2603053);
        SpawnMapSFX(2603054);
        SpawnMapSFX(2603055);
        SpawnMapSFX(2603056);
        SpawnMapSFX(2603057);
        SpawnMapSFX(2603058);
        SpawnMapSFX(2603059);
        SpawnMapSFX(2603060);
        SpawnMapSFX(2603061);
        SpawnMapSFX(2603062);
        SpawnMapSFX(2603063);
        SpawnMapSFX(2603064);
        SpawnMapSFX(2603065);
        SpawnMapSFX(2603066);
        SpawnMapSFX(2603067);
        SpawnMapSFX(2603068);
    }
L0:
    SetObjactState(2601271, 2600000, Disabled);
    SetCharacterAIState(2600100, Disabled);
    SetCharacterAIState(2600101, Disabled);
    ChangeCharacterEnableState(2600100, Disabled);
    ChangeCharacterEnableState(2600101, Disabled);
    DeleteMapSFX(2603000, true);
});

// Evil eye_appears at the falling position
$Event(12600027, Restart, function() {
    ChangeCharacterEnableState(2600129, Disabled);
    if (ThisEvent()) {
        ChangeCharacterEnableState(2600129, Enabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12600026));
    ChangeCharacterEnableState(2600129, Enabled);
});

// Get body gem with evil eye communication gesture
$Event(12600028, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(12600027) && InArea(10000, 2602022) && CharacterHasSpEffect(10000, 164));
    if (!EventFlag(6336)) {
        AwardItemLot(2605000);
        EndEvent();
    }
L0:
    AwardItemLot(2605005);
    EndEvent();
});

// Obtain ritual materials by killing evil eye
$Event(12600029, Restart, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(12600027) && HPRatio(2600129) == 0 && HasDamageType(2600129, 10000, DamageType.Unspecified));
    AwardItemLot(2605010);
    SetEventFlag(5913, ON);
    WaitFixedTimeFrames(0);
});

// Baby's voice_XX
$Event(12600010, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(12601802));
    WaitFor(HasMultiplayerState(MultiplayerState.Host) && InArea(10000, X0_4));
    if (X8_4 != 1) {
        PlaySE(2602300, SoundType.aEnvironmentalSound, X4_4);
        EndEvent();
    }
L0:
    SetMapSoundState(X4_4, Enabled);
    EndEvent();
});

// bride_control
$Event(12600030, Default, function() {
    SetCharacterTeamType(2600500, TeamType.FriendlyNPC);
    if (ThisEvent()) {
        SetCharacterBackreadState(2600500, true);
        EndEvent();
    }
L0:
    if (!EventFlag(12601800)) {
        ForceAnimationPlayback(2600500, 7005, false, false, false);
        WaitFor(EventFlag(12601800));
    }
L1:
    ForceAnimationPlayback(2600500, 0, false, false, false);
    WaitFor(EntityInRadiusOfEntity(2600500, 10000, 10) && HPRatio(2600500) > 0);
    SetCharacterInvincibility(2600500, Enabled);
    ForceAnimationPlayback(2600500, 7006, false, false, false);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2600500, Disabled);
});

// Bride_One hit death
$Event(12600031, Default, function() {
    if (ThisEvent()) {
        SetCharacterBackreadState(2600500, true);
        EndEvent();
    }
L0:
    SetSpEffect(2600500, 5915, false);
    WaitFor(HasDamageType(2600500, -1, DamageType.Unspecified));
    ForceCharacterDeath(2600500, false);
});

// Special standby_Cancel when hostile
$Event(12600035, Default, function(X0_4) {
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    chr = CharacterTargetedBy(X0_4, 10000)
        || CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    dmg = CharacterDamagedBy(X0_4, 10000);
    WaitFor(chr || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
});

// First appearance of Prisoner A
$Event(12600040, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterAIState(X4_4, Disabled);
    WaitFor(InArea(X12_4, X0_4) || InArea(X12_4, X16_4));
    SetCharacterAIState(X4_4, Enabled);
    SetCharacterHome(X4_4, X8_4);
    RequestCharacterAICommand(X4_4, 20, 0);
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified) || HPRatio(X4_4) < 1 || InArea(X4_4, X8_4));
    RequestCharacterAICommand(X4_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
});

// Prisoner A non-combat principle
$Event(12600041, Default, function(X0_4) {
    SetSpEffect(X0_4, 5641, false);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ClearSpEffect(X0_4, 5641);
    RequestCharacterAIReplan(X0_4);
});

// Prisoner A Surprise Attack Man
$Event(12600047, Default, function(X0_4) {
    RequestCharacterAICommand(X0_4, 40, 0);
    WaitFor(CharacterAIState(2600202, AIStateType.Combat));
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAICommand(X0_4, 10, 0);
    SetCharacterHome(X0_4, 2602005);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAICommand(X0_4, -1, 0);
});

// Prisoner A_Toilet Man
$Event(12600180, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetSpEffect(X0_4, 5001, false);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    WaitFixedTimeSeconds(60);
    WarpObjectToCharacter(2601040, X0_4, -1);
    CreateObjectfollowingSFX(2601040, 200, 900201);
    act = ActionButtonInArea(2600030, 2601040);
    cond = ElapsedSeconds(15);
    WaitFor(act || cond);
    DeleteObjectfollowingSFX(2601040, true);
    RestartIf(cond.Passed);
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(X4_4);
    RestartEvent();
});

// Special standby for the followers of death and darkness
$Event(12600050, Default, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    WaitFor(InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000));
    WaitRandomTimeFrames(10, 60);
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    SetCharacterAIState(X0_4, Enabled);
});

// Cancel special standby when hostile
$Event(12600060, Default, function(X0_4, X4_4, X8_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
});

// Carcass bird falls from cage
$Event(12600070, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, X8_4));
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, 20, 0);
    WaitFor(InArea(X0_4, X4_4));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Abandoned Giant Special Standby
$Event(12600080, Default, function(X0_4, X4_4, X8_4, X12_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) || EntityInRadiusOfEntity(X0_4, 10000, 5));
    BatchSetEventFlags(12600080, 12600081, OFF);
    RandomlySetEventFlagInRange(12600080, 12600081, ON);
    GotoIf(S0, EventFlag(12600080));
    GotoIf(S1, EventFlag(12600081));
S0:
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    EndEvent();
S1:
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    EndEvent();
});

// Logic activation_area determination
$Event(12600090, Default, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4) || HasDamageType(X0_4, -1, DamageType.Unspecified));
    SetCharacterAIState(X0_4, Enabled);
});

// Mad dog's special standby_link cancellation
$Event(12600105, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(
        CharacterAIState(X12_4, AIStateType.Combat)
            || CharacterAIState(X16_4, AIStateType.Combat)
            || CharacterAIState(X20_4, AIStateType.Combat)
            || dmg);
    if (!dmg.Passed) {
        WaitFor(HasDamageType(X0_4, -1, DamageType.Unspecified) || ElapsedSeconds(10));
    }
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
});

// Parasites occur when a kin of the silver beast dies_XX
$Event(12600110, Restart, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    WaitFixedTimeFrames(5);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 30, X0_4);
    ChangeCharacterEnableState(X4_4, Enabled);
    ForceAnimationPlayback(X4_4, 7000, false, false, false);
    WaitFixedTimeFrames(15);
    WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Character, X0_4, 30, X0_4);
    ChangeCharacterEnableState(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 7000, false, false, false);
});

// Treasure Chest_XX
$Event(12600120, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, -1, Disabled);
        SetObjectTreasureState(X4_4, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X4_4, Enabled);
});

// Treasure_XX
$Event(12600125, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(X0_4, 200, 900201);
    WaitFor(ActionButtonInArea(2600030, X0_4));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(X4_4);
    DeleteObjectfollowingSFX(X0_4, true);
});

// Logic activation_distance judgment
$Event(12600190, Restart, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    areaDmg |= EntityInRadiusOfEntity(X0_4, 10000, 30);
    if (X4_4 != 0) {
        areaDmg |= EntityInRadiusOfEntity(X4_4, 10000, 30);
    }
    areaDmg |= HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(areaDmg);
    SetCharacterAIState(X0_4, Enabled);
});

// Wandering Madness_TR_XX
$Event(12600400, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(X4_4);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// Wandering madness_Escape direction specification
$Event(12600410, Restart, function() {
    EndIf(EventFlag(12600403));
    WaitFor(
        CharacterAIState(2600403, AIStateType.Recognition)
            || CharacterAIState(2600403, AIStateType.Alert)
            || CharacterAIState(2600403, AIStateType.Combat));
    SetCharacterHome(2600403, 2602029);
    RequestCharacterAICommand(2600403, 10, 0);
    WaitFor(InArea(2600403, 2602029));
    RequestCharacterAICommand(2600403, -1, 0);
});

// Lord of Nightmare_Second half
$Event(12600701, Restart, function() {
    WaitFor(EventFlag(1080) && EventFlag(72600300));
    BatchSetEventFlags(1080, 1099, OFF);
    SetEventFlag(1081, ON);
});

// Nightmare Lord_Initialization
$Event(12600703, Restart, function() {
    WaitFor(!EventFlag(1082));
    BatchSetEventFlags(1080, 1099, OFF);
    SetEventFlag(1080, ON);
    SetEventFlag(72600300, OFF);
    BatchSetEventFlags(72600300, 72600319, OFF);
});

// Common_elevator_pseudo-started flag
$Event(12601294, Default, function() {
    WaitFixedTimeFrames(0);
});

// Common_Elevator lever_Unoperable msg_XX
$Event(12601295, Default, function(X0_4, X4_4, X8_4, X12_4, X16_1) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(X4_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X8_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlagState(X16_1, TargetEventFlagType.EventFlag, X12_4) && ActionButtonInArea(7100, X0_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Common elevator_initialization_XX
// InitializeEvent(3, 12601310, 12601254, 2601280, 2601281, 2601282, 12601334);
$Event(12601310, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!EventFlag(X0_4)) {
        ReproduceObjectAnimation(X4_4, 4);
        WaitFixedTimeSeconds(1);
        SetObjactState(X8_4, 2600000, Disabled);
        SetObjactState(X12_4, 2600000, Enabled);
        EndIf(EventFlag(X16_4));
        SetObjactState(X12_4, 2600000, Disabled);
        EndEvent();
    }
    ReproduceObjectAnimation(X4_4, 0);
    WaitFixedTimeSeconds(1);
    SetObjactState(X8_4, 2600000, Enabled);
    SetObjactState(X12_4, 2600000, Disabled);
});

// 1st SC elevator_initialization
// InitializeEvent(0, 12601315, 12601256, 2601240, 2601241, 2601242, 12601323);
$Event(12601315, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!EventFlag(X0_4)) {
        ReproduceObjectAnimation(X4_4, 4);
        WaitFixedTimeSeconds(1);
        SetObjactState(X8_4, 2600000, Enabled);
        SetObjactState(X12_4, 2600000, Disabled);
        EndIf(EventFlag(X16_4));
        SetObjactState(X8_4, 2600000, Disabled);
        EndEvent();
    }
    ReproduceObjectAnimation(X4_4, 0);
    WaitFixedTimeSeconds(1);
    SetObjactState(X8_4, 2600000, Disabled);
    SetObjactState(X12_4, 2600000, Enabled);
});

// Common elevator_ascent_XX
// InitializeEvent(5, 12601320, 12605254, 12601255, 2602291, 2602292, 2601291, 2601292, 2601290, 12601291);
$Event(12601320, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4))
            || (!EventFlag(X0_4) && !EventFlag(X4_4) && ObjActEventFlag(X28_4)));
    SetEventFlag(X0_4, ON);
    SetObjactState(X20_4, 2600000, Disabled);
    ForceAnimationPlayback(X24_4, 5, false, true, false);
    ForceAnimationPlayback(X24_4, 6, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    ForceAnimationPlayback(X24_4, 7, false, true, false);
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, ON);
    SetObjactState(X16_4, 2600000, Enabled);
    RestartEvent();
});

// Common elevator_descending_XX
// InitializeEvent(3, 12601330, 12605256, 12601256, 2602252, 2602251, 2601242, 2601241, 2601240, 12601241);
$Event(12601330, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X0_4) && EventFlag(X4_4) && InArea(10000, X12_4))
            || (!EventFlag(X0_4) && EventFlag(X4_4) && ObjActEventFlag(X28_4)));
    SetEventFlag(X0_4, ON);
    SetObjactState(X16_4, 2600000, Disabled);
    ForceAnimationPlayback(X24_4, 1, false, true, false);
    ForceAnimationPlayback(X24_4, 2, false, true, false);
    WaitFor(!AllPlayersInArea(X8_4));
    ForceAnimationPlayback(X24_4, 3, false, true, false);
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetObjactState(X20_4, 2600000, Enabled);
    RestartEvent();
});

// Rooftop elevator_Initial state reversal_XX
$Event(12601340, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(2);
    SetObjactState(X8_4, 2600000, Disabled);
});

// Library elevator_initialization
$Event(12601351, Default, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X0_4)) {
        ReproduceObjectAnimation(X4_4, 0);
        ReproduceObjectAnimation(X8_4, 1);
        WaitFor(EventFlag(X0_4));
    }
    if (EventFlag(12601253)) {
        ReproduceObjectAnimation(X4_4, 2);
        ReproduceObjectAnimation(X8_4, 4);
        EndEvent();
    }
    ReproduceObjectAnimation(X4_4, 4);
    ReproduceObjectAnimation(X8_4, 2);
    EndEvent();
});

// Library elevator_operation
$Event(12601352, Default, function() {
    WaitFor(EventFlag(12601351));
    if (!EventFlag(12601253)) {
        WaitFor((InArea(10000, 2602241) || InArea(10000, 2602244)) && !EventFlag(12601253));
        ForceAnimationPlayback(2601261, 6, false, false, false);
        ForceAnimationPlayback(2601260, 8, false, true, false);
        ForceAnimationPlayback(2601261, 3, false, false, false);
        ForceAnimationPlayback(2601260, 5, false, true, false);
    } else {
L0:
        WaitFor((InArea(10000, 2602242) || InArea(10000, 2602243)) && EventFlag(12601253));
        ForceAnimationPlayback(2601261, 8, false, false, false);
        ForceAnimationPlayback(2601260, 6, false, true, false);
        ForceAnimationPlayback(2601261, 5, false, false, false);
        ForceAnimationPlayback(2601260, 3, false, true, false);
    }
L1:
    WaitFor(!InArea(10000, 2602241) && !InArea(10000, 2602242) && !InArea(10000, 2602243) && !InArea(10000, 2602244));
    if (!EventFlag(12601253)) {
        ForceAnimationPlayback(2601261, 9, false, false, false);
        ForceAnimationPlayback(2601260, 7, false, true, false);
        SetEventFlag(12601253, ON);
        RestartEvent();
    }
L2:
    ForceAnimationPlayback(2601261, 7, false, false, false);
    ForceAnimationPlayback(2601260, 9, false, true, false);
    SetEventFlag(12601253, OFF);
    RestartEvent();
});

// Hotzuki_Bullet dummy character connection_XX
$Event(12605200, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 100, X0_4);
    RestartEvent();
});

// Map first entry_play log
$Event(12600990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2604000));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 268, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 268, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 268, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 268, PlayLogMultiplayerType.HostOnly);
    InitializeEvent(0, 9350, 3);
});

// Open chapel door
$Event(12601050, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2601050, 1);
        SetObjactState(2601050, 2600010, Disabled);
        NotifySoundDampeningOfDoorEvent(2601050, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12600200));
    WaitFixedTimeSeconds(0);
});

// Open the evil eye bridge door
$Event(12601051, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2601051, 0);
        SetObjactState(2601051, 2600020, Disabled);
        SetObjactState(2601051, 2600021, Disabled);
        NotifySoundDampeningOfDoorEvent(2601051, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12600201) || ObjActEventFlag(12600202));
    SetObjactState(2601051, 2600020, Disabled);
    SetObjactState(2601051, 2600021, Disabled);
    WaitFixedTimeSeconds(0);
});

// Warp Chair_Warp Anime Play_XX
$Event(12607010, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X4_4, 200);
    ForceAnimationPlayback(10000, 101160, false, false, true);
    WaitFixedTimeSeconds(4);
    SetEventFlag(X0_4, OFF);
});

// Warp Chair_Warp_XX
$Event(12607020, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    WarpPlayerToRespawnPoint(X4_4);
    SetEventFlag(X8_4, ON);
});

// Warp chair_warp post-processing
$Event(12607040, Default, function() {
    if (!AnyBatchEventFlags(9001, 9010)) {
        EndEvent();
    }
    SetEventFlag(9210, ON);
    WaitFor(!EventFlag(9210));
    if (EventFlag(9001)) {
        SetEventFlag(12607810, ON);
        SetEventFlag(12607811, ON);
    }
    if (EventFlag(9002)) {
        SetEventFlag(12607830, ON);
        SetEventFlag(12607831, ON);
    }
    if (EventFlag(9003)) {
        SetEventFlag(12607850, ON);
        SetEventFlag(12607851, ON);
    }
    if (EventFlag(9004)) {
        SetEventFlag(12607870, ON);
        SetEventFlag(12607871, ON);
    }
    if (EventFlag(9005)) {
        SetEventFlag(12607890, ON);
        SetEventFlag(12607891, ON);
    }
    if (EventFlag(9006)) {
        SetEventFlag(12607910, ON);
        SetEventFlag(12607911, ON);
    }
    if (EventFlag(9007)) {
        SetEventFlag(12607930, ON);
        SetEventFlag(12607931, ON);
    }
    if (EventFlag(9008)) {
        SetEventFlag(12607950, ON);
        SetEventFlag(12607951, ON);
    }
    if (EventFlag(9009)) {
        SetEventFlag(12607970, ON);
        SetEventFlag(12607971, ON);
    }
    if (EventFlag(9010)) {
        SetEventFlag(12607990, ON);
        SetEventFlag(12607991, ON);
    }
    BatchSetEventFlags(9000, 9010, OFF);
});

// Warp chair_first startup effect_XX
$Event(12607050, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetCharacterGravity(X4_4, Disabled);
    WaitFor(CharacterBackreadStatus(X4_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 250);
    ForceAnimationPlayback(X4_4, 101165, true, false, false);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 250);
    WaitFor(EventFlag(X0_4));
    ForceAnimationPlayback(X4_4, 101166, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});
