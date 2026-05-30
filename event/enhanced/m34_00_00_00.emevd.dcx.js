// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ボス_撃破\u0000PC情報_ボス撃破_ルドウイーク\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_ボス撃破_教区長Ω\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000"
// @linked    [110]
// @version    3.6.3
// ==/EMEVD==

const area_id = 34;
const block_id = 0;

const nightmare_lamp_offset = 55;
const nightmare_lamp_id = 3401950;
const nightmare_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const church_lamp_offset = 56;
const church_lamp_id = 3401951;
const church_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;

const ludwig_lamp_offset = 57;
const ludwig_offset = 17;
const ludwig_defeat = 13401800;
const ludwig_return = 3401899;
const ludwig_lamp_id = 3401952;
const ludwig_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;
const ludwig_region = 3402802;
const ludwig_id1 = 3400800;
const ludwig_id2 = 3400801;

const laurence_lamp_offset = 58;
const laurence_offset = 18;
const laurence_defeat = 13401850;
const laurence_return = 3401859;
const laurence_lamp_id = 3401953;
const laurence_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 6;
const laurence_region = 3402852;
const laurence_id = 3400850;

// door at start
// gate near start

// constructor
$Event(0, Default, function() {
    // coins
    const coinsBaseFlag = 240;
    const coinsBaseId = (area_id * 100000) + (block_id * 10000) + 8500;
    const laurenceIndex = 5;
    const ludwigIndex = 99;
    const miniBsbIndex = 6;
    for (let i = 0; i < 20; i++) {
        if (i == laurenceIndex) {
            $InitializeEvent(coinsBaseFlag+i, 10003000, coinsBaseId+i, laurence_defeat, 0);
        }
        else if (i == ludwigIndex) {
            $InitializeEvent(coinsBaseFlag+i, 10003000, coinsBaseId+i, ludwig_defeat, 0);
        }
        else if (i == miniBsbIndex) {
            $InitializeEvent(coinsBaseFlag+i, 10003000, coinsBaseId+i, 13400330, 0);
        }
        else {
            $InitializeEvent(coinsBaseFlag+i, 10003000, coinsBaseId+i, 10000999, 0);
        }
    }
    
    // ghosts
    const ghostsBaseFlag = 240;
    const ghostsBaseId = (area_id * 100000) + (block_id * 10000) + 8600;
    for (let i = 0; i < 10; i++) {
        $InitializeEvent(ghostsBaseFlag+i, 10003500, ghostsBaseId+i);
    }
    
    SetEventFlag(13401210, ON);
    SetEventFlag(10008900+ludwig_offset, OFF);
    SetEventFlag(10008900+laurence_offset, OFF);
    
    $InitializeEvent(1, 10007900, 10000000+ludwig_return, ludwig_return, area_id, block_id);
    $InitializeEvent(2, 10007900, 10000000+laurence_return, laurence_return, area_id, block_id);
    
    $InitializeEvent(nightmare_lamp_offset, 10008500, nightmare_lamp_id, 72113434);
    $InitializeEvent(church_lamp_offset, 10008500, church_lamp_id, 72113535);
    $InitializeEvent(ludwig_lamp_offset, 10008500, ludwig_lamp_id, 72113737);
    $InitializeEvent(laurence_lamp_offset, 10008500, laurence_lamp_id, 72113636);
    
    $InitializeEvent(nightmare_lamp_offset, 10008100, 10008100+nightmare_lamp_offset, nightmare_lamp_kindle);
    $InitializeEvent(church_lamp_offset, 10008100, 10008100+church_lamp_offset, church_lamp_kindle);
    $InitializeEvent(ludwig_lamp_offset, 10008100, 10008100+ludwig_lamp_offset, ludwig_lamp_kindle);
    $InitializeEvent(laurence_lamp_offset, 10008100, 10008100+laurence_lamp_offset, laurence_lamp_kindle);
    
    $InitializeEvent(nightmare_lamp_offset, 10008300, nightmare_lamp_id+2000, -1, nightmare_lamp_kindle, nightmare_lamp_id+6000, nightmare_lamp_id+3000);
    $InitializeEvent(church_lamp_offset, 10008300, church_lamp_id+2000, -1, church_lamp_kindle, church_lamp_id+6000, church_lamp_id+3000);
    
    SetEventFlag(10007799, OFF);
    SetEventFlag(ludwig_defeat+15, OFF);
    if (EventFlag(ludwig_defeat+14)) {
        SetEventFlag(10007799, ON);
        SetEventFlag(ludwig_defeat+14, OFF);
        SetEventFlag(ludwig_defeat+15, ON);
    }
    
    if (EventFlag(ludwig_defeat+13) && !EventFlag(ludwig_defeat-1)) {
        SetEventFlag(ludwig_defeat+13, OFF);
        SetEventFlag(9471, ON);
        SetEventFlag(ludwig_defeat, ON);
        if (EventFlag(12111120)) {
            SetEventFlag(12111120, OFF);
            $InitializeEvent(ludwig_lamp_offset, 10008300, ludwig_lamp_id+2000, -1, ludwig_lamp_kindle, ludwig_lamp_id+6000, ludwig_lamp_id+3000);
        }
        else {
            $InitializeEvent(ludwig_lamp_offset, 10008300, ludwig_lamp_id+2000, 10000999, ludwig_lamp_kindle, ludwig_lamp_id+6000, ludwig_lamp_id+3000);
            DummyPlayCutsceneAndWarpPlayer(ludwig_lamp_id+4000, area_id, block_id);
        }
    } else if (EventFlag(ludwig_defeat+12) || EventFlag(ludwig_defeat-1)) {
        SetEventFlag(9471, OFF);
        SetEventFlag(ludwig_defeat, OFF);
        SetEventFlag(ludwig_defeat+1, OFF);
        SetEventFlag(ludwig_defeat+3011, OFF);
        SetEventFlag(ludwig_defeat+12, OFF);
        SetEventFlag(ludwig_defeat+13, ON);
        SetEventFlag(ludwig_defeat-1, OFF);
        SetEventFlag(10008900+ludwig_offset, ON);
        SetCharacterBackreadState(3400900, true);
        ChangeCharacterEnableState(3400900, Disabled);
        $InitializeEvent(ludwig_lamp_offset, 10008300, ludwig_lamp_id+2000, -1, ludwig_lamp_kindle, ludwig_lamp_id+6000, ludwig_lamp_id+3000);
    } else {
        $InitializeEvent(ludwig_lamp_offset, 10008300, ludwig_lamp_id+2000, -1, ludwig_lamp_kindle, ludwig_lamp_id+6000, ludwig_lamp_id+3000);
    }
    
    if (EventFlag(laurence_defeat+13) && !EventFlag(laurence_defeat-1)) {
        SetEventFlag(laurence_defeat+13, OFF);
        SetEventFlag(laurence_defeat, ON);
        if (EventFlag(12111120)) {
            SetEventFlag(12111120, OFF);
            $InitializeEvent(laurence_lamp_offset, 10008300, laurence_lamp_id+2000, -1, laurence_lamp_kindle, laurence_lamp_id+6000, laurence_lamp_id+3000);
        }
        else {
            $InitializeEvent(laurence_lamp_offset, 10008300, laurence_lamp_id+2000, 10000999, laurence_lamp_kindle, laurence_lamp_id+6000, laurence_lamp_id+3000);
            DummyPlayCutsceneAndWarpPlayer(laurence_lamp_id+4000, area_id, block_id);
        }
    } else if (EventFlag(laurence_defeat+12) || EventFlag(laurence_defeat-1)) {
        SetEventFlag(laurence_defeat, OFF);
        SetEventFlag(laurence_defeat+1, OFF);
        SetEventFlag(laurence_defeat+3011, OFF);
        SetEventFlag(laurence_defeat+12, OFF);
        SetEventFlag(laurence_defeat+13, ON);
        SetEventFlag(laurence_defeat-1, OFF);
        SetEventFlag(10008900+laurence_offset, ON);
        $InitializeEvent(laurence_lamp_offset, 10008300, laurence_lamp_id+2000, -1, laurence_lamp_kindle, laurence_lamp_id+6000, laurence_lamp_id+3000);
    } else {
        $InitializeEvent(laurence_lamp_offset, 10008300, laurence_lamp_id+2000, -1, laurence_lamp_kindle, laurence_lamp_id+6000, laurence_lamp_id+3000);
    }
    
    $InitializeEvent(laurence_offset, 12102070, laurence_defeat+13, 0, 7499, laurence_id, -1, -1, -1, -1);
    $InitializeEvent(ludwig_offset, 12102070, ludwig_defeat+13, 0, 7498, ludwig_id1, ludwig_id2, -1, -1, -1);
    
    $InitializeEvent(laurence_offset, 10008900, laurence_defeat-1, laurence_lamp_id+1000, 0, 0, laurence_lamp_id+5000, area_id, block_id);
    $InitializeEvent(ludwig_offset, 10008900, ludwig_defeat-1, ludwig_lamp_id+1000, ludwig_defeat+15, ludwig_defeat+14, ludwig_lamp_id+5000, area_id, block_id);
    
    $InitializeEvent(ludwig_offset, 10007700, ludwig_defeat+11, ludwig_defeat+12, ludwig_lamp_id+1000, 834000);
    $InitializeEvent(laurence_offset, 10007700, laurence_defeat+11, laurence_defeat+12, laurence_lamp_id+1000, 834002);
    
    $InitializeEvent(3400, 12107000, 72113400, 3401950, 2412950);
    $InitializeEvent(3401, 12107000, 72113401, 3401950, 2412951);
    $InitializeEvent(3402, 12107000, 72113402, 3401950, 2412952);
    $InitializeEvent(3403, 12107000, 72113403, 3401950, 2412953);
    $InitializeEvent(3404, 12107000, 72113404, 3401950, 2402950);
    $InitializeEvent(3405, 12107000, 72113405, 3401950, 2402951);
    $InitializeEvent(3406, 12107000, 72113406, 3401950, 2422950);
    $InitializeEvent(3407, 12107000, 72113407, 3401950, 2422952);
    $InitializeEvent(3408, 12107000, 72113408, 3401950, 2422951);
    $InitializeEvent(3409, 12107000, 72113409, 3401950, 2302950);
    $InitializeEvent(3410, 12107000, 72113410, 3401950, 2302951);
    $InitializeEvent(3411, 12107000, 72113411, 3401950, 2302952);
    $InitializeEvent(3412, 12107000, 72113412, 3401950, 2202950);
    $InitializeEvent(3413, 12107000, 72113413, 3401950, 2202951);
    $InitializeEvent(3414, 12107000, 72113414, 3401950, 2702950);
    $InitializeEvent(3415, 12107000, 72113415, 3401950, 2702951);
    $InitializeEvent(3416, 12107000, 72113416, 3401950, 3202950);
    $InitializeEvent(3417, 12107000, 72113417, 3401950, 3202952);
    $InitializeEvent(3418, 12107000, 72113418, 3401950, 2802950);
    $InitializeEvent(3419, 12107000, 72113419, 3401950, 2802953);
    $InitializeEvent(3420, 12107000, 72113420, 3401950, 2802951);
    $InitializeEvent(3421, 12107000, 72113421, 3401950, 2802952);
    $InitializeEvent(3422, 12107000, 72113422, 3401950, 2502950);
    $InitializeEvent(3423, 12107000, 72113423, 3401950, 2502952);
    $InitializeEvent(3424, 12107000, 72113424, 3401950, 2502951);
    $InitializeEvent(3425, 12107000, 72113425, 3401950, 2112950);
    $InitializeEvent(3426, 12107000, 72113426, 3401950, 3202951);
    $InitializeEvent(3427, 12107000, 72113427, 3401950, 3202953);
    $InitializeEvent(3428, 12107000, 72113428, 3401950, 3302950);
    $InitializeEvent(3429, 12107000, 72113429, 3401950, 3302951);
    $InitializeEvent(3430, 12107000, 72113430, 3401950, 2602950);
    $InitializeEvent(3431, 12107000, 72113431, 3401950, 2602953);
    $InitializeEvent(3432, 12107000, 72113432, 3401950, 2602952);
    $InitializeEvent(3433, 12107000, 72113433, 3401950, 2602951);
    $InitializeEvent(3434, 12107000, 72113434, 3401950, 3402950);
    $InitializeEvent(3435, 12107000, 72113435, 3401950, 3402951);
    $InitializeEvent(3436, 12107000, 72113436, 3401950, 3402953);
    $InitializeEvent(3437, 12107000, 72113437, 3401950, 3402952);
    $InitializeEvent(3438, 12107000, 72113438, 3401950, 3502950);
    $InitializeEvent(3439, 12107000, 72113439, 3401950, 3502951);
    $InitializeEvent(3440, 12107000, 72113440, 3401950, 3502952);
    $InitializeEvent(3441, 12107000, 72113441, 3401950, 3602950);
    $InitializeEvent(3442, 12107000, 72113442, 3401950, 3602951);
    $InitializeEvent(3443, 12107000, 72113443, 3401950, 3602952);
    $InitializeEvent(3444, 12107000, 72113444, 3401950, 2902950);
    $InitializeEvent(3445, 12107000, 72113445, 3401950, 2902951);
    $InitializeEvent(3446, 12107000, 72113446, 3401950, 2902952);
    $InitializeEvent(3447, 12107000, 72113447, 3401950, 2902953);
    $InitializeEvent(3448, 12107000, 72113448, 3401950, 2902954);
    $InitializeEvent(3449, 12107000, 72113449, 3401950, 2902955);
    $InitializeEvent(3450, 12107000, 72113450, 3401950, 2902956);
    $InitializeEvent(3451, 12107000, 72113451, 3401950, 2902957);
    $InitializeEvent(3452, 12107000, 72113452, 3401950, 2902958);
    $InitializeEvent(3453, 12107000, 72113453, 3401950, 2902959);
    
    $InitializeEvent(3500, 12107000, 72113500, 3401951, 2412950);
    $InitializeEvent(3501, 12107000, 72113501, 3401951, 2412951);
    $InitializeEvent(3502, 12107000, 72113502, 3401951, 2412952);
    $InitializeEvent(3503, 12107000, 72113503, 3401951, 2412953);
    $InitializeEvent(3504, 12107000, 72113504, 3401951, 2402950);
    $InitializeEvent(3505, 12107000, 72113505, 3401951, 2402951);
    $InitializeEvent(3506, 12107000, 72113506, 3401951, 2422950);
    $InitializeEvent(3507, 12107000, 72113507, 3401951, 2422952);
    $InitializeEvent(3508, 12107000, 72113508, 3401951, 2422951);
    $InitializeEvent(3509, 12107000, 72113509, 3401951, 2302950);
    $InitializeEvent(3510, 12107000, 72113510, 3401951, 2302951);
    $InitializeEvent(3511, 12107000, 72113511, 3401951, 2302952);
    $InitializeEvent(3512, 12107000, 72113512, 3401951, 2202950);
    $InitializeEvent(3513, 12107000, 72113513, 3401951, 2202951);
    $InitializeEvent(3514, 12107000, 72113514, 3401951, 2702950);
    $InitializeEvent(3515, 12107000, 72113515, 3401951, 2702951);
    $InitializeEvent(3516, 12107000, 72113516, 3401951, 3202950);
    $InitializeEvent(3517, 12107000, 72113517, 3401951, 3202952);
    $InitializeEvent(3518, 12107000, 72113518, 3401951, 2802950);
    $InitializeEvent(3519, 12107000, 72113519, 3401951, 2802953);
    $InitializeEvent(3520, 12107000, 72113520, 3401951, 2802951);
    $InitializeEvent(3521, 12107000, 72113521, 3401951, 2802952);
    $InitializeEvent(3522, 12107000, 72113522, 3401951, 2502950);
    $InitializeEvent(3523, 12107000, 72113523, 3401951, 2502952);
    $InitializeEvent(3524, 12107000, 72113524, 3401951, 2502951);
    $InitializeEvent(3525, 12107000, 72113525, 3401951, 2112950);
    $InitializeEvent(3526, 12107000, 72113526, 3401951, 3202951);
    $InitializeEvent(3527, 12107000, 72113527, 3401951, 3202953);
    $InitializeEvent(3528, 12107000, 72113528, 3401951, 3302950);
    $InitializeEvent(3529, 12107000, 72113529, 3401951, 3302951);
    $InitializeEvent(3530, 12107000, 72113530, 3401951, 2602950);
    $InitializeEvent(3531, 12107000, 72113531, 3401951, 2602953);
    $InitializeEvent(3532, 12107000, 72113532, 3401951, 2602952);
    $InitializeEvent(3533, 12107000, 72113533, 3401951, 2602951);
    $InitializeEvent(3534, 12107000, 72113534, 3401951, 3402950);
    $InitializeEvent(3535, 12107000, 72113535, 3401951, 3402951);
    $InitializeEvent(3536, 12107000, 72113536, 3401951, 3402953);
    $InitializeEvent(3537, 12107000, 72113537, 3401951, 3402952);
    $InitializeEvent(3538, 12107000, 72113538, 3401951, 3502950);
    $InitializeEvent(3539, 12107000, 72113539, 3401951, 3502951);
    $InitializeEvent(3540, 12107000, 72113540, 3401951, 3502952);
    $InitializeEvent(3541, 12107000, 72113541, 3401951, 3602950);
    $InitializeEvent(3542, 12107000, 72113542, 3401951, 3602951);
    $InitializeEvent(3543, 12107000, 72113543, 3401951, 3602952);
    $InitializeEvent(3544, 12107000, 72113544, 3401951, 2902950);
    $InitializeEvent(3545, 12107000, 72113545, 3401951, 2902951);
    $InitializeEvent(3546, 12107000, 72113546, 3401951, 2902952);
    $InitializeEvent(3547, 12107000, 72113547, 3401951, 2902953);
    $InitializeEvent(3548, 12107000, 72113548, 3401951, 2902954);
    $InitializeEvent(3549, 12107000, 72113549, 3401951, 2902955);
    $InitializeEvent(3550, 12107000, 72113550, 3401951, 2902956);
    $InitializeEvent(3551, 12107000, 72113551, 3401951, 2902957);
    $InitializeEvent(3552, 12107000, 72113552, 3401951, 2902958);
    $InitializeEvent(3553, 12107000, 72113553, 3401951, 2902959);
    
    $InitializeEvent(3600, 12107000, 72113600, 3401953, 2412950);
    $InitializeEvent(3601, 12107000, 72113601, 3401953, 2412951);
    $InitializeEvent(3602, 12107000, 72113602, 3401953, 2412952);
    $InitializeEvent(3603, 12107000, 72113603, 3401953, 2412953);
    $InitializeEvent(3604, 12107000, 72113604, 3401953, 2402950);
    $InitializeEvent(3605, 12107000, 72113605, 3401953, 2402951);
    $InitializeEvent(3606, 12107000, 72113606, 3401953, 2422950);
    $InitializeEvent(3607, 12107000, 72113607, 3401953, 2422952);
    $InitializeEvent(3608, 12107000, 72113608, 3401953, 2422951);
    $InitializeEvent(3609, 12107000, 72113609, 3401953, 2302950);
    $InitializeEvent(3610, 12107000, 72113610, 3401953, 2302951);
    $InitializeEvent(3611, 12107000, 72113611, 3401953, 2302952);
    $InitializeEvent(3612, 12107000, 72113612, 3401953, 2202950);
    $InitializeEvent(3613, 12107000, 72113613, 3401953, 2202951);
    $InitializeEvent(3614, 12107000, 72113614, 3401953, 2702950);
    $InitializeEvent(3615, 12107000, 72113615, 3401953, 2702951);
    $InitializeEvent(3616, 12107000, 72113616, 3401953, 3202950);
    $InitializeEvent(3617, 12107000, 72113617, 3401953, 3202952);
    $InitializeEvent(3618, 12107000, 72113618, 3401953, 2802950);
    $InitializeEvent(3619, 12107000, 72113619, 3401953, 2802953);
    $InitializeEvent(3620, 12107000, 72113620, 3401953, 2802951);
    $InitializeEvent(3621, 12107000, 72113621, 3401953, 2802952);
    $InitializeEvent(3622, 12107000, 72113622, 3401953, 2502950);
    $InitializeEvent(3623, 12107000, 72113623, 3401953, 2502952);
    $InitializeEvent(3624, 12107000, 72113624, 3401953, 2502951);
    $InitializeEvent(3625, 12107000, 72113625, 3401953, 2112950);
    $InitializeEvent(3626, 12107000, 72113626, 3401953, 3202951);
    $InitializeEvent(3627, 12107000, 72113627, 3401953, 3202953);
    $InitializeEvent(3628, 12107000, 72113628, 3401953, 3302950);
    $InitializeEvent(3629, 12107000, 72113629, 3401953, 3302951);
    $InitializeEvent(3630, 12107000, 72113630, 3401953, 2602950);
    $InitializeEvent(3631, 12107000, 72113631, 3401953, 2602953);
    $InitializeEvent(3632, 12107000, 72113632, 3401953, 2602952);
    $InitializeEvent(3633, 12107000, 72113633, 3401953, 2602951);
    $InitializeEvent(3634, 12107000, 72113634, 3401953, 3402950);
    $InitializeEvent(3635, 12107000, 72113635, 3401953, 3402951);
    $InitializeEvent(3636, 12107000, 72113636, 3401953, 3402953);
    $InitializeEvent(3637, 12107000, 72113637, 3401953, 3402952);
    $InitializeEvent(3638, 12107000, 72113638, 3401953, 3502950);
    $InitializeEvent(3639, 12107000, 72113639, 3401953, 3502951);
    $InitializeEvent(3640, 12107000, 72113640, 3401953, 3502952);
    $InitializeEvent(3641, 12107000, 72113641, 3401953, 3602950);
    $InitializeEvent(3642, 12107000, 72113642, 3401953, 3602951);
    $InitializeEvent(3643, 12107000, 72113643, 3401953, 3602952);
    $InitializeEvent(3644, 12107000, 72113644, 3401953, 2902950);
    $InitializeEvent(3645, 12107000, 72113645, 3401953, 2902951);
    $InitializeEvent(3646, 12107000, 72113646, 3401953, 2902952);
    $InitializeEvent(3647, 12107000, 72113647, 3401953, 2902953);
    $InitializeEvent(3648, 12107000, 72113648, 3401953, 2902954);
    $InitializeEvent(3649, 12107000, 72113649, 3401953, 2902955);
    $InitializeEvent(3650, 12107000, 72113650, 3401953, 2902956);
    $InitializeEvent(3651, 12107000, 72113651, 3401953, 2902957);
    $InitializeEvent(3652, 12107000, 72113652, 3401953, 2902958);
    $InitializeEvent(3653, 12107000, 72113653, 3401953, 2902959);
    
    $InitializeEvent(3700, 12107000, 72113700, 3401952, 2412950);
    $InitializeEvent(3701, 12107000, 72113701, 3401952, 2412951);
    $InitializeEvent(3702, 12107000, 72113702, 3401952, 2412952);
    $InitializeEvent(3703, 12107000, 72113703, 3401952, 2412953);
    $InitializeEvent(3704, 12107000, 72113704, 3401952, 2402950);
    $InitializeEvent(3705, 12107000, 72113705, 3401952, 2402951);
    $InitializeEvent(3706, 12107000, 72113706, 3401952, 2422950);
    $InitializeEvent(3707, 12107000, 72113707, 3401952, 2422952);
    $InitializeEvent(3708, 12107000, 72113708, 3401952, 2422951);
    $InitializeEvent(3709, 12107000, 72113709, 3401952, 2302950);
    $InitializeEvent(3710, 12107000, 72113710, 3401952, 2302951);
    $InitializeEvent(3711, 12107000, 72113711, 3401952, 2302952);
    $InitializeEvent(3712, 12107000, 72113712, 3401952, 2202950);
    $InitializeEvent(3713, 12107000, 72113713, 3401952, 2202951);
    $InitializeEvent(3714, 12107000, 72113714, 3401952, 2702950);
    $InitializeEvent(3715, 12107000, 72113715, 3401952, 2702951);
    $InitializeEvent(3716, 12107000, 72113716, 3401952, 3202950);
    $InitializeEvent(3717, 12107000, 72113717, 3401952, 3202952);
    $InitializeEvent(3718, 12107000, 72113718, 3401952, 2802950);
    $InitializeEvent(3719, 12107000, 72113719, 3401952, 2802953);
    $InitializeEvent(3720, 12107000, 72113720, 3401952, 2802951);
    $InitializeEvent(3721, 12107000, 72113721, 3401952, 2802952);
    $InitializeEvent(3722, 12107000, 72113722, 3401952, 2502950);
    $InitializeEvent(3723, 12107000, 72113723, 3401952, 2502952);
    $InitializeEvent(3724, 12107000, 72113724, 3401952, 2502951);
    $InitializeEvent(3725, 12107000, 72113725, 3401952, 2112950);
    $InitializeEvent(3726, 12107000, 72113726, 3401952, 3202951);
    $InitializeEvent(3727, 12107000, 72113727, 3401952, 3202953);
    $InitializeEvent(3728, 12107000, 72113728, 3401952, 3302950);
    $InitializeEvent(3729, 12107000, 72113729, 3401952, 3302951);
    $InitializeEvent(3730, 12107000, 72113730, 3401952, 2602950);
    $InitializeEvent(3731, 12107000, 72113731, 3401952, 2602953);
    $InitializeEvent(3732, 12107000, 72113732, 3401952, 2602952);
    $InitializeEvent(3733, 12107000, 72113733, 3401952, 2602951);
    $InitializeEvent(3734, 12107000, 72113734, 3401952, 3402950);
    $InitializeEvent(3735, 12107000, 72113735, 3401952, 3402951);
    $InitializeEvent(3736, 12107000, 72113736, 3401952, 3402953);
    $InitializeEvent(3737, 12107000, 72113737, 3401952, 3402952);
    $InitializeEvent(3738, 12107000, 72113738, 3401952, 3502950);
    $InitializeEvent(3739, 12107000, 72113739, 3401952, 3502951);
    $InitializeEvent(3740, 12107000, 72113740, 3401952, 3502952);
    $InitializeEvent(3741, 12107000, 72113741, 3401952, 3602950);
    $InitializeEvent(3742, 12107000, 72113742, 3401952, 3602951);
    $InitializeEvent(3743, 12107000, 72113743, 3401952, 3602952);
    $InitializeEvent(3744, 12107000, 72113744, 3401952, 2902950);
    $InitializeEvent(3745, 12107000, 72113745, 3401952, 2902951);
    $InitializeEvent(3746, 12107000, 72113746, 3401952, 2902952);
    $InitializeEvent(3747, 12107000, 72113747, 3401952, 2902953);
    $InitializeEvent(3748, 12107000, 72113748, 3401952, 2902954);
    $InitializeEvent(3749, 12107000, 72113749, 3401952, 2902955);
    $InitializeEvent(3750, 12107000, 72113750, 3401952, 2902956);
    $InitializeEvent(3751, 12107000, 72113751, 3401952, 2902957);
    $InitializeEvent(3752, 12107000, 72113752, 3401952, 2902958);
    $InitializeEvent(3753, 12107000, 72113753, 3401952, 2902959);
    
    SetEventFlag(72110034, OFF);
    SetEventFlag(72110134, OFF);
    SetEventFlag(72110234, OFF);
    SetEventFlag(72110334, OFF);
    SetEventFlag(72110434, OFF);
    SetEventFlag(72110534, OFF);
    SetEventFlag(72110634, OFF);
    SetEventFlag(72110734, OFF);
    SetEventFlag(72110834, OFF);
    SetEventFlag(72110934, OFF);
    SetEventFlag(72111034, OFF);
    SetEventFlag(72111134, OFF);
    SetEventFlag(72111234, OFF);
    SetEventFlag(72111334, OFF);
    SetEventFlag(72111434, OFF);
    SetEventFlag(72111534, OFF);
    SetEventFlag(72111634, OFF);
    SetEventFlag(72111734, OFF);
    SetEventFlag(72111834, OFF);
    SetEventFlag(72111934, OFF);
    SetEventFlag(72112034, OFF);
    SetEventFlag(72112134, OFF);
    SetEventFlag(72112234, OFF);
    SetEventFlag(72112334, OFF);
    SetEventFlag(72112434, OFF);
    SetEventFlag(72112534, OFF);
    SetEventFlag(72112634, OFF);
    SetEventFlag(72112734, OFF);
    SetEventFlag(72112834, OFF);
    SetEventFlag(72112934, OFF);
    SetEventFlag(72113034, OFF);
    SetEventFlag(72113134, OFF);
    SetEventFlag(72113234, OFF);
    SetEventFlag(72113334, OFF);
    SetEventFlag(72113434, OFF);
    SetEventFlag(72113534, OFF);
    SetEventFlag(72113634, OFF);
    SetEventFlag(72113734, OFF);
    SetEventFlag(72113834, OFF);
    SetEventFlag(72113934, OFF);
    SetEventFlag(72114034, OFF);
    SetEventFlag(72114134, OFF);
    SetEventFlag(72114234, OFF);
    SetEventFlag(72114334, OFF);
    SetEventFlag(72114434, OFF);
    SetEventFlag(72114534, OFF);
    SetEventFlag(72114634, OFF);
    SetEventFlag(72114734, OFF);
    SetEventFlag(72114834, OFF);
    SetEventFlag(72114934, OFF);
    SetEventFlag(72115034, OFF);
    SetEventFlag(72115134, OFF);
    SetEventFlag(72115234, OFF);
    SetEventFlag(72115334, OFF);
    
    SetEventFlag(72110035, OFF);
    SetEventFlag(72110135, OFF);
    SetEventFlag(72110235, OFF);
    SetEventFlag(72110335, OFF);
    SetEventFlag(72110435, OFF);
    SetEventFlag(72110535, OFF);
    SetEventFlag(72110635, OFF);
    SetEventFlag(72110735, OFF);
    SetEventFlag(72110835, OFF);
    SetEventFlag(72110935, OFF);
    SetEventFlag(72111035, OFF);
    SetEventFlag(72111135, OFF);
    SetEventFlag(72111235, OFF);
    SetEventFlag(72111335, OFF);
    SetEventFlag(72111435, OFF);
    SetEventFlag(72111535, OFF);
    SetEventFlag(72111635, OFF);
    SetEventFlag(72111735, OFF);
    SetEventFlag(72111835, OFF);
    SetEventFlag(72111935, OFF);
    SetEventFlag(72112035, OFF);
    SetEventFlag(72112135, OFF);
    SetEventFlag(72112235, OFF);
    SetEventFlag(72112335, OFF);
    SetEventFlag(72112435, OFF);
    SetEventFlag(72112535, OFF);
    SetEventFlag(72112635, OFF);
    SetEventFlag(72112735, OFF);
    SetEventFlag(72112835, OFF);
    SetEventFlag(72112935, OFF);
    SetEventFlag(72113035, OFF);
    SetEventFlag(72113135, OFF);
    SetEventFlag(72113235, OFF);
    SetEventFlag(72113335, OFF);
    SetEventFlag(72113435, OFF);
    SetEventFlag(72113535, OFF);
    SetEventFlag(72113635, OFF);
    SetEventFlag(72113735, OFF);
    SetEventFlag(72113835, OFF);
    SetEventFlag(72113935, OFF);
    SetEventFlag(72114035, OFF);
    SetEventFlag(72114135, OFF);
    SetEventFlag(72114235, OFF);
    SetEventFlag(72114335, OFF);
    SetEventFlag(72114435, OFF);
    SetEventFlag(72114535, OFF);
    SetEventFlag(72114635, OFF);
    SetEventFlag(72114735, OFF);
    SetEventFlag(72114835, OFF);
    SetEventFlag(72114935, OFF);
    SetEventFlag(72115035, OFF);
    SetEventFlag(72115135, OFF);
    SetEventFlag(72115235, OFF);
    SetEventFlag(72115335, OFF);
    
    SetEventFlag(72110036, OFF);
    SetEventFlag(72110136, OFF);
    SetEventFlag(72110236, OFF);
    SetEventFlag(72110336, OFF);
    SetEventFlag(72110436, OFF);
    SetEventFlag(72110536, OFF);
    SetEventFlag(72110636, OFF);
    SetEventFlag(72110736, OFF);
    SetEventFlag(72110836, OFF);
    SetEventFlag(72110936, OFF);
    SetEventFlag(72111036, OFF);
    SetEventFlag(72111136, OFF);
    SetEventFlag(72111236, OFF);
    SetEventFlag(72111336, OFF);
    SetEventFlag(72111436, OFF);
    SetEventFlag(72111536, OFF);
    SetEventFlag(72111636, OFF);
    SetEventFlag(72111736, OFF);
    SetEventFlag(72111836, OFF);
    SetEventFlag(72111936, OFF);
    SetEventFlag(72112036, OFF);
    SetEventFlag(72112136, OFF);
    SetEventFlag(72112236, OFF);
    SetEventFlag(72112336, OFF);
    SetEventFlag(72112436, OFF);
    SetEventFlag(72112536, OFF);
    SetEventFlag(72112636, OFF);
    SetEventFlag(72112736, OFF);
    SetEventFlag(72112836, OFF);
    SetEventFlag(72112936, OFF);
    SetEventFlag(72113036, OFF);
    SetEventFlag(72113136, OFF);
    SetEventFlag(72113236, OFF);
    SetEventFlag(72113336, OFF);
    SetEventFlag(72113436, OFF);
    SetEventFlag(72113536, OFF);
    SetEventFlag(72113636, OFF);
    SetEventFlag(72113736, OFF);
    SetEventFlag(72113836, OFF);
    SetEventFlag(72113936, OFF);
    SetEventFlag(72114036, OFF);
    SetEventFlag(72114136, OFF);
    SetEventFlag(72114236, OFF);
    SetEventFlag(72114336, OFF);
    SetEventFlag(72114436, OFF);
    SetEventFlag(72114536, OFF);
    SetEventFlag(72114636, OFF);
    SetEventFlag(72114736, OFF);
    SetEventFlag(72114836, OFF);
    SetEventFlag(72114936, OFF);
    SetEventFlag(72115036, OFF);
    SetEventFlag(72115136, OFF);
    SetEventFlag(72115236, OFF);
    SetEventFlag(72115336, OFF);
    
    SetEventFlag(72110037, OFF);
    SetEventFlag(72110137, OFF);
    SetEventFlag(72110237, OFF);
    SetEventFlag(72110337, OFF);
    SetEventFlag(72110437, OFF);
    SetEventFlag(72110537, OFF);
    SetEventFlag(72110637, OFF);
    SetEventFlag(72110737, OFF);
    SetEventFlag(72110837, OFF);
    SetEventFlag(72110937, OFF);
    SetEventFlag(72111037, OFF);
    SetEventFlag(72111137, OFF);
    SetEventFlag(72111237, OFF);
    SetEventFlag(72111337, OFF);
    SetEventFlag(72111437, OFF);
    SetEventFlag(72111537, OFF);
    SetEventFlag(72111637, OFF);
    SetEventFlag(72111737, OFF);
    SetEventFlag(72111837, OFF);
    SetEventFlag(72111937, OFF);
    SetEventFlag(72112037, OFF);
    SetEventFlag(72112137, OFF);
    SetEventFlag(72112237, OFF);
    SetEventFlag(72112337, OFF);
    SetEventFlag(72112437, OFF);
    SetEventFlag(72112537, OFF);
    SetEventFlag(72112637, OFF);
    SetEventFlag(72112737, OFF);
    SetEventFlag(72112837, OFF);
    SetEventFlag(72112937, OFF);
    SetEventFlag(72113037, OFF);
    SetEventFlag(72113137, OFF);
    SetEventFlag(72113237, OFF);
    SetEventFlag(72113337, OFF);
    SetEventFlag(72113437, OFF);
    SetEventFlag(72113537, OFF);
    SetEventFlag(72113637, OFF);
    SetEventFlag(72113737, OFF);
    SetEventFlag(72113837, OFF);
    SetEventFlag(72113937, OFF);
    SetEventFlag(72114037, OFF);
    SetEventFlag(72114137, OFF);
    SetEventFlag(72114237, OFF);
    SetEventFlag(72114337, OFF);
    SetEventFlag(72114437, OFF);
    SetEventFlag(72114537, OFF);
    SetEventFlag(72114637, OFF);
    SetEventFlag(72114737, OFF);
    SetEventFlag(72114837, OFF);
    SetEventFlag(72114937, OFF);
    SetEventFlag(72115037, OFF);
    SetEventFlag(72115137, OFF);
    SetEventFlag(72115237, OFF);
    SetEventFlag(72115337, OFF);
    
    $InitializeEvent(0, 12107100, 72100421, 3401950, 9021);
    $InitializeEvent(1, 12107100, 72100422, 3401950, 9022);
    $InitializeEvent(2, 12107100, 72100423, 3401950, 9023);
    $InitializeEvent(3, 12107100, 72100424, 3401950, 9024);
    $InitializeEvent(4, 12107100, 72100425, 3401950, 9025);
    $InitializeEvent(5, 12107100, 72100426, 3401950, 9026);
    
    $InitializeEvent(6, 12107100, 72100427, 3401951, 9021);
    $InitializeEvent(7, 12107100, 72100428, 3401951, 9022);
    $InitializeEvent(8, 12107100, 72100429, 3401951, 9023);
    $InitializeEvent(9, 12107100, 72100430, 3401951, 9024);
    $InitializeEvent(10, 12107100, 72100431, 3401951, 9025);
    $InitializeEvent(11, 12107100, 72100432, 3401951, 9026);
    
    $InitializeEvent(12, 12107100, 72100433, 3401952, 9021);
    $InitializeEvent(13, 12107100, 72100434, 3401952, 9022);
    $InitializeEvent(14, 12107100, 72100435, 3401952, 9023);
    $InitializeEvent(15, 12107100, 72100436, 3401952, 9024);
    $InitializeEvent(16, 12107100, 72100437, 3401952, 9025);
    $InitializeEvent(17, 12107100, 72100438, 3401952, 9026);
    
    $InitializeEvent(18, 12107100, 72100439, 3401953, 9021);
    $InitializeEvent(19, 12107100, 72100440, 3401953, 9022);
    $InitializeEvent(20, 12107100, 72100441, 3401953, 9023);
    $InitializeEvent(21, 12107100, 72100442, 3401953, 9024);
    $InitializeEvent(22, 12107100, 72100443, 3401953, 9025);
    $InitializeEvent(23, 12107100, 72100444, 3401953, 9026);
    
    $InitializeEvent(0, 12107200, 72100300, 2902950, 9001);
    $InitializeEvent(1, 12107200, 72100301, 2902951, 9002);
    $InitializeEvent(2, 12107200, 72100302, 2902952, 9003);
    $InitializeEvent(3, 12107200, 72100303, 2902953, 9004);
    $InitializeEvent(4, 12107200, 72100304, 2902954, 9005);
    $InitializeEvent(5, 12107200, 72100305, 2902955, 9006);
    $InitializeEvent(6, 12107200, 72100306, 2902956, 9007);
    $InitializeEvent(7, 12107200, 72100307, 2902957, 9008);
    $InitializeEvent(8, 12107200, 72100308, 2902958, 9009);
    $InitializeEvent(9, 12107200, 72100309, 2902959, 9010);
    
    $InitializeEvent(10, 12107200, 72100310, 2902950, 9001);
    $InitializeEvent(11, 12107200, 72100311, 2902951, 9002);
    $InitializeEvent(12, 12107200, 72100312, 2902952, 9003);
    $InitializeEvent(13, 12107200, 72100313, 2902953, 9004);
    $InitializeEvent(14, 12107200, 72100314, 2902954, 9005);
    $InitializeEvent(15, 12107200, 72100315, 2902955, 9006);
    $InitializeEvent(16, 12107200, 72100316, 2902956, 9007);
    $InitializeEvent(17, 12107200, 72100317, 2902957, 9008);
    $InitializeEvent(18, 12107200, 72100318, 2902958, 9009);
    $InitializeEvent(19, 12107200, 72100319, 2902959, 9010);
    
    $InitializeEvent(20, 12107200, 72100320, 2902950, 9001);
    $InitializeEvent(21, 12107200, 72100321, 2902951, 9002);
    $InitializeEvent(22, 12107200, 72100322, 2902952, 9003);
    $InitializeEvent(23, 12107200, 72100323, 2902953, 9004);
    $InitializeEvent(24, 12107200, 72100324, 2902954, 9005);
    $InitializeEvent(25, 12107200, 72100325, 2902955, 9006);
    $InitializeEvent(26, 12107200, 72100326, 2902956, 9007);
    $InitializeEvent(27, 12107200, 72100327, 2902957, 9008);
    $InitializeEvent(28, 12107200, 72100328, 2902958, 9009);
    $InitializeEvent(29, 12107200, 72100329, 2902959, 9010);
    
    $InitializeEvent(30, 12107200, 72100330, 2902950, 9001);
    $InitializeEvent(31, 12107200, 72100331, 2902951, 9002);
    $InitializeEvent(32, 12107200, 72100332, 2902952, 9003);
    $InitializeEvent(33, 12107200, 72100333, 2902953, 9004);
    $InitializeEvent(34, 12107200, 72100334, 2902954, 9005);
    $InitializeEvent(35, 12107200, 72100335, 2902955, 9006);
    $InitializeEvent(36, 12107200, 72100336, 2902956, 9007);
    $InitializeEvent(37, 12107200, 72100337, 2902957, 9008);
    $InitializeEvent(38, 12107200, 72100338, 2902958, 9009);
    $InitializeEvent(39, 12107200, 72100339, 2902959, 9010);
    
    if (!EventFlag(13400999)) {
        $InitializeEvent(55, 10000100, 3403960, 3403961, 13407810, -1);
        $InitializeEvent(55, 7000, 3400950, 3401950, 999, 13407800, -1);
        $InitializeEvent(56, 10000100, 3403962, 3403963, 13407830, -1);
        $InitializeEvent(56, 7000, 3400951, 3401951, 999, 13407820, -1);
        
        $InitializeEvent(57, 10000100, 3403964, 3403965, 13407850, ludwig_defeat);
        $InitializeEvent(57, 7000, 3400952, 3401952, 13401800, 13407840, ludwig_defeat+13);
        $InitializeEvent(ludwig_offset, 10008800, ludwig_defeat+13, ludwig_lamp_id-1000, ludwig_lamp_id, ludwig_lamp_id+3000);
        
        $InitializeEvent(58, 10000100, 3403966, 3403967, 13407870, laurence_defeat);
        $InitializeEvent(58, 7000, 3400953, 3401953, 13401850, 13407860, laurence_defeat+13);
        $InitializeEvent(laurence_offset, 10008800, laurence_defeat+13, laurence_lamp_id-1000, laurence_lamp_id, laurence_lamp_id+3000);
        
        $InitializeEvent(55, 7100, 73400200, 3401950);
        $InitializeEvent(56, 7100, 73400201, 3401951);
        $InitializeEvent(57, 7100, 73400202, 3401952);
        $InitializeEvent(58, 7100, 73400203, 3401953);
        $InitializeEvent(55, 7200, 73400100, 3401950, 2102953);
        $InitializeEvent(56, 7200, 73400101, 3401951, 2102953);
        $InitializeEvent(57, 7200, 73400102, 3401952, 2102953);
        $InitializeEvent(58, 7200, 73400103, 3401953, 2102953);
        $InitializeEvent(55, 7300, 72103400, 3401950);
        $InitializeEvent(56, 7300, 72103401, 3401951);
        $InitializeEvent(57, 7300, 72103402, 3401952);
        $InitializeEvent(58, 7300, 72103403, 3401953)
        DeactivateObject(3401999, Disabled);
        DeleteMapSFX(3403999, false);
    } else {
L0:
        ChangeCharacterEnableState(3400950, Disabled);
        ChangeCharacterEnableState(3400951, Disabled);
        ChangeCharacterEnableState(3400952, Disabled);
        ChangeCharacterEnableState(3400953, Disabled);
        DeactivateObject(3401950, Disabled);
        DeactivateObject(3401951, Disabled);
        DeactivateObject(3401952, Disabled);
        DeactivateObject(3401953, Disabled);
        SetPlayerRespawnPoint(3402955);
        SetEventFlag(9401, ON);
        SetEventFlag(9404, ON);
    }
L1:
    SetEventFlag(3400, OFF);
    SetEventFlag(3401, OFF);
    SetEventFlag(3402, OFF);
    SetEventFlag(3403, ON);
    if (EventFlag(13401800)) {
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
    }
    if (EventFlag(13401852)) {
        SetEventFlag(3400, OFF);
        SetEventFlag(3401, OFF);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, OFF);
    }
    if (EventFlag(13401850)) {
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
    }
    $InitializeEvent(0, 13400010);
    $InitializeEvent(0, 13401000);
    RegisterLadder(13400000, 13400001, 3401000);
    RegisterLadder(13400002, 13400003, 3401001);
    $InitializeEvent(0, 13401500);
    $InitializeEvent(0, 13404700, 3400790, 13404701, 13404711, 3400, 999);
    $InitializeEvent(5, 13404700, 3400791, 13404702, 13404712, 3400, 999);
    $InitializeEvent(0, 13404710, 3400790, 13404701, 13404711, 13404721);
    $InitializeEvent(5, 13404710, 3400701, 13404702, 13404712, 13404722);
    $InitializeEvent(0, 13404720, 3400790, 13404701, 13404711, 13404721);
    $InitializeEvent(5, 13404720, 3400791, 13404702, 13404712, 13404722);
    $InitializeEvent(0, 13404730, 3400790, 13404701, 13404711, 3400, 13404810, 999, 999, 13404712);
    $InitializeEvent(5, 13404730, 3400791, 13404702, 13404712, 3400, 13404810, 999, 999, 13404711);
    $InitializeEvent(0, 13404740);
    $InitializeEvent(0, 13404742);
    $InitializeEvent(0, 13401800);
    $InitializeEvent(0, 13404811);
    $InitializeEvent(0, 13401801);
    $InitializeEvent(0, 13404800);
    $InitializeEvent(0, 13404801);
    $InitializeEvent(0, 13404802);
    $InitializeEvent(0, 13404803);
    $InitializeEvent(0, 13404804);
    $InitializeEvent(0, 13404805);
    $InitializeEvent(0, 13404806);
    $InitializeEvent(0, 13404807);
    $InitializeEvent(0, 13401802);
    $InitializeEvent(0, 13401803);
    $InitializeEvent(0, 13404820);
    $InitializeEvent(0, 13404821);
    $InitializeEvent(0, 13404822);
    $InitializeEvent(0, 13404823);
    $InitializeEvent(0, 13404840);
    $InitializeEvent(0, 13401804);
    if (!EventFlag(13400999)) {
        $InitializeEvent(0, 13404824);
        $InitializeEvent(0, 13404825);
        $InitializeEvent(0, 13404830, 3400, 3400, NPCPartType.Part1, 300, 480, 7001, 152);
        $InitializeEvent(1, 13404830, 3401, 3401, NPCPartType.Part2, 150, 482, 7004, 72);
        $InitializeEvent(2, 13404830, 3402, 3402, NPCPartType.Part3, 150, 481, 7002, 72);
        $InitializeEvent(0, 13404835);
        $InitializeEvent(0, 13404841);
    } else {
        $InitializeEvent(0, 13404830, 3400, 3400, NPCPartType.Part1, 400, 480, 7001, 152);
        $InitializeEvent(1, 13404830, 3401, 3401, NPCPartType.Part2, 200, 482, 7004, 72);
        $InitializeEvent(2, 13404830, 3402, 3402, NPCPartType.Part3, 200, 481, 7002, 72);
    }
    $InitializeEvent(0, 13401850);
    $InitializeEvent(0, 13404861);
    $InitializeEvent(0, 13401851);
    $InitializeEvent(0, 13404850);
    $InitializeEvent(0, 13404851);
    $InitializeEvent(0, 13404852);
    $InitializeEvent(0, 13404853);
    $InitializeEvent(0, 13404854);
    $InitializeEvent(0, 13404855);
    $InitializeEvent(0, 13404856);
    $InitializeEvent(0, 13404857);
    $InitializeEvent(0, 13404870, 3450, 3450, NPCPartType.Part1, 480, 490, 60, 8020);
    $InitializeEvent(1, 13404870, 3451, 3451, NPCPartType.Part2, 481, 491, 150, 8000);
    $InitializeEvent(2, 13404870, 3452, 3452, NPCPartType.Part3, 482, 492, 150, 8010);
    $InitializeEvent(3, 13404870, 3453, 3453, NPCPartType.Part4, 483, 493, 250, 8030);
    $InitializeEvent(4, 13404870, 3454, 3454, NPCPartType.Part5, 484, 494, 250, 8040);
    $InitializeEvent(0, 13404875);
    $InitializeEvent(0, 13401853);
    $InitializeEvent(0, 13401200, 3400950, 3401020, 13401211);
    $InitializeEvent(0, 13401210, 3401010, 13400000, 1, 3400000);
    $InitializeEvent(1, 13401210, 3401020, 13400001, 1, 3400010);
    $InitializeEvent(0, 13401220);
    $InitializeEvent(0, 13400100);
    $InitializeEvent(0, 13400220, 3400680, 53401710);
    $InitializeEvent(1, 13400220, 3400681, 53401720);
    $InitializeEvent(0, 13405103);
    $InitializeEvent(0, 13400310, 3400590, 3402341);
    $InitializeEvent(0, 13400320);
    $InitializeEvent(0, 13404799);
    $InitializeEvent(0, 13405100, 3401400, 3402531, 3402554);
    $InitializeEvent(0, 13405105, 3402370, 3401350, 3401351, 0, 0, 0);
    $InitializeEvent(0, 13405115, 3401366, 13405130, 0, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(1, 13405115, 3401356, 13405131, 0, 60, 6284, 6285, 6286, 6287);
    $InitializeEvent(2, 13405115, 3401359, 13405132, 0, 70, 6280, 6281, 6282, 6283);
    $InitializeEvent(3, 13405115, 3401363, 13405132, 20, 80, 6280, 6281, 6282, 6283);
    $InitializeEvent(4, 13405115, 3401364, 13405132, 10, 40, 6280, 6281, 6282, 6283);
    $InitializeEvent(5, 13405115, 3401365, 13405132, 30, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(6, 13405115, 3401364, 13405133, 10, 60, 6280, 6281, 6282, 6283);
    $InitializeEvent(7, 13405115, 3401359, 13405135, 20, 40, 6280, 6281, 6282, 6283);
    $InitializeEvent(9, 13405115, 3401363, 13405135, 10, 70, 6280, 6281, 6282, 6283);
    $InitializeEvent(10, 13405115, 3401364, 13405135, 17, 60, 6280, 6281, 6282, 6283);
    $InitializeEvent(11, 13405115, 3401365, 13405135, 6, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(0, 13405113, 3401360, 13405136, 6, 50, 6280, 6281, 6282, 6283);
    $InitializeEvent(1, 13405140, 3400207, 3402510, 13405132, 3402371, 3401367, 30);
    $InitializeEvent(2, 13405140, 3400207, 3402376, 13405133, 3402371, 3401367, 10);
    $InitializeEvent(4, 13405140, 3400210, 3402377, 13405136, 3402374, 3401368, 20);
    $InitializeEvent(0, 13405145, 3402374, 3401368, 13405130);
    $InitializeEvent(1, 13405145, 3402372, 3401357, 13405131);
    $InitializeEvent(2, 13405145, 3402371, 3401367, 13405135);
    $InitializeEvent(3, 13405145, 3402374, 3401368, 13405136);
    $InitializeEvent(0, 13405155, 3402515);
    $InitializeEvent(0, 13405160, 3401330);
    $InitializeEvent(1, 13405160, 3401331);
    $InitializeEvent(2, 13405160, 3401332);
    $InitializeEvent(3, 13405160, 3401333);
    $InitializeEvent(4, 13405160, 3401334);
    $InitializeEvent(5, 13405160, 3401335);
    $InitializeEvent(6, 13405160, 3401336);
    $InitializeEvent(7, 13405160, 3401337);
    $InitializeEvent(8, 13405160, 3401338);
    $InitializeEvent(9, 13405160, 3401339);
    $InitializeEvent(10, 13405160, 3401340);
    $InitializeEvent(11, 13405160, 3401341);
    $InitializeEvent(12, 13405160, 3401342);
    $InitializeEvent(13, 13405160, 3401343);
    $InitializeEvent(14, 13405160, 3401344);
    $InitializeEvent(0, 13405110);
    $InitializeEvent(0, 13405112);
    $InitializeEvent(0, 13405200, 3400300, 3402600, 3004, 3402601);
    $InitializeEvent(0, 13400330, 3400650);
    $InitializeEvent(1, 13405211, 3402301);
    $InitializeEvent(2, 13405211, 3402302);
    $InitializeEvent(0, 13405220, 3400152, 7015, 109900, 7016, 109955, 0, 0, 1);
    $InitializeEvent(2, 13405220, 3400154, 7015, 109900, 7016, 109955, 0, 0, 1);
    $InitializeEvent(16, 13405220, 3400315, 7001, 400010, 7002, 400010, 3402555, 0, 0);
    $InitializeEvent(17, 13405220, 3400169, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(18, 13405220, 3400170, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(19, 13405220, 3400171, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(20, 13405220, 3400172, 7015, 109900, 7016, 109955, 0, 0, 2);
    $InitializeEvent(3, 13405220, 3400350, 7000, 6550, 0, 6550, 0, 0, 0);
    $InitializeEvent(4, 13405550, 3400141, 7000, 109900, 7002, 109950, 2, 3);
    $InitializeEvent(5, 13405550, 3400146, 7000, 109900, 7002, 109950, 2, 4);
    $InitializeEvent(7, 13405550, 3400147, 7003, 109900, 7005, 109953, 4, 6);
    $InitializeEvent(8, 13405550, 3400148, 7006, 109900, 7008, 109953, 0, 0);
    $InitializeEvent(1, 13405300, 3400208, 0, 3, 0);
    $InitializeEvent(2, 13405300, 3400209, 0, 3, 0);
    $InitializeEvent(3, 13405300, 3400207, 0, 3, 0);
    $InitializeEvent(4, 13405300, 3400210, 0, 3, 0);
    $InitializeEvent(7, 13405300, 3400160, 3402506, 10, 0);
    $InitializeEvent(8, 13405300, 3400309, 3402508, 10, 2);
    $InitializeEvent(9, 13405300, 3400280, 3402510, 10, 0);
    $InitializeEvent(10, 13405300, 3400281, 3402510, 10, 0);
    $InitializeEvent(15, 13405300, 3400664, 3402536, 10, 0);
    $InitializeEvent(16, 13405300, 3400510, 3402539, 10, 0);
    $InitializeEvent(17, 13405300, 3400550, 3402538, 10, 0);
    $InitializeEvent(18, 13405300, 3400580, 3402544, 5, 0);
    $InitializeEvent(0, 13405350, 3400405, 3402512, 0, 3403303, 0, 0);
    $InitializeEvent(1, 13405350, 3400204, 3402315, 0, 3403353, 0, 0);
    $InitializeEvent(2, 13405350, 3400253, 3402315, 0, 3403354, 0, 0);
    $InitializeEvent(3, 13405350, 3400508, 3402504, 0, 3403335, 0, 0);
    $InitializeEvent(4, 13405350, 3400203, 3402504, 0, 3403335, 1, 0);
    $InitializeEvent(5, 13405350, 3400200, 3402534, 0, 3403351, 0, 1);
    $InitializeEvent(6, 13405350, 3400105, 3402512, 0, 3403356, 0, 1);
    $InitializeEvent(7, 13405350, 3400106, 3402512, 0, 3403356, 4, 1);
    $InitializeEvent(8, 13405350, 3400202, 3402505, 0, 3403339, 0, 0);
    $InitializeEvent(9, 13405350, 3400252, 3402505, 0, 3403339, 0, 0);
    $InitializeEvent(10, 13405350, 3400411, 3402360, 0, 3403310, 0, 0);
    $InitializeEvent(11, 13405350, 3400601, 3402650, 0, 3403347, 0, 0);
    $InitializeEvent(12, 13405350, 3400552, 3402558, 0, 3403348, 0, 0);
    $InitializeEvent(13, 13405350, 3400105, 3402559, 0, 3403305, 0, 1);
    $InitializeEvent(14, 13405350, 3400106, 3402559, 0, 3403305, 2, 1);
    $InitializeEvent(15, 13405350, 3400665, 3402315, 0, 3403336, 0, 0);
    $InitializeEvent(16, 13405350, 3400601, 3402555, 0, 3403347, 0, 1);
    $InitializeEvent(17, 13405350, 3400137, 3402502, 0, 3403301, 1, 0);
    $InitializeEvent(18, 13405350, 3400107, 3402513, 0, 3403352, 0, 1);
    $InitializeEvent(19, 13405350, 3400412, 3402553, 0, 3403343, 0, 0);
    $InitializeEvent(20, 13405350, 3400165, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(24, 13405350, 3400166, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(25, 13405350, 3400167, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(26, 13405350, 3400168, 3402526, 0, 3403311, 0, 0);
    $InitializeEvent(27, 13405350, 3400611, 3402561, 0, 3403315, 2, 0);
    $InitializeEvent(34, 13405350, 3400158, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(35, 13405350, 3400159, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(36, 13405350, 3400160, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(37, 13405350, 3400161, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(38, 13405350, 3400162, 3402560, 0, 3403304, 0, 0);
    $InitializeEvent(39, 13405350, 3400403, 3402517, 0, 3403302, 8, 1);
    $InitializeEvent(40, 13405350, 3400303, 3402517, 0, 3403309, 16, 1);
    $InitializeEvent(41, 13405350, 3400205, 3402304, 0, 3403307, 0, 1);
    $InitializeEvent(42, 13405350, 3400206, 3402304, 0, 3403308, 0, 1);
    $InitializeEvent(43, 13405350, 3400111, 3402552, 0, 3403355, 0, 1);
    $InitializeEvent(44, 13405350, 3400112, 3402511, 0, 3403355, 0, 1);
    $InitializeEvent(45, 13405350, 3400113, 3402511, 0, 3403355, 4, 1);
    $InitializeEvent(46, 13405350, 3400130, 3402517, 0, 3403301, 8, 0);
    $InitializeEvent(47, 13405350, 3400131, 3402500, 0, 3403306, 2, 0);
    $InitializeEvent(48, 13405350, 3400132, 3402517, 0, 3403301, 9, 0);
    $InitializeEvent(49, 13405350, 3400133, 3402517, 0, 3403301, 9, 0);
    $InitializeEvent(50, 13405350, 3400134, 3402517, 0, 3403301, 8, 0);
    $InitializeEvent(51, 13405350, 3400135, 3402502, 0, 3403301, 2, 0);
    $InitializeEvent(52, 13405350, 3400137, 3402517, 0, 3403301, 9, 0);
    $InitializeEvent(53, 13405350, 3400140, 3402517, 0, 3403301, 2, 0);
    $InitializeEvent(54, 13405350, 3400149, 3402517, 0, 3403301, 7, 0);
    $InitializeEvent(55, 13405350, 3400178, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(56, 13405350, 3400179, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(57, 13405350, 3400180, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(58, 13405350, 3400181, 3402517, 0, 3403314, 9, 1);
    $InitializeEvent(59, 13405350, 3400182, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(60, 13405350, 3400183, 3402517, 0, 3403314, 15, 1);
    $InitializeEvent(61, 13405350, 3400139, 3402508, 0, 3403358, 0, 0);
    $InitializeEvent(62, 13405350, 3400136, 3402508, 0, 3403358, 0, 0);
    $InitializeEvent(63, 13405350, 3400173, 3402500, 0, 3403312, 0, 0);
    $InitializeEvent(64, 13405350, 3400610, 3402503, 0, 3403313, 0, 0);
    $InitializeEvent(65, 13405350, 3400204, 3402316, 0, 3403353, 0, 0);
    $InitializeEvent(66, 13405350, 3400253, 3402316, 0, 3403354, 0, 0);
    $InitializeEvent(21, 13405350, 3400401, 3402535, 0, 3403331, 0, 0);
    $InitializeEvent(22, 13405350, 3400143, 3402537, 0, 3403340, 0, 0);
    $InitializeEvent(23, 13405350, 3400145, 3402537, 0, 3403340, 2, 0);
    $InitializeEvent(28, 13405350, 3400110, 3402545, 0, 3403341, 5, 1);
    $InitializeEvent(29, 13405350, 3400109, 3402545, 0, 3403341, 1, 1);
    $InitializeEvent(30, 13405350, 3400144, 3402537, 0, 3403340, 0, 0);
    $InitializeEvent(32, 13405350, 3400550, 3402555, 0, 3403346, 0, 0);
    $InitializeEvent(33, 13405350, 3400580, 3402544, 0, 3403342, 0, 1);
    $InitializeEvent(1, 13405510, 3400141);
    $InitializeEvent(2, 13405510, 3400142);
    $InitializeEvent(3, 13405510, 3400143);
    $InitializeEvent(4, 13405510, 3400144);
    $InitializeEvent(5, 13405510, 3400145);
    $InitializeEvent(6, 13405510, 3400146);
    $InitializeEvent(7, 13405510, 3400147);
    $InitializeEvent(8, 13405510, 3400148);
    $InitializeEvent(0, 13405610, 3400169);
    $InitializeEvent(1, 13405610, 3400170);
    $InitializeEvent(2, 13405610, 3400171);
    $InitializeEvent(3, 13405610, 3400172);
    $InitializeEvent(1, 13405520, 3400141, 3402541);
    $InitializeEvent(2, 13405520, 3400142, 3402541);
    $InitializeEvent(3, 13405520, 3400143, 3402541);
    $InitializeEvent(4, 13405520, 3400144, 3402541);
    $InitializeEvent(5, 13405520, 3400145, 3402541);
    $InitializeEvent(6, 13405520, 3400146, 3402541);
    $InitializeEvent(7, 13405520, 3400147, 3402541);
    $InitializeEvent(8, 13405520, 3400148, 3402541);
    $InitializeEvent(0, 13405530, 3400143, 3402549);
    $InitializeEvent(1, 13405530, 3400144, 3402549);
    $InitializeEvent(2, 13405530, 3400145, 3402549);
    $InitializeEvent(1, 13405540, 3400142, 3403340, 2, 1, 0);
    $InitializeEvent(2, 13405540, 3400155, 3403345, 2, 1, 2);
    $InitializeEvent(3, 13405540, 3400316, 3403344, 4, 0, 0);
    $InitializeEvent(0, 13405640, 3400404, 7000, 400028, 7001, 400028, 0, 0);
    $InitializeEvent(0, 13405680, 3400165, 3400166, 13);
    $InitializeEvent(1, 13405680, 3400165, 3400167, 13);
    $InitializeEvent(2, 13405680, 3400165, 3400168, 13);
    $InitializeEvent(0, 13405216, 3400509, 3402542, 0, 3403338, 1, 0);
    $InitializeEvent(0, 13405480, 3400207, 3402515, 3, 3010, 0, Disabled);
    $InitializeEvent(1, 13405480, 3400105, 3402512, 5, 7002, 0, Enabled);
    $InitializeEvent(2, 13405480, 3400106, 3402512, 5, 7003, 4, Enabled);
    $InitializeEvent(3, 13405480, 3400107, 3402513, 3, 7004, 0, Disabled);
    $InitializeEvent(4, 13405480, 3400505, 3402553, 3, 700, 1, Disabled);
    $InitializeEvent(5, 13405480, 3400506, 3402553, 3, 700, 0, Disabled);
    $InitializeEvent(6, 13405480, 3400282, 3402303, 3, 3006, 0, Disabled);
    $InitializeEvent(8, 13405480, 3400507, 3402553, 3, 605, 0, Disabled);
    $InitializeEvent(9, 13405480, 3400468, 3402562, 0, 3001, 1, Disabled);
    $InitializeEvent(10, 13405480, 3400469, 3402562, 0, 3001, 0, Disabled);
    $InitializeEvent(13, 13405480, 3400472, 3402562, 0, 3001, 2, Disabled);
    $InitializeEvent(11, 13405480, 3400315, 3402540, 1, 702, 2, Disabled);
    $InitializeEvent(12, 13405480, 3400409, 3402552, 1, 3012, 0, Disabled);
    $InitializeEvent(0, 13400930);
    $InitializeEvent(2, 13400900, 3400902, 1710, 1729, 1719, 1710);
    $InitializeEvent(3, 13400900, 3400903, 1710, 1729, 1719, 1711);
    $InitializeEvent(2, 13400910, 3400902, 73400420);
    $InitializeEvent(3, 13400910, 3400903, 73400421);
    $InitializeEvent(2, 13400920, 3400902, 73400420, 1710, 1729, 1725);
    $InitializeEvent(3, 13400920, 3400903, 73400421, 1710, 1729, 1726);
    $InitializeEvent(0, 13400970, 3400910);
    $InitializeEvent(1, 13400970, 3400911);
    $InitializeEvent(0, 13400980, 73400424, 43211);
    $InitializeEvent(0, 13400953, 1710, 73400430, 43200);
    $InitializeEvent(1, 13400953, 1711, 73400431, 43210);
    $InitializeEvent(0, 13400995, 13400970, 43800, 43802, 6671);
    $InitializeEvent(1, 13400980, 13400971, 43810);
    if (!EventFlag(13400999)) {
        $InitializeEvent(0, 13400941);
        $InitializeEvent(0, 13400942, 73400512);
        $InitializeEvent(0, 13400943, 3400900);
        $InitializeEvent(0, 13400944);
    } else {
L2:
        ChangeCharacterEnableState(3400900, Disabled);
    }
L3:
    $InitializeEvent(0, 13400951, 3400902, 73400422, 1720);
    $InitializeEvent(1, 13400951, 3400903, 73400423, 1721);
    DeleteMapSFX(3403911, false);
    DeleteMapSFX(3403912, false);
    DeleteMapSFX(3403913, false);
    DeleteMapSFX(3403914, false);
    DeleteMapSFX(3403915, false);
    DeleteMapSFX(3403916, false);
    
    $InitializeEvent(0, 10007400, 3400921, 13404421, 101161, 101162, 233);
    $InitializeEvent(0, 10008630, 10008630, 10008640, 3400921, 13404421, 13404431, 200241, 101207, 200252, 200262); // henriett
    
    $InitializeEvent(1, 10007400, 3400922, 13404422, 101161, 101208, 233);
    $InitializeEvent(1, 10008630, 10008631, 10008641, 3400922, 13404422, 13404432, 200249, 101208, 200259, 200269); // master valtr 1 - c
    
    $InitializeEvent(2, 10007400, 3400923, 13404423, 101161, 101208, 233);
    $InitializeEvent(2, 10008630, 10008632, 10008642, 3400923, 13404423, 13404433, 200250, 101208, 200260, 200270); // valtr beast eater 1 - c
    
    $InitializeEvent(3, 10007400, 3400924, 13404424, 101161, 101208, 233);
    $InitializeEvent(3, 10008630, 10008633, 10008643, 3400924, 13404424, 13404434, 200243, 101208, 200253, 200263); // madaras twin - c
    
    $InitializeEvent(4, 10007400, 3400925, 13404425, 101161, 101208, 233);
    $InitializeEvent(4, 10008630, 10008634, 10008644, 3400925, 13404425, 13404435, 200249, 101208, 200259, 200269); // master valtr 2 - c
    
    $InitializeEvent(5, 10007400, 3400926, 13404426, 101161, 101208, 233);
    $InitializeEvent(5, 10008630, 10008635, 10008645, 3400926, 13404426, 13404436, 200249, 101208, 200260, 200270); // master beast eater 2 - c
    
    $InitializeEvent(0, 13404401, 13404441, 3403911, 13404421, 13404431, 13401800, 6001); // henriett
    $InitializeEvent(0, 13404402, 13404442, 3403912, 13404422, 13404432, 13401800, 13404421); // master valtr 1
    $InitializeEvent(0, 13404403, 13404443, 3403913, 13404423, 13404433, 13401800, 13404421); // valtr beast 1
    $InitializeEvent(0, 13404404, 13404444, 3403914, 13404424, 13404434, 13401800, 13404421); // madaras twin
    $InitializeEvent(0, 13404405, 13404445, 3403915, 13404425, 13404435, 13401850, 13404421); // master valtr 2
    $InitializeEvent(0, 13404406, 13404446, 3403916, 13404426, 13404436, 13401850, 13404421); // valtr beast 2
    
    $InitializeEvent(1, 13404410, SingleplayerSummonSignType.NormalCoop, 3400921, 3402921, 13404421, 13404431, 13404441, 13401800, 10567); // henriett
    $InitializeEvent(2, 13404410, 6, 3400922, 3402922, 13404422, 13404432, 13404442, 13401800, 10562); // master valtr 1
    $InitializeEvent(3, 13404410, 6, 3400923, 3402923, 13404423, 13404433, 13404443, 13401800, 10563); // valtr beast 1
    $InitializeEvent(4, 13404410, 5, 3400924, 3402924, 13404424, 13404434, 13404444, 13401800, 10565); // madaras twin
    $InitializeEvent(5, 13404410, 6, 3400925, 3402925, 13404425, 13404435, 13404445, 13401850, 10562); // master valtr 2
    $InitializeEvent(6, 13404410, 6, 3400926, 3402926, 13404426, 13404436, 13404446, 13401850, 10563); // valtr beast 2
    
    $InitializeEvent(1, 13404450, 3400921, 3402930, 13404421, 13404431, 13404808); // henriett -> ludwig
    $InitializeEvent(2, 13404450, 3400922, 3402931, 13404422, 13404432, 13404808); // master valtr 1 -> ludwig
    $InitializeEvent(3, 13404450, 3400923, 3402931, 13404423, 13404433, 13404808); // valtr beast 1 -> ludwig
    $InitializeEvent(4, 13404450, 3400924, 3402932, 13404424, 13404434, 13404808); // madaras twin -> ludwig
    
    $InitializeEvent(0, 13404550, 3400925, 3402931, 13404425, 13404435, 13404808); // master valtr 2 -> ludwig
    $InitializeEvent(1, 13404550, 3400926, 3402931, 13404426, 13404436, 13404808); // valtr beast 2 -> ludwig
    
    $InitializeEvent(1, 13404460, 3400921, 3402930, 3402800, 3402801, 101130, 13404451, 3402801); // henriett -> ludwig
    $InitializeEvent(2, 13404460, 3400922, 3402931, 3402800, 3402801, 101130, 13404452, 3402801); // master valtr 1 -> ludwig
    $InitializeEvent(3, 13404460, 3400923, 3402931, 3402800, 3402801, 101130, 13404453, 3402801); // valtr beast 1 -> ludwig
    $InitializeEvent(4, 13404460, 3400924, 3402932, 3402800, 3402801, 101130, 13404454, 3402801); // madaras twin -> ludwig
    
    $InitializeEvent(0, 13404560, 3400925, 3402931, 3402800, 3402801, 101130, 13404550, 3402801); // master valtr 2 -> ludwig
    $InitializeEvent(1, 13404560, 3400926, 3402931, 3402800, 3402801, 101130, 13404551, 3402801); // valtr beast 2 -> ludwig
    
    $InitializeEvent(5, 13404450, 3400925, 3402935, 13404425, 13404435, 13404858); // master valtr 2 -> laurence
    $InitializeEvent(6, 13404450, 3400926, 3402935, 13404426, 13404436, 13404858); // valtr beast 2 -> laurence
    
    $InitializeEvent(2, 13404550, 3400921, 3402935, 13404421, 13404431, 13404858); // henriett -> laurence
    $InitializeEvent(3, 13404550, 3400922, 3402935, 13404422, 13404432, 13404858); // master valtr 1 -> laurence
    $InitializeEvent(4, 13404550, 3400923, 3402935, 13404423, 13404433, 13404858); // valtr beast 1 -> laurence
    $InitializeEvent(5, 13404550, 3400924, 3402935, 13404424, 13404434, 13404858); // madaras twin -> laurence
    
    $InitializeEvent(5, 13404460, 3400925, 3402935, 3402850, 3402851, 101130, 13404455, 3402851); // master valtr 2 -> laurence
    $InitializeEvent(6, 13404460, 3400926, 3402935, 3402850, 3402851, 101130, 13404456, 3402851); // valtr beast 2 -> laurence
    
    $InitializeEvent(2, 13404560, 3400921, 3402935, 3402850, 3402851, 101130, 13404552, 3402851); // henriett -> laurence
    $InitializeEvent(3, 13404560, 3400922, 3402935, 3402850, 3402851, 101130, 13404553, 3402851); // master valtr 1 -> laurence
    $InitializeEvent(4, 13404560, 3400923, 3402935, 3402850, 3402851, 101130, 13404554, 3402851); // valtr beast 1 -> laurence
    $InitializeEvent(5, 13404560, 3400924, 3402935, 3402850, 3402851, 101130, 13404555, 3402851); // madaras twin -> laurence
    
    $InitializeEvent(0, 13404470);
    
    $InitializeEvent(0, 13404490, 3400925, 13404425, 13404435, 13404858);
    $InitializeEvent(1, 13404490, 3400926, 13404426, 13404436, 13404858);
    SetEventPoint(3400911, 3402910, 0);
    $InitializeEvent(0, 13401250, 3401250, 0);
    $InitializeEvent(1, 13401250, 3401251, 0);
    $InitializeEvent(2, 13401250, 3401252, 0);
    $InitializeEvent(3, 13401250, 3401253, 0);
    $InitializeEvent(4, 13401250, 3401254, 0);
    $InitializeEvent(5, 13401250, 3401255, 0);
    $InitializeEvent(6, 13401250, 3401256, 0);
    $InitializeEvent(7, 13401250, 3401257, 0);
    $InitializeEvent(8, 13401250, 3401258, 0);
    $InitializeEvent(9, 13401250, 3401259, 0);
    $InitializeEvent(10, 13401250, 3401260, 0);
    $InitializeEvent(11, 13401250, 3401261, 0);
    $InitializeEvent(12, 13401250, 3401262, 0);
    $InitializeEvent(13, 13401250, 3401263, 0);
    $InitializeEvent(14, 13401250, 3401264, 0);
    $InitializeEvent(15, 13401250, 3401265, 0);
    $InitializeEvent(16, 13401250, 3401266, 0);
    $InitializeEvent(17, 13401250, 3401267, 0);
    $InitializeEvent(18, 13401250, 3401268, 0);
    $InitializeEvent(19, 13401250, 3401269, 0);
    $InitializeEvent(20, 13401250, 3401270, 0);
    $InitializeEvent(21, 13401250, 3401271, 0);
    $InitializeEvent(22, 13401250, 3401272, 0);
    $InitializeEvent(23, 13401250, 3401273, 0);
    $InitializeEvent(24, 13401250, 3401274, 0);
    $InitializeEvent(25, 13401250, 3401275, 0);
    $InitializeEvent(26, 13401250, 3401276, 0);
    $InitializeEvent(27, 13401250, 3401277, 0);
    $InitializeEvent(28, 13401250, 3401278, 0);
    $InitializeEvent(29, 13401250, 3401279, 0);
    $InitializeEvent(30, 13401250, 3401280, 0);
    $InitializeEvent(31, 13401250, 3401281, 0);
    $InitializeEvent(32, 13401250, 3401282, 0);
    $InitializeEvent(33, 13401250, 3401283, 0);
    $InitializeEvent(34, 13401250, 3401284, 0);
    $InitializeEvent(35, 13401250, 3401285, 0);
    $InitializeEvent(36, 13401250, 3401286, 0);
    $InitializeEvent(37, 13401250, 3401287, 0);
    $InitializeEvent(38, 13401250, 3401288, 0);
    $InitializeEvent(39, 13401250, 3401289, 0);
    $InitializeEvent(40, 13401250, 3401290, 0);
    $InitializeEvent(41, 13401250, 3401291, 0);
    $InitializeEvent(42, 13401250, 3401292, 0);
    $InitializeEvent(43, 13401250, 3401293, 0);
    $InitializeEvent(0, 13401350, 3401294, 0, 3402547);
    $InitializeEvent(1, 13401350, 3401295, 0, 3402547);
    $InitializeEvent(2, 13401350, 3401296, 0, 3402547);
    $InitializeEvent(3, 13401350, 3401297, 0, 3402547);
    $InitializeEvent(4, 13401350, 3401298, 0, 3402547);
    $InitializeEvent(5, 13401350, 3401299, 0, 3402547);
    $InitializeEvent(6, 13401350, 3401300, 0, 3402547);
    $InitializeEvent(7, 13401350, 3401301, 0, 3402547);
    $InitializeEvent(8, 13401350, 3401302, 0, 3402547);
    $InitializeEvent(9, 13401350, 3401303, 0, 3402547);
    $InitializeEvent(10, 13401350, 3401304, 0, 3402547);
    $InitializeEvent(0, 13400998);
});

// preconstructor
$Event(50, Default, function() {
    // SetEventFlag(1670, OFF);
    // SetEventFlag(1680, ON);
    $InitializeEvent(0, 13400940);
    // SetCharacterBackreadState(3400900, false);
    // ChangeCharacterEnableState(3400900, Enabled);
    $InitializeEvent(0, 13400950, 3400902, 3400903);
});

// Cathedral City D_Multi Confinement Wall
$Event(13400010, Default, function() {
    SetNetworkSyncState(Disabled);
    DeactivateObject(3401801, Disabled);
    DeleteMapSFX(3403801, true);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer)
            || !EventFlag(9471));
    DeactivateObject(3401801, Enabled);
    SpawnMapSFX(3403801);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && EventFlag(9471));
    RestartEvent();
});

// Switching between TGS version and regular version
$Event(13400998, Restart, function() {
    if (!EventFlag(13400999)) {
        ChangeCharacterEnableState(3400316, Disabled);
        ChangeCharacterEnableState(3400509, Disabled);
        ChangeCharacterEnableState(3400550, Disabled);
        ChangeCharacterEnableState(3400143, Disabled);
        ChangeCharacterEnableState(3400144, Disabled);
        ChangeCharacterEnableState(3400142, Disabled);
        ChangeCharacterEnableState(3400141, Disabled);
        ChangeCharacterEnableState(3400145, Disabled);
        ChangeCharacterEnableState(3400146, Disabled);
        ChangeCharacterEnableState(3400147, Disabled);
        ChangeCharacterEnableState(3400148, Disabled);
        ChangeCharacterEnableState(3400155, Disabled);
        ChangeCharacterEnableState(3400452, Disabled);
        ChangeCharacterEnableState(3400453, Disabled);
        ChangeCharacterEnableState(3400461, Disabled);
        ChangeCharacterEnableState(3400462, Disabled);
        ChangeCharacterEnableState(3400470, Disabled);
        ChangeCharacterEnableState(3400471, Disabled);
        DeactivateObject(3401180, Disabled);
        DeactivateObject(3401181, Disabled);
        DeactivateObject(3401182, Disabled);
        DeactivateObject(3401183, Disabled);
        DeactivateObject(3401184, Disabled);
        DeactivateObject(3401185, Disabled);
        DeactivateObject(3401186, Disabled);
        DeactivateObject(3401187, Disabled);
        DeactivateObject(3401188, Disabled);
        DeactivateObject(3401189, Disabled);
        DeactivateObject(3401190, Disabled);
        DeactivateObject(3401191, Disabled);
        DeactivateObject(3401192, Disabled);
        DeactivateObject(3401193, Disabled);
        DeactivateObject(3401194, Disabled);
        SetObjectTreasureState(3401180, Disabled);
        SetObjectTreasureState(3401181, Disabled);
        SetObjectTreasureState(3401182, Disabled);
        SetObjectTreasureState(3401183, Disabled);
        SetObjectTreasureState(3401184, Disabled);
        SetObjectTreasureState(3401185, Disabled);
        SetObjectTreasureState(3401186, Disabled);
        SetObjectTreasureState(3401187, Disabled);
        SetObjectTreasureState(3401188, Disabled);
        SetObjectTreasureState(3401189, Disabled);
        SetObjectTreasureState(3401190, Disabled);
        SetObjectTreasureState(3401191, Disabled);
        SetObjectTreasureState(3401192, Disabled);
        SetObjectTreasureState(3401193, Disabled);
        ChangeCharacterEnableState(3400920, Disabled);
        DeleteMapSFX(3403910, true);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(3400601, Disabled);
    ChangeCharacterEnableState(3400552, Disabled);
    ChangeCharacterEnableState(3400511, Disabled);
    ChangeCharacterEnableState(3400409, Disabled);
    ChangeCharacterEnableState(3400412, Disabled);
    ChangeCharacterEnableState(3400413, Disabled);
    ChangeCharacterEnableState(3400510, Disabled);
    ChangeCharacterEnableState(3400465, Disabled);
    ChangeCharacterEnableState(3400466, Disabled);
    ChangeCharacterEnableState(3400467, Disabled);
    ChangeCharacterEnableState(3400468, Disabled);
    ChangeCharacterEnableState(3400469, Disabled);
    ChangeCharacterEnableState(3400655, Disabled);
    DeactivateObject(3401195, Disabled);
    DeactivateObject(3401196, Disabled);
    DeactivateObject(3401197, Disabled);
    DeactivateObject(3401198, Disabled);
    DeactivateObject(3401199, Disabled);
    DeactivateObject(3401200, Disabled);
    DeactivateObject(3401201, Disabled);
    DeactivateObject(3401202, Disabled);
    DeactivateObject(3401203, Disabled);
    DeactivateObject(3401204, Disabled);
    DeactivateObject(3401205, Disabled);
    DeactivateObject(3401206, Disabled);
    DeactivateObject(3401207, Disabled);
    SetObjectTreasureState(3401195, Disabled);
    SetObjectTreasureState(3401196, Disabled);
    SetObjectTreasureState(3401197, Disabled);
    SetObjectTreasureState(3401198, Disabled);
    SetObjectTreasureState(3401199, Disabled);
    SetObjectTreasureState(3401200, Disabled);
    SetObjectTreasureState(3401201, Disabled);
    SetObjectTreasureState(3401202, Disabled);
    SetObjectTreasureState(3401203, Disabled);
    SetObjectTreasureState(3401204, Disabled);
    SetObjectTreasureState(3401205, Disabled);
    SetObjectTreasureState(3401206, Disabled);
    SetObjectTreasureState(3401207, Disabled);
});

// Corpse moves_XX
$Event(13401250, Default, function(entityId, animationId) {
    SetNetworkSyncState(Disabled);
    if (!EntityInRadiusOfEntity(10000, entityId, 5)) {
        ForceAnimationPlayback(entityId, 6, false, true, false);
        WaitFor(EntityInRadiusOfEntity(10000, entityId, 5));
    }
L0:
    ForceAnimationPlayback(entityId, animationId, false, true, false);
    RestartEvent();
});

// Corpses move_all at once_XX
$Event(13401350, Default, function(entityId, animationId, areaEntityId) {
    SetNetworkSyncState(Disabled);
    if (!InArea(10000, areaEntityId)) {
        ForceAnimationPlayback(entityId, 6, false, true, false);
        WaitFor(EntityInRadiusOfEntity(10000, entityId, 5));
    }
L0:
    WaitRandomTimeFrames(0, 75);
    ForceAnimationPlayback(entityId, animationId, false, true, false);
    RestartEvent();
});

// Delete celestial sphere
$Event(13401500, Default, function() {
    if (!EventFlag(9469)) {
        DeactivateObject(3400600, Disabled);
        WaitFor(EventFlag(9469));
    }
L0:
    ActivateMapPart(3404200, Disabled);
    ActivateMapPart(3404201, Disabled);
    ActivateMapPart(3404202, Disabled);
    ActivateMapPart(3404203, Disabled);
    DeleteMapSFX(3403600, true);
    DeleteMapSFX(3403601, true);
    DeleteMapSFX(3403602, true);
    DeactivateObject(3400600, Enabled);
});

// Warp from Cathedral City A
$Event(13401000, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12401000));
    SetEventFlag(12401000, OFF);
    SetSpEffect(10000, 110, false);
    SetSpEffect(10000, 111, false);
    SetSpEffect(10000, 112, false);
    SetSpEffect(10000, 113, false);
    SetSpEffect(10000, 114, false);
    SetSpEffect(10000, 115, false);
    SetSpEffect(10000, 116, false);
    SetPlayerRespawnPoint(3402958);
    EndIf(ThisEvent());
    $InitializeEvent(0, 9350, 2);
});

// Cathedral Town D_Appearance Widow_Appearance_XX
$Event(13404700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    onlineFlagMapChrSp &= IsOnline() && !EventFlag(eventFlagId2) && !EventFlag(eventFlagId3) && PlayerInMap(34, 0);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(eventFlagId4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagMapChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagMapChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(eventFlagId4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
});

// Cathedral Town D_Apparition Widow_Ring the Bell_XX
$Event(13404710, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId2)
            && PlayerInMap(34, 0)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(chrEntityId, 9100, false);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// Cathedral Town D_Apparition Widow_Stop the Bell_XX
$Event(13404720, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && EventFlag(eventFlagId3)
            && (EventFlag(eventFlagId2)
                || NumberOfClientsOfType(ClientType.Invader) >= 1
                || !PlayerInMap(34, 0)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(chrEntityId, 9100);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, OFF);
    RestartEvent();
});

// Cathedral Town D_Appearance Widow_Disappearance_XX
$Event(13404730, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    hp = HPRatio(chrEntityId) == 0;
    flag = EventFlag(eventFlagId4) || EventFlag(13404860) || EventFlag(eventFlagId7);
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId6) && (hp || flag));
    SetEventFlag(eventFlagId2, ON);
    if (!flag.Passed) {
        SetEventFlag(eventFlagId5, ON);
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
});

// Cathedral City D_Same area determination_First half
$Event(13404740, Restart, function() {
    cond = PlayerStandingOnHit(3404000)
        || PlayerStandingOnHit(3404001)
        || PlayerStandingOnHit(3404002)
        || PlayerStandingOnHit(3404003)
        || PlayerStandingOnHit(3404004)
        || PlayerStandingOnHit(3404005)
        || PlayerStandingOnHit(3404006)
        || PlayerStandingOnHit(3404007)
        || PlayerStandingOnHit(3404008)
        || PlayerStandingOnHit(3404009);
    WaitFor(CharacterType(10000, TargetType.Alive) && cond);
    SetEventFlag(13404741, ON);
    hit = PlayerStandingOnHit(3404000)
        || PlayerStandingOnHit(3404001)
        || PlayerStandingOnHit(3404002)
        || PlayerStandingOnHit(3404003)
        || PlayerStandingOnHit(3404004)
        || PlayerStandingOnHit(3404005)
        || PlayerStandingOnHit(3404006)
        || PlayerStandingOnHit(3404007)
        || PlayerStandingOnHit(3404008)
        || PlayerStandingOnHit(3404009);
    WaitFor(CharacterType(10000, TargetType.Alive) && !cond);
    SetEventFlag(13404741, OFF);
    RestartEvent();
});

// Cathedral City D_Same area determination_Second half
$Event(13404742, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(3404020)
                || PlayerStandingOnHit(3404021)
                || PlayerStandingOnHit(3404022)
                || PlayerStandingOnHit(3404023)
                || PlayerStandingOnHit(3404024)
                || PlayerStandingOnHit(3404025)
                || PlayerStandingOnHit(3404026)
                || PlayerStandingOnHit(3404027)
                || PlayerStandingOnHit(3404028)
                || PlayerStandingOnHit(3404029)
                || PlayerStandingOnHit(3404030)
                || PlayerStandingOnHit(3404031)
                || PlayerStandingOnHit(3404032)
                || PlayerStandingOnHit(3404033)
                || PlayerStandingOnHit(3404034)
                || PlayerStandingOnHit(3404035)
                || PlayerStandingOnHit(3404036)
                || PlayerStandingOnHit(3404037)
                || PlayerStandingOnHit(3404038)
                || PlayerStandingOnHit(3404039)
                || PlayerStandingOnHit(3404040)
                || PlayerStandingOnHit(3404041)
                || PlayerStandingOnHit(3404042)
                || PlayerStandingOnHit(3404043)
                || PlayerStandingOnHit(3404044)
                || PlayerStandingOnHit(3404045)));
    SetEventFlag(13404743, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(3404020)
                || PlayerStandingOnHit(3404021)
                || PlayerStandingOnHit(3404022)
                || PlayerStandingOnHit(3404023)
                || PlayerStandingOnHit(3404024)
                || PlayerStandingOnHit(3404025)
                || PlayerStandingOnHit(3404026)
                || PlayerStandingOnHit(3404027)
                || PlayerStandingOnHit(3404028)
                || PlayerStandingOnHit(3404029)
                || PlayerStandingOnHit(3404030)
                || PlayerStandingOnHit(3404031)
                || PlayerStandingOnHit(3404032)
                || PlayerStandingOnHit(3404033)
                || PlayerStandingOnHit(3404034)
                || PlayerStandingOnHit(3404035)
                || PlayerStandingOnHit(3404036)
                || PlayerStandingOnHit(3404037)
                || PlayerStandingOnHit(3404038)
                || PlayerStandingOnHit(3404039)
                || PlayerStandingOnHit(3404040)
                || PlayerStandingOnHit(3404041)
                || PlayerStandingOnHit(3404042)
                || PlayerStandingOnHit(3404043)
                || PlayerStandingOnHit(3404044)
                || PlayerStandingOnHit(3404045)));
    SetEventFlag(13404743, OFF);
    RestartEvent();
});

// Ludwig_Boss Defeat
$Event(13401800, Default, function() {
    if (EventFlag(9471)) {
        ChangeCharacterEnableState(3400800, Disabled);
        ChangeCharacterEnableState(3400801, Disabled);
        ForceCharacterDeath(3400800, false);
        ForceCharacterDeath(3400801, false);
        DeactivateObject(3401800, Disabled);
        DeleteMapSFX(3403800, true);
        EndEvent();
    }
L0:
    if (EventFlag(ludwig_defeat+15)) {
        WaitFor(CharacterDead(3400800) && CharacterDead(3400801));
    } else {
        chr |= CharacterDead(3400800);
        if (!EventFlag(13400999)) {
            chr2 = CharacterDead(3400801);
            chr |= chr2;
        }
        WaitFor(chr);
    }
    DisplayBanner(TextBannerType.DemonKilled); // ludwig defeated
    DeactivateObject(3401800, Disabled);
    DeleteMapSFX(3403800, true);
    SetLockcamSlotNumber(34, 0, 0);
    WaitFixedTimeSeconds(3);
    if (EventFlag(ludwig_defeat+15)) {
        AwardItemLot(17030);
    } else if (EventFlag(ludwig_defeat+13)) {
        AwardItemLot(17020);
    }
    if (!chr2.Passed) {
        HandleBossDefeat(3400800);
    } else {
        HandleBossDefeat(3400801);
    }
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        if (EventFlag(13400999)) {
            WaitFixedTimeSeconds(3);
            PlayCutsceneToPlayer(34000040, CutscenePlayMode.Unskippable, 10000);
            WaitFixedTimeFrames(1);
            Missing(0);
        }
        AwardAchievement(36);
        $InitializeEvent(0, 9350, 3);
        if (!EventFlag(6674)) {
            AwardItemLot(3401800);
        } else {
            AwardItemLot(3401802);
        }
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
        SetEventFlag(9471, ON);
        EndTimeMeasurement(9340000);
        EndTimeMeasurement(9340001);
        EndTimeMeasurement(9340010);
        CreatePlaylog(0);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 12, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(ludwig_defeat+13)) {
            $InitializeEvent(ludwig_offset, 10007800, ludwig_lamp_id+1000, 834000, 3);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Ludo Week_Host enters boss room_First battle
$Event(13404811, Default, function() {
    EndIf(EventFlag(9471));
    EndIf(EventFlag(13401801));
    ChangeCharacterEnableState(3400800, Disabled);
    WaitFor(
        !EventFlag(13401800)
            && !EventFlag(13401801)
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 3402805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(13404810, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
});

// Ludo Week_Host enters boss room_First battle_Second half
$Event(13401801, Default, function() {
    EndIf(EventFlag(9471));
    EndIf(ThisEvent());
    if (!CharacterType(10000, TargetType.BlackPhantom)) {
        WaitFor(
            !EventFlag(13401800)
                && !ThisEvent()
                && EventFlag(13404811)
                && CharacterType(10000, TargetType.Alive)
                && InArea(10000, 3402805));
        if (!EventFlag(ludwig_defeat+13) || EventFlag(12100866)) {
            if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
                PlayCutsceneToPlayer(34000020, CutscenePlayMode.Skippable, 10000);
            } else if (!HasMultiplayerState(MultiplayerState.Client)) {
                PlayCutsceneToPlayer(34000020, CutscenePlayMode.Unskippable, 10000);
            } else {
                PlayCutsceneToPlayer(34000020, CutscenePlayMode.Unskippable, 10000);
            }
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetEventFlag(13404808, ON);
        ChangeCharacterEnableState(3400800, Enabled);
        EndIf(EventFlag(9344));
        $InitializeEvent(0, 9350, 1);
        SetEventFlag(9344, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Ludwig_The corpse is frightened
$Event(13401802, Default, function() {
    EndIf(EventFlag(13401803));
    EndIf(EventFlag(13401800));
    SetCharacterInvincibility(3400810, Enabled);
    WaitFor(EventFlag(13401801));
    SetSpEffect(3400810, 5401, false);
    SetCharacterInvincibility(3400810, Disabled);
    ForceAnimationPlayback(3400810, 3000, false, false, false);
    WaitFor(!CharacterDead(3400810) && EventFlag(13401800));
    ForceAnimationPlayback(3400810, 7000, false, false, false);
});

// Ludwig_corpse is dead
$Event(13401803, Restart, function() {
    if (ThisEvent()) {
        ForceCharacterTreasure(3400810);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3400810));
    WaitFixedTimeSeconds(0);
});

// Ludwig Week_Processing for guests entering at different times
$Event(13401804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13404808));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(3400800, Enabled);
    SetEventFlag(13404808, ON);
    SetEventFlag(13401801, ON);
});

// Ludo Week_Host enters boss room_Rematch
$Event(13404800, Default, function() {
    EndIf(EventFlag(9471));
    if (!EventFlag(13401801)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3401800, Disabled);
            DeleteMapSFX(3403800, false);
        }
        WaitFor(!EventFlag(13401800) && EventFlag(13401801));
        DeactivateObject(3401800, Enabled);
        SpawnMapSFX(3403800);
    }
L0:
    flagChrAct = !EventFlag(13401800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3400800, 3401800);
    flag = EventFlag(13401800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3402800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3402801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13404808, ON);
    }
    RestartEvent();
});

// Ludo Week_Guest enters boss room
$Event(13404801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(9471));
    WaitFor(
        !EventFlag(13401800)
            && EventFlag(13401801)
            && EventFlag(13404808)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3400800, 3401800));
    RotateCharacter(10000, 3402800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3402801);
    cond = ElapsedSeconds(2);
    WaitFor(chrArea || cond);
    if (!cond.Passed) {
        SetEventFlag(13404809, ON);
    }
    RestartEvent();
});

// Ludwig_Boss starts moving
$Event(13404802, Default, function() {
    EndIf(EventFlag(9471));
    SetCharacterAIState(3400800, Disabled);
    SetCharacterAIState(3400801, Disabled);
    SetCharacterHPBarDisplay(3400800, Disabled);
    SetCharacterHPBarDisplay(3400801, Disabled);
    if (!EventFlag(ludwig_defeat+15)) {
        CreateReferredDamagePair(3400800, 3400801);
    }
    if (EventFlag(13400999)) {
        SetSpEffect(3400800, 8040, false);
        SetSpEffect(3400801, 8040, false);
    }
    if (!ThisEvent()) {
        WaitFor(EventFlag(13404808) || EventFlag(ludwig_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(13404810)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(3400800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(3400801, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13404810, ON);
    SetEventFlag(13404808, ON);
    GotoIf(L1, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 0);
    GotoIf(L2, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 1);
    GotoIf(L3, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 2);
    GotoIf(L4, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 3);
    GotoIf(L5, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) > 3);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L6);
L2:
    SetSpEffect(3400800, 7500, true);
    SetSpEffect(3400801, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400801);
    Goto(L6);
L3:
    SetSpEffect(3400800, 7501, true);
    SetSpEffect(3400801, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400801);
    Goto(L6);
L4:
    SetSpEffect(3400800, 7502, true);
    SetSpEffect(3400801, 7502, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400801);
    Goto(L6);
L5:
    SetSpEffect(3400800, 7503, true);
    SetSpEffect(3400801, 7503, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400801);
    Goto(L6);
L6:
    if (EventFlag(ludwig_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    if (EventFlag(ludwig_defeat+15)) {
        SetCharacterAIState(3400800, Enabled);
        SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetCharacterAIState(3400801, Enabled);
        SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.AlwaysUpdate);
        WarpCharacterAndCopyFloor(3400801, TargetEntityType.Area, 3402806, -1, 3400800);
        SetCharacterGravity(3400801, Enabled);
        SetCharacterAnimationState(3400801, Enabled);
        ClearSpEffect(3400801, 5300);
        SetSpEffect(3400801, 5333, false);
        SetCharacterAIState(3400801, Enabled);
        DisplayBossHealthBar(Enabled, 3400800, 1, 451000);
        DisplayBossHealthBar(Enabled, 3400801, 0, 451005);
    } else if (!EventFlag(13404825)) {
        SetCharacterAIState(3400800, Enabled);
        SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(3400801, true, CharacterUpdateFrequency.Every2Frames);
        DisplayBossHealthBar(Enabled, 3400800, 0, 451000);
    } else {
        SetCharacterAIState(3400801, Enabled);
        SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.NoUpdate);
        SetNetworkUpdateRate(3400801, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisplayBossHealthBar(Enabled, 3400801, 0, 451005);
    }
    CreatePlaylog(46);
    StartTimeMeasurement(3400010, 62, Enabled);
});

// Ludo Week_Boss BGM_ON
$Event(13404803, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3403802, Disabled);
    SetMapSoundState(3403803, Disabled);
    EndIf(EventFlag(9471));
    if (!ThisEvent()) {
        flagArea &= !EventFlag(13401800) && EventFlag(13404802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13404809);
        }
        flagArea &= InArea(10000, 3402802);
        WaitFor(flagArea);
        EnableBossMapSound(3403802, Enabled);
        flagArea2 &= EventFlag(13404824);
    }
L0:
    flagArea2 &= !EventFlag(13401800) && EventFlag(13404802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(13404809);
    }
    flagArea2 &= InArea(10000, 3402802);
    WaitFor(flagArea2);
    EnableBossMapSound(3403802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3403803, Enabled);
});

// Ludo Week_Boss Camera
$Event(13404804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(9471));
    WaitFor(EventFlag(13404825));
    WaitFor(!CharacterDead(3400801) && EntityInRadiusOfEntity(10000, 3400801, 9));
    SetLockcamSlotNumber(34, 0, 1);
    WaitFor(!CharacterDead(3400801) && !EntityInRadiusOfEntity(10000, 3400801, 12));
    SetLockcamSlotNumber(34, 0, 0);
    RestartEvent();
});

// Ludo Week_Boss BGM_OFF
$Event(13404805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(9471));
    WaitFor(EventFlag(13401800));
    EnableBossMapSound(3403802, Disabled);
    EnableBossMapSound(3403803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Ludwig_Ineffective around fog wall in other people's world
$Event(13404806, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3401800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Ludwig_Ineffective against fog wall in other people's world 2
$Event(13404807, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3401800, 6)
            && EntityInRadiusOfEntity(10000, 3401800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Ludo Week_Heat Up 0
$Event(13404820, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.9)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.9))
        && CharacterHasEventMessage(3400800, 10);
    chr = CharacterHasEventMessage(3400800, 20);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 100, 0);
    WaitFor(CharacterHasEventMessage(3400800, 20));
    RequestCharacterAICommand(3400800, -1, 0);
});

// Ludo Week_Heat Up 1
$Event(13404821, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.8)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.85))
        && CharacterHasEventMessage(3400800, 10)
        && EventFlag(13404820);
    chr = CharacterHasEventMessage(3400800, 30);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 101, 0);
    WaitFor(CharacterHasEventMessage(3400800, 30));
    RequestCharacterAICommand(3400800, -1, 0);
});

// Ludo Week_Heat Up 2
$Event(13404822, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.7)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.8))
        && CharacterHasEventMessage(3400800, 10)
        && EventFlag(13404821);
    chr = CharacterHasEventMessage(3400800, 40);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 102, 0);
    WaitFor(CharacterHasEventMessage(3400800, 40));
    RequestCharacterAICommand(3400800, -1, 0);
});

// Ludo Week_Heat Up 3
$Event(13404823, Default, function() {
    EndIf(EventFlag(9471));
    flagHpChr = ((EventFlag(13400999) && HPRatio(3400800) < 0.5)
        || (!EventFlag(13400999) && HPRatio(3400800) < 0.75))
        && CharacterHasEventMessage(3400800, 10)
        && EventFlag(13404822);
    chr = CharacterHasEventMessage(3400800, 50);
    WaitFor(flagHpChr || chr);
    EndIf(chr.Passed);
    RequestCharacterAICommand(3400800, 103, 0);
    WaitFor(CharacterHasEventMessage(3400800, 50));
    RequestCharacterAICommand(3400800, -1, 0);
});

// Ludo Week_Heat Up 4
$Event(13404824, Default, function() {
    EndIf(EventFlag(9471));
    EndIf(EventFlag(13404825));
    WaitFor(HPRatio(3400800) < 0.5 && HPRatio(3400800) > 0);
    SetEventFlag(9180, ON);
});

// Ludo Week_Heat Up 4_Second half
$Event(13404825, Default, function() {
    EndIf(EventFlag(9471) || EventFlag(ludwig_defeat+15));
    if (ThisEvent()) {
        ChangeCharacterEnableState(3400800, Disabled);
        EndEvent();
    }
L0:
    SetCharacterGravity(3400801, Disabled);
    SetCharacterAnimationState(3400801, Disabled);
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13404824));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneAndWarpPlayer(34000030, CutscenePlayMode.Skippable, 3402807, 34, 0, 10000);
    } else if (!HasMultiplayerState(MultiplayerState.Client)) {
        PlayCutsceneAndWarpPlayer(34000030, CutscenePlayMode.Unskippable, 3402807, 34, 0, 10000);
    } else {
        PlayCutsceneToPlayer(34000030, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    DisplayBossHealthBar(Disabled, 3400800, 0, 451000);
    SetEventFlag(9180, OFF);
    ChangeCharacterEnableState(3400800, Disabled);
    SetNetworkUpdateRate(3400801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(3400800, true, CharacterUpdateFrequency.NoUpdate);
    CharacterWarpRequest(3400800, TargetEntityType.Area, 3402900, -1);
    WarpCharacterAndCopyFloor(3400801, TargetEntityType.Area, 3402806, -1, 3400800);
    SetCharacterGravity(3400801, Enabled);
    SetCharacterAnimationState(3400801, Enabled);
    ForceAnimationPlayback(3400801, 7000, false, false, false);
    WaitFixedTimeFrames(96);
    ClearSpEffect(3400801, 5300);
    SetSpEffect(3400801, 5333, false);
    SetCharacterAIState(3400801, Enabled);
    DisplayBossHealthBar(Enabled, 3400801, 0, 451005);
});

// Ludwig_Part damage_XX
$Event(13404830, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, animationId, timeFrames) {
    EndIf(EventFlag(9471));
    CreateNPCPart(3400800, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(3400800, npcPartId2, 72, 72);
    hp = NPCPartHP(3400800, npcPartId2) <= 0;
    hpFlag = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(hp || hpFlag);
    EndIf(hpFlag.Passed);
    CreateNPCPart(3400800, npcPartId, npcPartGroupIdx, 9999999, 1.5, 1, false, false);
    SetNPCPartSEAndSFX(3400800, npcPartId2, 73, 73);
    ForceAnimationPlayback(3400800, animationId, false, false, false);
    SetSpEffect(3400800, spEffectId, false);
    WaitFixedTimeFrames(timeFrames);
    cond = ElapsedFrames(timeFrames);
    hpFlag2 = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(cond || hpFlag2);
    EndIf(hpFlag2.Passed);
    RequestCharacterAIReplan(3400800);
    cond2 = ElapsedSeconds(5);
    hpFlag3 = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(cond2 || hpFlag3);
    EndIf(hpFlag3.Passed);
    SetNPCPartHP(3400800, npcPartId2, -1, true);
    ClearSpEffect(3400800, spEffectId);
    WaitFixedTimeFrames(10);
    cond3 = ElapsedFrames(10);
    hpFlag4 = HPRatio(3400800) <= 0 || EventFlag(13404825);
    WaitFor(cond3 || hpFlag4);
    EndIf(hpFlag4.Passed);
    RestartEvent();
});

// Ludo Week_Human mode collapse
$Event(13404835, Default, function() {
    EndIf(EventFlag(9471));
    WaitFor(HPRatio(3400801) < 0.35 && HPRatio(3400801) > 0);
    ForceAnimationPlayback(3400801, 7002, false, false, false);
    RequestCharacterAICommand(3400801, 110, 0);
    RequestCharacterAIReplan(3400801);
    WaitFor(HPRatio(3400801) < 0.067 && HPRatio(3400801) > 0);
    ForceAnimationPlayback(3400801, 7003, false, false, false);
    WaitFor(HPRatio(3400801) < 0.033 && HPRatio(3400801) > 0);
    ForceAnimationPlayback(3400801, 7002, false, false, false);
});

// Ludwig_Big Jump
$Event(13404840, Default, function() {
    EndIf(EventFlag(9471));
    WaitFor(CharacterHasEventMessage(3400800, 100));
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.5);
    ChangeCharacterEnableState(3400800, Disabled);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(0.1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 645114);
    WaitFixedTimeSeconds(1.2);
    ChangeCharacterEnableState(3400800, Enabled);
    IssueShortWarpRequest(3400800, TargetEntityType.Character, 10000, 236);
    ForceAnimationPlayback(3400800, 3017, false, false, false);
    RestartEvent();
});

// Ludwig_Hyper Aura Slash
$Event(13404841, Default, function() {
    EndIf(EventFlag(9471));
    WaitFor(CharacterHasEventMessage(3400801, 300));
    RequestCharacterAICommand(3400801, -1, 0);
    RequestCharacterAIReplan(3400801);
});

// Vicar Ω_defeat the boss
$Event(13401850, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(3403802, Disabled);
        SetMapSoundState(3403803, Disabled);
        ChangeCharacterEnableState(3400850, Disabled);
        ForceCharacterDeath(3400850, true);
        ChangeCharacterEnableState(3400851, Disabled);
        ForceCharacterDeath(3400851, true);
        DeactivateObject(3401850, Disabled);
        DeleteMapSFX(3403850, true);
        EndEvent();
    }
L0:
    if (EventFlag(laurence_defeat+15)) {
        WaitFor(CharacterDead(3400850) && CharacterDead(3400851));
    } else {
        WaitFor(CharacterDead(3400850));
    }
    SetEventFlag(3400, ON);
    DisplayBanner(TextBannerType.DemonKilled); // lawrence defeated
    DeactivateObject(3401850, Disabled);
    DeleteMapSFX(3403850, true);
    SetLockcamSlotNumber(34, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3400850);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        AwardAchievement(39);
        $InitializeEvent(0, 9350, 3);
        if (!EventFlag(6673)) {
            AwardItemLot(3401850);
        } else {
            AwardItemLot(3401852);
        }
        SetEventFlag(3400, ON);
        SetEventFlag(3401, ON);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, ON);
        EndTimeMeasurement(3400020);
        EndTimeMeasurement(3400021);
        EndTimeMeasurement(3400030);
        CreatePlaylog(0);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 80, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 80, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 80, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 80, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(laurence_defeat+13)) {
            AwardItemLot(17020);
            $InitializeEvent(laurence_offset, 10007800, laurence_lamp_id+1000, 834002, 3);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Vicar Ω_Host enters boss room_First battle
$Event(13404861, Restart, function() {
    EndIf(EventFlag(13401850));
    if (EventFlag(13401851)) {
        IssueShortWarpRequest(3400850, TargetEntityType.Area, 3402853, -1);
        EndEvent();
    }
L0:
    SetCharacterMaphits(3400850, true);
    SetCharacterGravity(3400850, Disabled);
    SetCharacterInvincibility(3400850, Enabled);
    ForceAnimationPlayback(3400850, 7002, true, false, false);
    WaitFor(
        !EventFlag(13401850)
            && !EventFlag(13401851)
            && PlayerHasItem(ItemType.Goods, 4014)
            && InArea(10000, 3402855));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(13404860, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
});

// Parish Chief Ω_Host enters boss room_First battle_Second half
$Event(13401851, Restart, function() {
    EndIf(EventFlag(13401850));
    EndIf(ThisEvent());
    if (!CharacterType(10000, TargetType.BlackPhantom)) {
        WaitFor(
            !EventFlag(13401850)
                && !EventFlag(13401851)
                && EventFlag(13404861)
                && PlayerHasItem(ItemType.Goods, 4014)
                && InArea(10000, 3402855));
        if (!EventFlag(laurence_defeat+13) || EventFlag(12100866)) {
            if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
                PlayCutsceneAndWarpPlayer(34000010, CutscenePlayMode.Skippable, 3402856, 34, 0, 10000);
            } else if (!HasMultiplayerState(MultiplayerState.Client)) {
                PlayCutsceneAndWarpPlayer(34000010, CutscenePlayMode.Unskippable, 3402856, 34, 0, 10000);
            } else {
                PlayCutsceneToPlayer(34000010, CutscenePlayMode.Unskippable, 10000);
            }
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetEventFlag(13404858, ON);
        IssueShortWarpRequest(3400850, TargetEntityType.Area, 3402853, -1);
        SetCharacterGravity(3400850, Enabled);
        SetCharacterInvincibility(3400850, Disabled);
        SetCharacterMaphits(3400850, false);
        ForceAnimationPlayback(3400850, 3029, false, false, false);
        EndIf(EventFlag(9302));
        $InitializeEvent(0, 9350, 1);
        SetEventFlag(9302, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Parishmaster Ω_Processing for guests entering at different times
$Event(13401853, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13404858));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetCharacterGravity(3400850, Enabled);
    SetCharacterInvincibility(3400850, Disabled);
    SetCharacterMaphits(3400850, false);
    SetEventFlag(13404858, ON);
    SetEventFlag(13401851, ON);
});

// Vicar Ω_Host enters boss room_Rematch
$Event(13404850, Default, function() {
    EndIf(EventFlag(13401850));
    if (!EventFlag(13401851)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3401850, Disabled);
            DeleteMapSFX(3403850, false);
        }
        WaitFor(!EventFlag(13401850) && EventFlag(13401851));
        DeactivateObject(3401850, Enabled);
        SpawnMapSFX(3403850);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3400850, 3401850)
        && !EventFlag(13401850);
    flag = EventFlag(13401850);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3402850, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3402851);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13404858, ON);
    }
    RestartEvent();
});

// Parishmaster Ω_Guest enters boss room
$Event(13404851, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13401850));
    WaitFor(
        !EventFlag(13401850)
            && EventFlag(13401851)
            && EventFlag(13404858)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3400850, 3401850));
    RotateCharacter(10000, 3402850, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3402851);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13404859, ON);
    }
    RestartEvent();
});

// Parishmaster Ω_Boss begins to move
$Event(13404852, Restart, function() {
    EndIf(EventFlag(13401850));
    SetCharacterAIState(3400850, Disabled);
    SetCharacterHPBarDisplay(3400850, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(13404858) || EventFlag(laurence_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(13404860)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(3400850, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13404860, ON);
    SetEventFlag(13404858, ON);
    GotoIf(L1, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 0);
    GotoIf(L2, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 1);
    GotoIf(L3, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 2);
    GotoIf(L4, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) == 3);
    GotoIf(L5, CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) > 3);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L6);
L2:
    SetSpEffect(3400850, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400850);
    Goto(L6);
L3:
    SetSpEffect(3400850, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400850);
    Goto(L6);
L4:
    SetSpEffect(3400850, 7502, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400850);
    Goto(L6);
L5:
    SetSpEffect(3400850, 7503, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3400850);
    Goto(L6);
L6:
    if (EventFlag(laurence_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(3400850, Enabled);
    DisplayBossHealthBar(Enabled, 3400850, 1, 450000);
    CreatePlaylog(46);
    StartTimeMeasurement(3400030, 62, Enabled);
});

// Parish Chief Ω_Boss BGM_ON
$Event(13404853, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3403852, Disabled);
    SetMapSoundState(3403853, Disabled);
    EndIf(EventFlag(13401850));
    if (!ThisEvent()) {
        flagArea &= !EventFlag(13401850) && EventFlag(13404852);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13404859);
        }
        flagArea &= InArea(10000, 3402852);
        WaitFor(flagArea);
        EnableBossMapSound(3403852, Enabled);
        chrFlagArea &= CharacterHasEventMessage(3400850, 400);
    }
L0:
    chrFlagArea &= !EventFlag(13401850) && EventFlag(13404852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(13404859);
    }
    chrFlagArea &= InArea(10000, 3402852);
    WaitFor(chrFlagArea);
    EnableBossMapSound(3403852, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3403853, Enabled);
});

// Headmaster Ω_Boss Camera
$Event(13404854, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13401850));
    WaitFor(!CharacterDead(3400850) && EntityInRadiusOfEntity(10000, 3400850, 14));
    SetLockcamSlotNumber(34, 0, 1);
    WaitFor(!CharacterDead(3400850) && !EntityInRadiusOfEntity(10000, 3400850, 17));
    SetLockcamSlotNumber(34, 0, 0);
    RestartEvent();
});

// Parish Chief Ω_Boss BGM_OFF
$Event(13404855, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13401850));
    WaitFor(EventFlag(13401850));
    EnableBossMapSound(3403852, Disabled);
    EnableBossMapSound(3403853, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Headmaster Ω_Invalid around fog wall in other people's world
$Event(13404856, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3401850, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Headmaster Ω_Invalidity per fog wall in other people's world 2
$Event(13404857, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3401850, 6)
            && EntityInRadiusOfEntity(10000, 3401850, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Vicar Ω_Part damage_XX
$Event(13404870, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, spEffectId, spEffectId2, npcPartHP, animationId) {
    EndIf(EventFlag(13401850));
    CreateNPCPart(3400850, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(3400850, npcPartId2, 64, 64);
    hp = NPCPartHP(3400850, npcPartId2) <= 0;
    hp2 = HPRatio(3400850) <= 0;
    sp = CharacterHasSpEffect(3400850, 5402);
    WaitFor(hp || hp2 || sp);
    EndIf(hp2.Passed);
    EndIf(sp.Passed);
    CreateNPCPart(3400850, npcPartId, npcPartGroupIdx, 9999999, 1, 1, false, false);
    SetNPCPartSEAndSFX(3400850, npcPartId2, 65, 65);
    ForceAnimationPlayback(3400850, animationId, false, false, false);
    SetSpEffect(3400850, spEffectId, false);
    ClearSpEffect(3400850, spEffectId2);
    RequestCharacterAIReplan(3400850);
    cond = ElapsedSeconds(30);
    sp2 = CharacterHasSpEffect(3400850, 5402);
    WaitFor(cond || sp2);
    EndIf(sp2.Passed);
    RequestCharacterAICommand(3400850, 100, 1);
    RequestCharacterAIReplan(3400850);
    chr = CharacterHasEventMessage(3400850, 300);
    sp3 = CharacterHasSpEffect(3400850, 5402);
    WaitFor(chr || sp3);
    if (!sp3.Passed) {
        SetNPCPartHP(3400850, npcPartId2, -1, true);
        ClearSpEffect(3400850, spEffectId);
        SetSpEffect(3400850, spEffectId2, false);
    }
L0:
    RequestCharacterAICommand(3400850, -1, 1);
    RequestCharacterAIReplan(3400850);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Vicar Ω_Half-body amputation
$Event(13404875, Default, function() {
    EndIf(EventFlag(laurence_defeat+15));
    if (!ThisEvent()) {
        WaitFor(CharacterHasEventMessage(3400850, 400));
    }
L0:
    ChangeCharacterHitmask(3400850, 10, ON);
});

// Msg_XX when examining one-way door
$Event(13401200, Default, function(actionButtonParameterId, areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(actionButtonParameterId, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
        WaitFixedTimeSeconds(0);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// Door release process_XX
$Event(13401210, Default, function(objEntityId, objactEventFlag, animationId, objParameterId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId, objParameterId, Disabled);
        NotifySoundDampeningOfDoorEvent(objEntityId, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// Open SC door
$Event(13401220, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(3401100, 1);
        SetObjactState(3401110, 3400020, Disabled);
        NotifySoundDampeningOfDoorEvent(3401100, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(13400002));
    SetObjactState(3401110, 3400020, Disabled);
    ForceAnimationPlayback(3401100, 1, false, false, false);
    WaitFixedTimeSeconds(0);
});

// Cathedral City D_Enlightenment acquisition
$Event(13400100, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(PlayerStandingOnHit(3404000));
    $InitializeEvent(0, 9350, 2);
});

// Wandering madness_xx
$Event(13400220, Restart, function(chrEntityId, eventFlagId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(eventFlagId);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// Hermit crabs fall from the sky
$Event(13400310, Restart, function(chrEntityId, areaEntityId) {
    SetCharacterGravity(chrEntityId, Disabled);
    if (ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 7004, true, false, true);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(chrEntityId, 7005, true, false, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    ForceAnimationPlayback(chrEntityId, 7003, false, true, false);
});

// Treasure of Bishop Omega
$Event(13400320, Restart, function() {
    EndIf(EventFlag(9470));
    EndIf(!CharacterType(10000, TargetType.Alive));
    CreateObjectfollowingSFX(3401500, 200, 900201);
    WaitFor(ActionButtonInArea(3400100, 3401500));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(3401810);
    DeleteObjectfollowingSFX(3401500, true);
});

// Cathedral City D_Death Reenactment & Treasure_XX
$Event(13400330, Restart, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        ForceCharacterTreasure(chrEntityId);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// Create bullet owner
$Event(13404799, Restart, function() {
    CreateBulletOwner(3400799);
});

// straw ball rolling
$Event(13405100, Restart, function(objEntityId, areaEntityId, areaEntityId2) {
    WaitFixedTimeFrames(1);
    GotoIf(L0, 
        CharacterDead(3400206)
            || CharacterDead(3400205)
            || ObjectDestroyed(3401401)
            || ThisEventSlot());
    Goto(L1);
L0:
    DeleteObjectEvent(13405101);
    DeleteObjectfollowingSFX(objEntityId, true);
    DeactivateObject(3401401, Enabled);
    DeactivateObject(objEntityId, Disabled);
    RequestObjectDestruction(3401401, 1);
    EndEvent();
L1:
    DeactivateObject(3401401, Disabled);
    ForceAnimationPlayback(objEntityId, 0, true, false, false);
    area = InArea(10000, areaEntityId);
    area2 = InArea(10000, areaEntityId2);
    flag = EventFlag(13405101);
    WaitFor(area || area2 || flag);
    SetEventFlag(13405101, ON);
    if (!flag.Passed) {
        WaitFor(EntityInRadiusOfEntity(objEntityId, 10000, 22) || ElapsedSeconds(4));
    }
L2:
    CreateObjectfollowingSFX(objEntityId, 100, 900260);
    CreateDamagingObject(13405101, objEntityId, 100, 6291, DamageTargetType.Character, 1.6, 9999, 0);
    PlaySE(3402531, SoundType.aEnvironmentalSound, 411005001);
    WaitFixedTimeFrames(30);
    ForceAnimationPlayback(objEntityId, 1, false, true, false);
    ForceAnimationPlayback(objEntityId, 2, true, false, false);
    DeleteObjectEvent(13405101);
    DeleteObjectfollowingSFX(objEntityId, true);
    DeactivateObject(3401401, Enabled);
    DeactivateObject(objEntityId, Disabled);
    RequestObjectDestruction(3401401, 1);
});

// Executioner of Omega Cathedral appears
$Event(13405103, Restart, function() {
    GotoIf(L0, ThisEventSlot() || CharacterDead(3400551));
    Goto(L1);
L0:
    ForceAnimationPlayback(3401010, 11, true, false, false);
    ReproduceObjectAnimation(3401010, 11);
    SetCharacterAIState(3400551, Enabled);
    SetCharacterHome(3400551, 3402310);
    RequestCharacterAIReplan(3400551);
    SetObjactState(3401010, 3400000, Disabled);
    NotifySoundDampeningOfDoorEvent(3401010, DoorState.DoorOpening);
    EndEvent();
L1:
    SetCharacterAIState(3400551, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 3402300) || EntityInRadiusOfEntity(10000, 3400551, 7)))
            || HasDamageType(3400551, -1, DamageType.Unspecified));
    PlaySE(3402300, SoundType.aEnvironmentalSound, 340000000);
    ForceAnimationPlayback(3400551, 7015, false, false, false);
    ForceAnimationPlayback(3401010, 10, false, false, false);
    WaitFixedTimeFrames(260);
    SetCharacterAIState(3400551, Enabled);
    SetCharacterHome(3400551, 3402310);
    RequestCharacterAIReplan(3400551);
    SetObjactState(3401010, 3400000, Disabled);
});

// Gimmick_xx
$Event(13405105, Restart, function(areaEntityId, entityId, objEntityId, firingAngleX, firingAngleY, firingAngleZ) {
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    WaitFor(!ObjectDestroyed(objEntityId));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ShootBullet(3400799, objEntityId, 200, 6280, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6281, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6282, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6283, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(2);
    ShootBullet(3400799, objEntityId, 200, 6280, firingAngleX, firingAngleY, firingAngleZ);
    WaitFixedTimeFrames(60);
    WaitFor(!AllPlayersInArea(areaEntityId));
    ForceAnimationPlayback(entityId, 0, true, false, false);
    RestartEvent();
});

// Blood River Sniper
$Event(13405110, Restart, function() {
    if (ThisEventSlot()) {
        SetCharacterAIId(3400200, 263757);
        RequestCharacterAIReplan(3400200);
        SetCharacterAIId(3400406, 400002);
        RequestCharacterAIReplan(3400406);
        EndEvent();
    }
L0:
    WaitFor(CharacterHasEventMessage(3400200, 10));
    RequestCharacterAIReplan(3400406);
    SetCharacterAIId(3400406, 400018);
    SetCharacterAIId(3400200, 263757);
    RequestCharacterAIReplan(3400200);
    if (1 != 0) {
        SetSpEffect(3400406, 5000, false);
    }
    ChangeCharacterPatrolBehavior(3400406, 3403350);
    WaitFixedTimeSeconds(3);
    SetCharacterAIId(3400406, 400002);
    RequestCharacterAIReplan(3400406);
});

// Wheelchair explosion
$Event(13405112, Restart, function() {
    if (ThisEventSlot()) {
        DeactivateObject(3401320, Disabled);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 3402533));
    ForceAnimationPlayback(3401352, 1, false, true, false);
    ShootBullet(3400799, 3401320, 10, 6290, 0, 0, 0);
    WaitFixedTimeFrames(80);
    DeactivateObject(3401320, Disabled);
});

// Gimmick_Permanent (angle adjustment)_xx
$Event(13405113, Restart, function(objEntityId, eventFlagId, targetTimeFrames, targetTimeFrames2, behaviorId, behaviorId2, behaviorId3, behaviorId4) {
    WaitFor(EventFlag(eventFlagId) && !ObjectDestroyed(objEntityId));
    WaitFor(ElapsedFrames(targetTimeFrames));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ShootBullet(3400799, objEntityId, 200, behaviorId, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId2, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId3, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId4, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId, 340, 0, 0);
    WaitFor(ElapsedFrames(2));
    WaitFor(ElapsedFrames(targetTimeFrames2));
    RestartEvent();
});

// Gimmick_Permanent_xx
$Event(13405115, Restart, function(objEntityId, eventFlagId, targetTimeFrames, targetTimeFrames2, behaviorId, behaviorId2, behaviorId3, behaviorId4) {
    WaitFor(EventFlag(eventFlagId) && !ObjectDestroyed(objEntityId));
    WaitFor(ElapsedFrames(targetTimeFrames));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    ShootBullet(3400799, objEntityId, 200, behaviorId, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId2, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId3, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId4, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    ShootBullet(3400799, objEntityId, 200, behaviorId, 0, 0, 0);
    WaitFor(ElapsedFrames(2));
    WaitFor(ElapsedFrames(targetTimeFrames2));
    RestartEvent();
});

// Device gun_permanent_activation(area)_xx
$Event(13405140, Restart, function(chrEntityId, areaEntityId, eventFlagId, areaEntityId2, entityId, targetTimeFrames) {
    WaitFor(
        !CharacterDead(chrEntityId)
            && InArea(chrEntityId, areaEntityId2)
            && InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    WaitFor(ElapsedFrames(targetTimeFrames));
    RestartIf(
        !(!CharacterDead(chrEntityId)
            && InArea(chrEntityId, areaEntityId2)
            && InArea(10000, areaEntityId)));
    SetEventFlag(eventFlagId, ON);
    WaitFor(
        CharacterDead(chrEntityId)
            || !InArea(chrEntityId, areaEntityId2)
            || !InArea(10000, areaEntityId));
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(entityId, 0, true, false, false);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Gimmick_Permanent_Activation(Switch)_xx
$Event(13405145, Restart, function(areaEntityId, entityId, eventFlagId) {
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!AllPlayersInArea(areaEntityId));
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(entityId, 0, true, false, false);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Gimmick_Call
$Event(13405155, Restart, function(areaEntityId) {
    if (ThisEventSlot()) {
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    PlaySE(3402515, SoundType.aEnvironmentalSound, 411005002);
});

// Gunpowder pot_xx
$Event(13405160, Restart, function(objEntityId) {
    EndIf(ThisEventSlot());
    dmg = HasDamageType(objEntityId, -1, DamageType.Fire)
        || HasDamageType(objEntityId, -1, DamageType.None);
    WaitFor(
        dmg
            || ((HasDamageType(objEntityId, -1, DamageType.Magic)
                || HasDamageType(objEntityId, -1, DamageType.Lightning)
                || HasDamageType(objEntityId, -1, DamageType.Blunt)
                || HasDamageType(objEntityId, -1, DamageType.Slash)
                || HasDamageType(objEntityId, -1, DamageType.Thrust))
                && ObjectHP(objEntityId) <= 999));
    if (!dmg.Passed) {
        ShootBullet(3400799, objEntityId, -1, 6051, 270, 0, 0);
        RequestObjectDestruction(objEntityId, 1);
        PlaySE(objEntityId, SoundType.oObject, 299961000);
        EndEvent();
    }
L0:
    ShootBullet(3400799, objEntityId, -1, 6292, 0, 90, 0);
    RequestObjectDestruction(objEntityId, 1);
    PlaySE(objEntityId, SoundType.oObject, 299961000);
});

// Touring anime_Fixed_XX
$Event(13405200, Restart, function(chrEntityId, areaEntityId, animationId, areaEntityId2) {
    chrArea = CharacterBackreadStatus(chrEntityId)
        && CharacterAIState(chrEntityId, AIStateType.Normal)
        && InArea(chrEntityId, areaEntityId);
    hp = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || chrArea);
    EndIf(hp.Passed);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    chr = CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    area = !InArea(chrEntityId, areaEntityId2);
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(chr || area || hp2);
    EndIf(hp2.Passed);
    RestartIf(area.Passed);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 0, false, true, false);
    RestartEvent();
});

// The bell rings
$Event(13405211, Restart, function(areaEntityId) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    PlaySE(areaEntityId, SoundType.aEnvironmentalSound, 340000000);
});

// TGS Bakutsutsu activation
$Event(13405216, Restart, function(chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId, timeSeconds, value) {
    if (!ThisEventSlot()) {
        WaitFor(InArea(3400316, areaEntityId) || InArea(3400316, areaEntityId2));
        WaitFixedTimeSeconds(timeSeconds);
    }
L0:
    if (value != 0) {
        SetSpEffect(chrEntityId, 5000, false);
    }
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// TGS enemy wall disabled
$Event(13405218, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 3402553));
    }
L0:
    ActivateHit(3404250, Disabled);
});

// Enemy special standby_XX
$Event(13405220, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, areaEntityId, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        WaitRandomTimeFrames(0, 180);
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId);
        dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
        WaitFor(chr || chrArea || dmg);
        if (!dmg.Passed) {
            WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
            RotateCharacter(chrEntityId, 10000, playAnimationId, false);
        }
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// Logic ON_XX
$Event(13405300, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId))
            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    WaitFixedTimeSeconds(timeSeconds);
    SetCharacterAIState(chrEntityId, Enabled);
});

// Enemy patrol begins_XX
$Event(13405350, Restart, function(chrEntityId, areaEntityId, areaEntityId2, patrolInformationEntityId, timeSeconds, value) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, areaEntityId) || InArea(10000, areaEntityId2)));
        WaitFixedTimeSeconds(timeSeconds);
    }
L0:
    if (value != 0) {
        SetSpEffect(chrEntityId, 5000, false);
    }
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// Start anime playback_XX
$Event(13405480, Restart, function(chrEntityId, areaEntityId, targetDistance, animationId, timeSeconds, disabledEnabled) {
    if (ThisEventSlot()) {
        SetCharacterAIState(chrEntityId, Enabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, disabledEnabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId);
    area2 = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    chrArea = chr && (area || area2);
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (!area2.Passed) {
        if (!dmg.Passed) {
            WaitFixedTimeSeconds(timeSeconds);
            ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        }
    }
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// Strange Beast_Death count_XX
$Event(13405510, Restart, function(chrEntityId) {
    WaitFor(CharacterDead(chrEntityId));
    IncrementEventValue(13405500, 4, 15);
});

// Deformed Beast_Determine if a certain number of dead
$Event(13405520, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405500, 4) >= 4);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 2);
    RequestCharacterAIReplan(chrEntityId);
});

// Deformed Beast_Determine if a certain number of dead are dead ②
$Event(13405530, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405500, 4) >= 2);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 3);
    RequestCharacterAIReplan(chrEntityId);
});

// Deformed Beast_Determine if a certain number of dead bodies ③
$Event(13405540, Restart, function(chrEntityId, patrolInformationEntityId, thresholdValue, value, timeSeconds) {
    WaitFor(EventValue(13405500, 4) >= thresholdValue);
    if (value != 0) {
        SetSpEffect(chrEntityId, 5000, false);
    }
    WaitFixedTimeSeconds(timeSeconds);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    RequestCharacterAIReplan(chrEntityId);
});

// Deformed Beast_Determine if a certain number of dead bodies ④
$Event(13405550, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        WaitFor(EventValue(13405500, 4) >= 2);
        WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// Send event request
$Event(13405570, Restart, function(chrEntityId, entityId, areaEntityId, commandId, slotNumber) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId));
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAICommand(chrEntityId, commandId, slotNumber);
});

// Unusual Beast_Death count II_XX
$Event(13405610, Restart, function(chrEntityId) {
    WaitFor(CharacterDead(chrEntityId));
    IncrementEventValue(13405600, 4, 15);
});

// Deformed Beast_Determine if a certain number of dead bodies II①
$Event(13405620, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405600, 4) >= 4);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 2);
    RequestCharacterAIReplan(chrEntityId);
});

// Deformed Beast_Determine if a certain number of dead bodies II②
$Event(13405630, Restart, function(chrEntityId, entityId) {
    WaitFor(EventValue(13405600, 4) >= 2);
    SetEventPoint(chrEntityId, entityId, 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 3);
    RequestCharacterAIReplan(chrEntityId);
});

// Strange Beast_Death Judgment II Explosive Hammer
$Event(13405640, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        WaitFor(EventValue(13405600, 4) >= 1);
        WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
    RequestCharacterAIReplan(chrEntityId);
});

// Deformed Beast_Determine whether a certain number of dead bodies II④
$Event(13405650, Restart, function(chrEntityId, animationId, aiId, playAnimationId, aiId2, minTimeSeconds, maxTimeSeconds) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, aiId);
        chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat);
        WaitFor(EventValue(13405600, 4) >= 2);
        WaitRandomTimeSeconds(minTimeSeconds, maxTimeSeconds);
        RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId2);
});

// Heterogeneous Beast_Infection Enhancement_xx
$Event(13405680, Restart, function(chrEntityId, chrEntityId2, targetDistance) {
    WaitFor(
        CharacterHasEventMessage(chrEntityId, 10)
            && EntityInRadiusOfEntity(chrEntityId, chrEntityId2, targetDistance)
            && !CharacterDead(chrEntityId2)
            && CharacterBackreadStatus(chrEntityId2));
    RequestCharacterAICommand(chrEntityId2, 200, 1);
    WaitFor(CharacterHasEventMessage(chrEntityId2, 20));
    SetSpEffect(chrEntityId2, 5645, false);
    RequestCharacterAICommand(chrEntityId2, -1, 1);
    RestartEvent();
});

// Initialize conversation NPC Ludwig (head)
$Event(13400940, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1670, 1689)) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1680, ON);
        }
L1:
        if (EventFlag(13401800) && !AnyBatchEventFlags(1670, 1674)) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1681, ON);
        }
L2:
        if (EventFlag(1681)
            && (EventFlag(1720) || EventFlag(1721))
            && EventFlag(73400513)
            && EventFlag(73400403)) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1671, ON);
        }
L3:
        if (EventFlag(13500100)
            && (EventFlag(1720) || EventFlag(1721) || EventFlag(1724) || EventFlag(1722))
            && EventFlag(73400403)
            && ((EventFlag(1681) && !EventFlag(73400512)) || EventFlag(1671))) {
            BatchSetEventFlags(1670, 1689, OFF);
            SetEventFlag(1672, ON);
        }
L4:
        NoOp();
    }
L0:
    GotoIf(L5, EventFlag(1670));
    GotoIf(L6, EventFlag(1671));
    GotoIf(L7, EventFlag(1672));
    GotoIf(L8, EventFlag(1680));
    GotoIf(L9, EventFlag(1681));
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    EndEvent();
L8:
    SetCharacterBackreadState(3400900, false);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Disabled);
    DeactivateObject(3400908, Disabled);
    SetCharacterBackreadState(3400906, false);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
L9:
    SetCharacterBackreadState(3400900, false);
    ChangeCharacterEnableState(3400900, Enabled);
    DeactivateObject(3400907, Disabled);
    DeactivateObject(3400908, Disabled);
    SetCharacterBackreadState(3400906, false);
    ChangeCharacterEnableState(3400906, Enabled);
    SetCharacterImmortality(3400900, Enabled);
    if (!EventFlag(50002360) && EventFlag(73400512)) {
        ForceCharacterTreasure(3400906);
    }
    if (EventFlag(73400512)) {
        ForceAnimationPlayback(3400900, 7002, true, false, true);
    }
    EndEvent();
L6:
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Enabled);
    DeactivateObject(3400908, Disabled);
    SetCharacterBackreadState(3400906, true);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
L5:
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Disabled);
    DeactivateObject(3400908, Enabled);
    if (!EventFlag(50002360)) {
        SetCharacterBackreadState(3400906, false);
        ChangeCharacterEnableState(3400906, Enabled);
        ForceCharacterTreasure(3400906);
        EndEvent();
    }
    SetCharacterBackreadState(3400906, true);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
L7:
    SetCharacterBackreadState(3400900, true);
    ChangeCharacterEnableState(3400900, Disabled);
    DeactivateObject(3400907, Enabled);
    DeactivateObject(3400908, Disabled);
    if (!EventFlag(50002360)) {
        SetCharacterBackreadState(3400906, false);
        ChangeCharacterEnableState(3400906, Enabled);
        ForceCharacterTreasure(3400906);
        EndEvent();
    }
    SetCharacterBackreadState(3400906, true);
    ChangeCharacterEnableState(3400906, Disabled);
    EndEvent();
});

// Conversation NPC Ludwig (Head)_Placement when defeating boss 2
$Event(13400941, Default, function() {
    EndIf(!EventFlag(1680));
    WaitFor(CharacterDead(3400800) || CharacterDead(3400801));
    if (!AllPlayersInArea(3402915)
        && !InArea(3400921, 3402915)
        && !InArea(3400922, 3402915)
        && !InArea(3400923, 3402915)
        && !InArea(3400924, 3402915)) {
        IssueShortWarpRequest(3400900, TargetEntityType.Area, 3402911, -1);
    } else {
L0:
        if (!AllPlayersInArea(3402916)
            && !InArea(3400921, 3402916)
            && !InArea(3400922, 3402916)
            && !InArea(3400923, 3402916)
            && !InArea(3400924, 3402916)) {
            IssueShortWarpRequest(3400900, TargetEntityType.Area, 3402912, -1);
        } else {
L1:
            if (!AllPlayersInArea(3402917)
                && !InArea(3400921, 3402917)
                && !InArea(3400922, 3402917)
                && !InArea(3400923, 3402917)
                && !InArea(3400924, 3402917)) {
                IssueShortWarpRequest(3400900, TargetEntityType.Area, 3402913, -1);
            } else {
L2:
                IssueShortWarpRequest(3400900, TargetEntityType.Area, 34029134, -1);
                Goto(L9);
            }
        }
    }
L9:
    BatchSetEventFlags(1670, 1689, OFF);
    SetEventFlag(1681, ON);
L8:
    ChangeCharacterEnableState(3400900, Enabled);
    SetCharacterImmortality(3400900, Enabled);
});

// Conversation NPC Ludwig (head)_Obtain moonlight sword
$Event(13400942, Default, function(eventFlagId) {
    EndIf(!chr);
    EndIf(ThisEventSlot());
    EndIf(!AnyBatchEventFlags(1680, 1681));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(73400519));
    chr = CharacterType(10000, TargetType.Alive) && CharacterType(10000, TargetType.Alive);
    EndIf(!chr);
    WaitFor(EventFlag(eventFlagId) || EventFlag(73400519) || CharacterDead(3400900));
    ChangeCharacterEnableState(3400906, Enabled);
    IssueShortWarpRequest(3400906, TargetEntityType.Character, 3400900, 10);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(3400906);
    EndIf(EventFlag(73400519));
    ForceAnimationPlayback(3400900, 7002, true, false, true);
});

// Conversation NPC Ludwig (Head)_Instant death due to damage
$Event(13400943, Default, function(entityId) {
    WaitFor(EventFlag(1681) && HasDamageType(entityId, 10000, DamageType.Unspecified));
    BatchSetEventFlags(1670, 1689, OFF);
    SetEventFlag(1670, ON);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(entityId, 7010, false, false, true);
    WaitFixedTimeFrames(119);
    ForceAnimationPlayback(entityId, 7011, true, false, true);
    SetEventFlag(73400519, ON);
});

// Conversation NPC Ludwig (head)_Kuchipaku anime
$Event(13400944, Default, function() {
    SetEventFlag(73400510, OFF);
    EndIf(EventFlag(1670) || EventFlag(1671) || EventFlag(1672) || EventFlag(73400512));
    WaitFor(EventFlag(73400510));
    EndIf(HPRatio(3400900) == 0 || EventFlag(73400512) || EventFlag(1670));
    ForceAnimationPlayback(3400900, 7001, true, false, true);
    WaitFor(!EventFlag(73400510));
    EndIf(HPRatio(3400900) == 0 || EventFlag(73400512) || EventFlag(1670));
    ForceAnimationPlayback(3400900, 0, true, false, true);
    RestartEvent();
});

// Conversation NPC general death judgment_XX
$Event(13400900, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(eventFlagId, eventFlagId3));
    WaitFor(CharacterDead(chrEntityId));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(eventFlagId4, ON);
    SaveRequest(0);
});

// Conversation NPC general attack count determination_XX
$Event(13400910, Default, function(entityId, eventFlagId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
});

// Conversation NPC general hostility judgment_XX
$Event(13400920, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    WaitFor((EventFlag(eventFlagId) || HPRatio(chrEntityId) <= 0.9) && HPRatio(chrEntityId) != 0);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    BatchSetEventFlags(eventFlagId2, eventFlagId3, OFF);
    SetEventFlag(eventFlagId4, ON);
    SaveRequest(0);
});

// Complete beast NPC battle begins
$Event(13400930, Default, function() {
    SetCharacterAIState(3400910, Disabled);
    WaitFor(InArea(10000, 3402949) || HasDamageType(3400910, 10000, DamageType.Unspecified));
    SetCharacterAIState(3400910, Enabled);
});

// Conversation NPC secret seeker_initialization
$Event(13400950, Default, function(chrEntityId, chrEntityId2) {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1710, 1729)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1720, ON);
        } else {
L0:
            if (EventFlag(1724)) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1720, ON);
            }
L1:
            if ((EventFlag(1720)
                && (EventFlag(1681) || EventFlag(1671))
                && EventFlag(73400403)
                && EventFlag(73400513))
                || (EventFlag(1720) && EventFlag(73400403) && EventFlag(1670))) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1721, ON);
            }
L2:
            if (AnyBatchEventFlags(1720, 1721) && EventFlag(73400403) && EventFlag(13500100)) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1722, ON);
            }
L3:
            if (AnyBatchEventFlags(1720, 1722) && EventFlag(73400403) && EventFlag(1650)) {
                BatchSetEventFlags(1710, 1729, OFF);
                SetEventFlag(1723, ON);
            }
        }
L8:
        NoOp();
    }
L9:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    SetCharacterBackreadState(chrEntityId2, true);
    GotoIf(L0, EventFlag(1720));
    GotoIf(L1, EventFlag(1725));
    GotoIf(L2, EventFlag(1710));
    GotoIf(L3, EventFlag(1721));
    GotoIf(L4, EventFlag(1726));
    GotoIf(L5, EventFlag(1711));
    EndEvent();
L0:
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.Ally);
    ForceAnimationPlayback(chrEntityId, 103150, false, false, false);
    EndEvent();
L1:
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EndEvent();
L2:
    ForceCharacterTreasure(chrEntityId);
    EndEvent();
L3:
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTeamType(chrEntityId2, TeamType.Ally);
    ForceAnimationPlayback(chrEntityId2, 103150, false, false, false);
    EndEvent();
L4:
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    EndEvent();
L5:
    ForceCharacterTreasure(chrEntityId2);
    EndEvent();
});

// Conversation NPC Secret seeker_Animation playback during conversation
$Event(13400951, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(eventFlagId, OFF);
    EndIf(!EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId2) && EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, 151));
    ForceAnimationPlayback(chrEntityId, 103155, false, false, false);
    WaitFor(
        EventFlag(eventFlagId2) && !EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, 152));
    ForceAnimationPlayback(chrEntityId, 103150, false, false, false);
    RestartEvent();
});

// Secret seeker_obtaining items upon deathXX
$Event(13400953, Default, function(eventFlagId, eventFlagId2, itemLotId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(eventFlagId)) {
        if (EventFlag(eventFlagId2)) {
            EndEvent();
        }
L1:
        SetEventFlag(eventFlagId2, ON);
    }
L0:
    WaitFor(EventFlag(eventFlagId2));
    AwardItemLot(itemLotId);
});

// Cathedral City D_NPC death reenactment_XX
$Event(13400970, Default, function(chrEntityId) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(0);
});

// Cathedral City D_NPC item acquisition_XX
$Event(13400980, Default, function(eventFlagId, itemLotId) {
    EndIf(ThisEventSlot());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    AwardItemLot(itemLotId);
});

// Cathedral City D_NPC item acquisition_as many times as you like_XX
$Event(13400990, Default, function(eventFlagId, itemLotId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    AwardItemLot(itemLotId);
    RestartEvent();
});

// Cathedral town D_NPC item acquisition_lap change_XX
$Event(13400995, Default, function(eventFlagId, itemLotId, itemLotId2, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        AwardItemLot(itemLotId);
    } else {
        AwardItemLot(itemLotId2);
    }
});

// ★Cathedral Town D_New NPC Summon_Aim for the Boss Room_XX
$Event(13404450, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★Cathedral Town D_New NPC Summon_Aim for the Boss Room_XX
$Event(13404550, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★Cathedral Town D_New NPC Summon_Summonability Judgment_Top Hat_vs Ludo
$Event(13404401, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !AnyBatchEventFlags(13404422, 13404426)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !AnyBatchEventFlags(13404422, 13404426)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★Cathedral City D_New NPC summons_Summonability determination_Leader of the Federation (with helmet)_vs.
$Event(13404402, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(1800) || EventFlag(1801))
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(1800) || EventFlag(1801))
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★Cathedral City D_New NPC Summon_Summonability Judgment_Leader of the Federation (without helmet) vs Ludo
$Event(13404403, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(6813)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(6813)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★Cathedral Town D_New NPC Summon_Summonability Judgment_Federation: Executioner_vsΩ
$Event(13404404, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && !EventFlag(6813)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && !EventFlag(6813)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★Cathedral City D_New NPC summons_Summonability determination_Leader of the Federation (with helmet)_vsΩ
$Event(13404405, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(1800) || EventFlag(1801))
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && (EventFlag(1800) || EventFlag(1801))
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★Cathedral Town D_New NPC Summon_Summonability Judgment_Leader of the Federation (without helmet)_vsΩ
$Event(13404406, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(6813)
                && !EventFlag(eventFlagId5)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && PlayerHasItem(ItemType.Goods, 4014)
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(6813)
                && !EventFlag(eventFlagId5)));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// ★Cathedral Town D_New NPC Summon_Participation_XX
$Event(13404410, Restart, function(signType, entityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, actionButtonParameterId) {
    if (EventFlag(12100889)) {
        ChangeCharacterEnableState(entityId, Disabled);
        WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, entityId));
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Character, 10000, 236, 10000);
        SetEventFlag(3400, OFF);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 100111, false, false, false);
        SetSpEffect(10000, 4682, false);
        SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
        ClearSpEffect(10000, 9005);
        ClearSpEffect(10000, 9025);
        WaitFixedTimeSeconds(5);
        DisplayMessage(100051, 0);
        WaitFixedTimeSeconds(5);
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Area, areaEntityId, -1, areaEntityId);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(entityId, Disabled);
    }
    GotoIf(S0, EventFlag(eventFlagId2));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(eventFlagId));
S0:
    ChangeCharacterEnableState(entityId, Disabled);
S1:
    EndIf(EventFlag(eventFlagId4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(entityId, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId4)
            && ActionButtonInArea(actionButtonParameterId, entityId));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★Cathedral Town D_New NPC Summon_Enter Boss Room_XX
$Event(13404460, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && InArea(chrEntityId, areaEntityId));
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    RotateCharacter(chrEntityId, entityId, playAnimationId, true);
    RestartIf(!InArea(chrEntityId, areaEntityId2));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(InArea(chrEntityId, areaEntityId3));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★Cathedral Town D_New NPC Summon_Enter Boss Room_XX
$Event(13404560, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId) && InArea(chrEntityId, areaEntityId));
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    RotateCharacter(chrEntityId, entityId, playAnimationId, true);
    RestartIf(!InArea(chrEntityId, areaEntityId2));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(InArea(chrEntityId, areaEntityId3));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// ★Cathedral City D_New NPC Summon_Throwing disabled during boss battle_XX
$Event(13404490, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3));
    SetSpEffectAndUnknown200455(chrEntityId, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// heal npcs
$Event(13404470, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 3010));
    SetSpEffect(3400921, 3012, false);
    SetSpEffect(3400922, 3012, false);
    SetSpEffect(3400923, 3012, false);
    SetSpEffect(3400924, 3012, false);
    SetSpEffect(3400925, 3012, false);
    SetSpEffect(3400926, 3012, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});
