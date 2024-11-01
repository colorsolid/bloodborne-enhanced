// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ダンジョン_トラップ発動_錆びた宝箱\u0000ダンジョン_ギミック起動_魔法壁消失\u0000ダンジョン_トラップ発動_錆びた扉\u0000ダンジョン_トラップ発動_テレポーター\u0000ダンジョン_トラップ発動_落とし穴\u0000ダンジョン_トラップ発動_火矢作動\u0000ダンジョン_ギミック起動_跳ね橋降下\u0000ボス_撃破\u0000PC情報_ボス撃破_上層\u0000PC情報_ボス撃破_中層\u0000PC情報_ボス撃破_下層\u0000PC情報_ボス撃破_最下層\u0000クリア時間_通し\u0000PC情報_ダンジョン到達時\u0000ダンジョン_上層_クリア時間_通し\u0000ダンジョン_上層_クリア時間_1プレイ\u0000ダンジョン_中層_クリア時間_通し\u0000ダンジョン_中層_クリア時間_1プレイ\u0000ダンジョン_下層_クリア時間_通し\u0000ダンジョン_下層_クリア時間_1プレイ\u0000ダンジョン_最下層_クリア時間_通し\u0000ダンジョン_最下層_クリア時間_1プレイ\u0000ダンジョン_トラップ発動_落下敵\u0000ダンジョン_ギミック起動_血舐め発生\u0000ダンジョン_トラップ発動_悪霊女出現\u0000ダンジョン_トラップ発動_ギロチン\u0000ダンジョン_トラップ発動_クモ天井待機\u0000ダンジョン_トラップ発動_クモ天井待機_領域使用\u0000ダンジョン_トラップ発動_飛び出す敵\u0000ダンジョン_トラップ発動_領域で飛び出す敵\u0000ダンジョン_トラップ発動_モンスタールーム\u0000ダンジョン_ギミック起動_強化憑依\u0000ダンジョン_トラップ発動_鐘を鳴らす\u0000ダンジョン_トラップ発動_モンスタールーム_巣に帰る\u0000ダンジョン_トラップ発動_伏兵落下\u0000ボス_戦闘開始\u0000ダンジョン_ボスラッシュ前座_撃破時間\u0000ダンジョン_上層_ボス戦_撃破時間\u0000ダンジョン_中層_ボス戦_撃破時間\u0000ダンジョン_下層_ボス戦_撃破時間\u0000ダンジョン_最下層_ボス戦_撃破時間\u0000ダンジョン_トラップ発動_火薬タル爆発\u0000\u0000"
// @linked    []
// @version    3.4.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetSpEffect(10000, 9920, false);
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        BatchSetEventFlags(12906660, 12906725, OFF);
    }
    InitializeEvent(0, 12901685, 0);
    InitializeEvent(0, 12907000, 2900950, 2901950, 999, 12907800);
    InitializeEvent(1, 12907000, 2900951, 2901951, 999, 12907820);
    InitializeEvent(2, 12907000, 2900952, 2901952, 12901800, 12907840);
    InitializeEvent(3, 12907000, 2900953, 2901953, 999, 12907860);
    InitializeEvent(4, 12907000, 2900954, 2901954, 12901801, 12907880);
    InitializeEvent(5, 12907000, 2900955, 2901955, 999, 12907900);
    InitializeEvent(6, 12907000, 2900956, 2901956, 12901802, 12907920);
    InitializeEvent(7, 12907000, 2900957, 2901957, 999, 12907940);
    InitializeEvent(8, 12907000, 2900958, 2901958, 12901803, 12907960);
    InitializeEvent(0, 12907010, 72900200, 2901950);
    InitializeEvent(1, 12907010, 72900201, 2901951);
    InitializeEvent(2, 12907010, 72900202, 2901952);
    InitializeEvent(3, 12907010, 72900203, 2901953);
    InitializeEvent(4, 12907010, 72900204, 2901954);
    InitializeEvent(5, 12907010, 72900205, 2901955);
    InitializeEvent(6, 12907010, 72900206, 2901956);
    InitializeEvent(7, 12907010, 72900207, 2901957);
    InitializeEvent(8, 12907010, 72900208, 2901958);
    InitializeEvent(0, 12907020, 72900100, 2901950);
    InitializeEvent(1, 12907020, 72900101, 2901951);
    InitializeEvent(2, 12907020, 72900102, 2901952);
    InitializeEvent(3, 12907020, 72900103, 2901953);
    InitializeEvent(4, 12907020, 72900104, 2901954);
    InitializeEvent(5, 12907020, 72900105, 2901955);
    InitializeEvent(6, 12907020, 72900106, 2901956);
    InitializeEvent(7, 12907020, 72900107, 2901957);
    InitializeEvent(8, 12907020, 72900108, 2901958);
    InitializeEvent(0, 12907030, 72102900, 2901950);
    InitializeEvent(1, 12907030, 72102901, 2901951);
    InitializeEvent(2, 12907030, 72102902, 2901952);
    InitializeEvent(3, 12907030, 72102903, 2901953);
    InitializeEvent(4, 12907030, 72102904, 2901954);
    InitializeEvent(5, 12907030, 72102905, 2901955);
    InitializeEvent(6, 12907030, 72102906, 2901956);
    InitializeEvent(7, 12907030, 72102907, 2901957);
    InitializeEvent(8, 12907030, 72102908, 2901958);
    InitializeEvent(0, 12907420, 4730, 92905370, 4735, 4736);
    InitializeEvent(1, 12907420, 4731, 92905371, 4735, 4736);
    InitializeEvent(2, 12907420, 4732, 92905372, 4735, 4736);
    SetEventFlag(12907230, OFF);
    SetEventFlag(12907231, OFF);
    InitializeEvent(0, 12907400, 0);
});

// 宝箱_XX
$Event(12900000, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        if (!ObjectDestroyed(X0_4)) {
            ReproduceObjectAnimation(X0_4, 0);
        }
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4) || ObjectDestroyed(X0_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
    SetObjactState(X0_4, -1, Disabled);
});

// ユニークアイテム切替_XX
$Event(12900060, Default, function(X0_4, X4_4) {
    if (EventFlag(92905335)) {
        DeactivateObject(X0_4, Disabled);
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Disabled);
        EndEvent();
    }
    DeactivateObject(X4_4, Disabled);
    SetObjactState(X4_4, -1, Disabled);
    SetObjectTreasureState(X4_4, Disabled);
    EndEvent();
});

// 錆びた宝箱_XX
$Event(12900067, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        if (!ObjectDestroyed(X0_4)) {
            ReproduceObjectAnimation(X0_4, 0);
        }
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(X4_4);
    obj2 = ObjectDestroyed(X0_4);
    WaitFor(obj || obj2);
    WaitFixedTimeFrames(10);
    SetObjactState(X0_4, -1, Disabled);
    SetObjectTreasureState(X0_4, Enabled);
    EndIf(obj2.Passed);
    SetEventFlag(X8_4, ON);
});

// 錆びた宝箱_サウンドトラップ_XX
$Event(12900078, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4));
    CreatePlaylog(0);
    ShootBullet(2900000, X0_4, 90, 6051, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6053, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6055, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6055, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6055, 270, 0, 0);
});

// 扉アクション削除_XX
$Event(12900089, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjactState(X0_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetObjactState(X0_4, X8_4, Disabled);
    SetObjactState(X0_4, X12_4, Disabled);
    EndEvent();
});

// 扉アクション削除_一方通行扉_XX
$Event(12900163, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetObjactState(X0_4, X8_4, Disabled);
    SetEventFlag(X12_4, ON);
    EndEvent();
});

// 一方通行扉_Msg_XX
$Event(12900174, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X8_4)) {
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    act = ActionButtonInArea(7011, X0_4);
    WaitFor(act || ObjActEventFlag(X4_4));
    if (!act.Passed) {
        EndEvent();
    }
L1:
    DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// レバー扉_XX
$Event(12900185, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X4_4, 9902, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X8_4));
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    SetEventFlag(X12_4, ON);
});

// レバー扉_Msg_XX
$Event(12900186, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    act = ActionButtonInArea(7010, X0_4);
    act2 = ActionButtonInArea(7011, X0_4);
    flag = EventFlag(X4_4);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// レバー扉_レバーMsg_XX
$Event(12900187, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4) && ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 封印扉_レバーを引く_XX
$Event(12900188, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 1);
        SetObjactState(X0_4, 9921, Enabled);
        EndEvent();
    }
L0:
    SetObjactState(X0_4, 9921, Disabled);
    WaitFor(ObjActEventFlag(X4_4));
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetObjactState(X0_4, 9921, Enabled);
    WaitFixedTimeSeconds(0.5);
    SetEventFlag(X8_4, ON);
});

// 封印扉_扉を開ける_XX
$Event(12900189, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, 9921, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetEventFlag(X8_4, ON);
    WaitFixedTimeSeconds(0);
});

// 封印扉_Msg_XX
$Event(12900190, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(!EventFlag(X4_4) && ActionButtonInArea(7010, X0_4));
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 封印扉_レバーMsg_XX
$Event(12900191, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4) && ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// メインブロック扉_レバーを引く_XX
$Event(12900192, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        SetObjactState(X8_4, 2902000, Disabled);
        CreateObjectfollowingSFX(X8_4, 703, 929136);
        EndEvent();
    }
    CreateObjectfollowingSFX(X8_4, 703, 929134);
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(56);
    SetEventFlag(X4_4, ON);
    DeleteObjectfollowingSFX(X8_4, true);
    CreateObjectfollowingSFX(X8_4, 703, 929136);
    DisplayBanner(TextBannerType.StadiumWin);
    PlaySE(10000, SoundType.vVoice, 888880000);
    WaitFixedTimeFrames(44);
    WaitFixedTimeSeconds(1);
    DisplayMessage(10011260, 0);
});

// メインブロック扉_扉を開ける_XX
$Event(12900197, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, 2900100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetEventFlag(X8_4, ON);
    WaitFixedTimeSeconds(0);
});

// メインブロック扉_Msg_XX
$Event(12900202, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(!EventFlag(X4_4) && ActionButtonInArea(7010, X0_4));
    DisplayGenericDialog(10010167, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// メインブロック扉_レバーMsg_XX
$Event(12900207, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeSeconds(3);
    WaitFor(ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// メインブロック扉_レバーを引いた_XX
$Event(12900229, Default, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(2);
    if (EventFlag(X8_4)) {
        CreateObjectfollowingSFX(X0_4, 703, 929136);
        EndEvent();
    }
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 1);
        CreateObjectfollowingSFX(X0_4, 703, 929136);
        SetObjactState(X0_4, 2900100, Enabled);
        EndEvent();
    }
L0:
    SetObjactState(X0_4, 2900100, Disabled);
    CreateObjectfollowingSFX(X0_4, 703, 929134);
    WaitFor(EventFlag(X4_4));
    DeleteObjectfollowingSFX(X0_4, true);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    WaitFixedTimeSeconds(2.5);
    CreateObjectfollowingSFX(X0_4, 703, 929136);
    SetObjactState(X0_4, 2900100, Enabled);
    WaitFixedTimeSeconds(0.5);
});

// 鍵消費_扉開錠_XX
$Event(12900234, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        SetObjactState(X12_4, X16_4, Disabled);
        SetObjactState(X12_4, X20_4, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        RemoveItemFromPlayer(ItemType.Goods, X4_4, 0);
    }
    SetObjactState(X12_4, X16_4, Disabled);
    SetObjactState(X12_4, X20_4, Disabled);
});

// 鍵保持_扉開錠_XX
$Event(12900235, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        SetObjactState(X8_4, X12_4, Disabled);
        SetObjactState(X8_4, X16_4, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DisplayGenericDialog(X4_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    }
    SetObjactState(X8_4, X12_4, Disabled);
    SetObjactState(X8_4, X16_4, Disabled);
});

// 魔法壁消失_XX
$Event(12900236, Default, function(X0_4) {
    GotoIf(L0, !ThisEventSlot());
    DeactivateObject(X0_4, Disabled);
    EndEvent();
    WaitFor(ObjectDestroyed(X0_4));
    CreatePlaylog(38);
});

// 魔法壁消失_新規_XX
$Event(12901760, Default, function(X0_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X0_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjectDestroyed(X0_4));
    CreatePlaylog(38);
});

// 錆びた扉_XX
$Event(12900238, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjactState(X0_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetObjactState(X0_4, X8_4, Disabled);
    SetObjactState(X0_4, X12_4, Disabled);
    SetEventFlag(X16_4, ON);
});

// 錆びた扉_サウンドトラップXX
$Event(12900239, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4));
    CreatePlaylog(76);
    WaitFixedTimeSeconds(1.5);
    ShootBullet(2900000, X0_4, 120, 6020, 270, 0, 0);
});

// 祭壇エレベーター初期化
$Event(12900240, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!EventFlag(X12_4)) {
        ReproduceObjectAnimation(X0_4, 10);
        ReproduceObjectAnimation(X4_4, 0);
        ReproduceObjectAnimation(X8_4, 1);
    } else {
L0:
        ReproduceObjectAnimation(X0_4, 0);
        ReproduceObjectAnimation(X4_4, 1);
        ReproduceObjectAnimation(X8_4, 0);
    }
L1:
    SetEventFlag(X16_4, OFF);
});

// 祭壇エレベーター下がる
$Event(12900245, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X12_4))
            || (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X20_4)));
    SetEventFlag(X28_4, ON);
    SetEventFlag(X24_4, OFF);
    ForceAnimationPlayback(X8_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 10, false, true, false);
    WaitFor(!AllPlayersInArea(X16_4));
    SetEventFlag(X28_4, OFF);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    RestartEvent();
});

// 祭壇エレベーター上がる
$Event(12900250, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X16_4))
            || (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X20_4)));
    SetEventFlag(X28_4, ON);
    SetEventFlag(X24_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    SetEventFlag(X28_4, OFF);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    RestartEvent();
});

// 祭壇エレベーター呼び出しレバー操作不能
$Event(12900255, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (!EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X4_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X4_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 血族オフライン救済_XX
$Event(12900260, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 6100) && CharacterDead(X0_4));
    EndIf(
        !(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    AwardItemsIncludingClients(5530);
});

// テレポーター_転送開始
$Event(12900293, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, X0_4));
    CreatePlaylog(112);
    SetEventFlag(X8_4, ON);
    WaitFixedTimeFrames(6);
    RestartIf(!InArea(10000, X0_4));
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    SetEventFlag(X4_4, ON);
    WaitFor(!EventFlag(X4_4));
    RestartEvent();
});

// テレポーター_転送完了
$Event(12900304, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X0_4));
    DummyPlayCutsceneAndWarpPlayer(X4_4, 29, 0);
    WaitFixedTimeFrames(2);
    SetEventFlag(X8_4, ON);
    ForceAnimationPlayback(10000, 101162, false, true, false);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// テレポーター_転送元_転送演出
$Event(12901732, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        CreateObjectfollowingSFX(X4_4, 700, 929102);
        CreateObjectfollowingSFX(X4_4, 702, 929102);
    }
L0:
    WaitFor(EventFlag(X0_4));
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(X4_4, 700, 929102);
        CreateObjectfollowingSFX(X4_4, 702, 929102);
    }
L1:
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 200, 929213);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// テレポーター_転送先_転送演出
$Event(12901743, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 929215);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// 籠牢エレベーター初期化
$Event(12900315, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    flag = EventFlag(X0_4);
    WaitFor(flag || !EventFlag(X0_4));
    if (!flag.Passed) {
        ReproduceObjectAnimation(X4_4, 12);
        SetObjactState(X8_4, X12_4, Disabled);
        SetObjactState(X16_4, X12_4, Enabled);
    } else {
        ReproduceObjectAnimation(X4_4, 132);
        SetObjactState(X16_4, X12_4, Disabled);
        SetObjactState(X8_4, X12_4, Enabled);
    }
    SetEventFlag(X20_4, OFF);
});

// 籠牢エレベーターあがる
$Event(12900323, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4))
            || (EventFlag(X0_4) && !EventFlag(X4_4) && ObjActEventFlag(X12_4)));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X16_4, 133, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 35, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 11, false, true, false);
    WaitFor(!AllPlayersInArea(X20_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetObjactState(X24_4, 9902, Disabled);
    SetObjactState(X28_4, 9902, Enabled);
    RestartEvent();
});

// 籠牢エレベーターさがる
$Event(12900331, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4))
            || (!EventFlag(X0_4) && !EventFlag(X4_4) && ObjActEventFlag(X12_4)));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X16_4, 13, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 16, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 131, false, true, false);
    WaitFor(!AllPlayersInArea(X20_4));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, OFF);
    SetObjactState(X24_4, 9902, Disabled);
    SetObjactState(X28_4, 9902, Enabled);
    RestartEvent();
});

// 籠牢エレベーター呼び出しレバー操作不能
$Event(12900339, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(X0_4) && !EventFlag(X8_4) && ActionButtonInArea(7100, X4_4))
            || (!EventFlag(X0_4) && EventFlag(X8_4) && ActionButtonInArea(7100, X12_4))
            || (EventFlag(X0_4) && ActionButtonInArea(7100, X12_4))
            || (EventFlag(X0_4) && ActionButtonInArea(7100, X4_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// フロア移動エレベーター初期化
$Event(12900347, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (!EventFlag(X12_4)) {
        ReproduceObjectAnimation(X0_4, X20_4);
        SetObjactState(X4_4, 9902, Disabled);
        SetObjactState(X8_4, 9902, Enabled);
    } else {
L0:
        ReproduceObjectAnimation(X0_4, X24_4);
        SetObjactState(X4_4, 9902, Enabled);
        SetObjactState(X8_4, 9902, Disabled);
    }
L1:
    SetEventFlag(X16_4, OFF);
});

// 21m_フロア移動エレベーターあがる
$Event(12900351, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X16_4))
            || (EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, OFF);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    ForceAnimationPlayback(X0_4, 1, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Enabled);
    RestartEvent();
});

// 42m_フロア移動エレベーターあがる
$Event(12900353, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X16_4))
            || (EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, OFF);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 20, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    ForceAnimationPlayback(X0_4, 21, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Enabled);
    RestartEvent();
});

// 21m_フロア移動エレベーターさがる
$Event(12900354, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X12_4))
            || (!EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, ON);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 10, false, true, false);
    WaitFor(!AllPlayersInArea(X16_4));
    ForceAnimationPlayback(X0_4, 11, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Enabled);
    SetObjactState(X8_4, 9902, Disabled);
    RestartEvent();
});

// 42m_フロア移動エレベーターさがる
$Event(12900356, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X12_4))
            || (!EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, ON);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 30, false, true, false);
    WaitFor(!AllPlayersInArea(X16_4));
    ForceAnimationPlayback(X0_4, 31, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Enabled);
    SetObjactState(X8_4, 9902, Disabled);
    RestartEvent();
});

// フロア移動エレベーター呼び出しレバー操作不能
$Event(12900357, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X4_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X4_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 【中下段】天秤エレベーター初期化
$Event(12900361, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, OFF);
    ForceAnimationPlayback(X20_4, 2, false, true, false);
    ForceAnimationPlayback(X24_4, 2, false, true, false);
    EndEvent();
});

// 【中下段】天秤エレベーター初回
$Event(12900363, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeSeconds(1);
    if (EventFlag(X20_4)) {
        if (!EventFlag(X4_4)) {
            WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4) && EventFlag(X20_4));
            SetEventFlag(X4_4, ON);
            WaitFixedTimeSeconds(1);
            ForceAnimationPlayback(X16_4, 3, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(X16_4, 4, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(X16_4, 121, false, true, false);
            ForceAnimationPlayback(X16_4, 122, false, true, false);
            WaitFor(!AllPlayersInArea(X12_4));
            SetEventFlag(X0_4, OFF);
            SetEventFlag(X4_4, OFF);
            SetEventFlag(X20_4, OFF);
            EndEvent();
        }
    }
});

// 【中下段】天秤エレベーター_天秤Aが上
$Event(12900365, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(!EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X20_4, 123, false, false, false);
        ForceAnimationPlayback(X16_4, 3, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 24, false, false, false);
        ForceAnimationPlayback(X16_4, 4, false, true, false);
        ForceAnimationPlayback(X20_4, 0, false, true, false);
        ForceAnimationPlayback(X16_4, 120, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 121, false, false, false);
        ForceAnimationPlayback(X20_4, 1, false, true, false);
        ForceAnimationPlayback(X16_4, 122, false, true, false);
        ForceAnimationPlayback(X20_4, 2, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, OFF);
        SetEventFlag(X4_4, OFF);
    }
    RestartEvent();
});

// 【中下段】天秤エレベーター_天秤Aが下
$Event(12900367, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(!EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X16_4, 123, false, false, false);
        ForceAnimationPlayback(X20_4, 3, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 4, false, false, false);
        ForceAnimationPlayback(X16_4, 24, false, true, false);
        ForceAnimationPlayback(X20_4, 120, false, true, false);
        ForceAnimationPlayback(X16_4, 0, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 1, false, false, false);
        ForceAnimationPlayback(X20_4, 121, false, true, false);
        ForceAnimationPlayback(X16_4, 2, false, true, false);
        ForceAnimationPlayback(X20_4, 122, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, ON);
        SetEventFlag(X4_4, OFF);
    }
    RestartEvent();
});

// 【上中段】天秤エレベーター初期化
$Event(12900369, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, OFF);
    ForceAnimationPlayback(X20_4, 12, false, true, false);
    ForceAnimationPlayback(X24_4, 12, false, true, false);
    EndEvent();
});

// 【上中段】天秤エレベーター初回
$Event(12900371, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeSeconds(1);
    if (EventFlag(X20_4)) {
        if (!EventFlag(X4_4)) {
            WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4) && EventFlag(X20_4));
            SetEventFlag(X4_4, ON);
            WaitFixedTimeSeconds(1);
            ForceAnimationPlayback(X16_4, 13, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(X16_4, 14, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(X16_4, 101, false, true, false);
            ForceAnimationPlayback(X16_4, 102, false, true, false);
            WaitFor(!AllPlayersInArea(X12_4));
            SetEventFlag(X0_4, OFF);
            SetEventFlag(X4_4, OFF);
            SetEventFlag(X20_4, OFF);
            EndEvent();
        }
    }
});

// 【上中段】天秤エレベーター_天秤Aが上
$Event(12900373, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(!EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X20_4, 103, false, false, false);
        ForceAnimationPlayback(X16_4, 13, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 5, false, false, false);
        ForceAnimationPlayback(X16_4, 14, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 101, false, false, false);
        ForceAnimationPlayback(X20_4, 11, false, true, false);
        ForceAnimationPlayback(X16_4, 102, false, true, false);
        ForceAnimationPlayback(X20_4, 12, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, OFF);
        SetEventFlag(X4_4, OFF);
        RestartEvent();
    }
});

// 【上中段】天秤エレベーター_天秤Aが下
$Event(12900375, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(!EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X16_4, 103, false, false, false);
        ForceAnimationPlayback(X20_4, 13, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 14, false, false, false);
        ForceAnimationPlayback(X16_4, 5, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 11, false, false, false);
        ForceAnimationPlayback(X20_4, 101, false, true, false);
        ForceAnimationPlayback(X16_4, 12, false, true, false);
        ForceAnimationPlayback(X20_4, 102, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, ON);
        SetEventFlag(X4_4, OFF);
        RestartEvent();
    }
});

// ダメージ球作成_XX
$Event(12900377, Default, function(X0_4, X4_4) {
    if (!EventFlag(92905107)) {
        if (!EventFlag(92905106)) {
            if (!EventFlag(92905105)) {
                if (!EventFlag(92905104)) {
                    if (!EventFlag(92905103)) {
                        if (!EventFlag(92905102)) {
                            if (!EventFlag(92905101)) {
                                if (!EventFlag(92905100)) {
                                }
L0:
                                CreateDamagingObject(X4_4, X0_4, 101, 6130, DamageTargetType.Character, 0.3, 0, 2);
                                EndEvent();
                            }
L1:
                            CreateDamagingObject(X4_4, X0_4, 101, 6131, DamageTargetType.Character, 0.3, 0, 2);
                            EndEvent();
                        }
L2:
                        CreateDamagingObject(X4_4, X0_4, 101, 6132, DamageTargetType.Character, 0.3, 0, 2);
                        EndEvent();
                    }
L3:
                    CreateDamagingObject(X4_4, X0_4, 101, 6133, DamageTargetType.Character, 0.3, 0, 2);
                    EndEvent();
                }
L4:
                CreateDamagingObject(X4_4, X0_4, 101, 6134, DamageTargetType.Character, 0.3, 0, 2);
                EndEvent();
            }
L5:
            CreateDamagingObject(X4_4, X0_4, 101, 6135, DamageTargetType.Character, 0.3, 0, 2);
            EndEvent();
        }
L6:
        CreateDamagingObject(X4_4, X0_4, 101, 6136, DamageTargetType.Character, 0.3, 0, 2);
        EndEvent();
    }
L7:
    CreateDamagingObject(X4_4, X0_4, 101, 6137, DamageTargetType.Character, 0.3, 0, 2);
});

// 焚き火ダメージ球作成_XX
$Event(12900395, Default, function(X0_4, X4_4) {
    CreateObjectfollowingSFX(X0_4, 704, 900110);
    if (!EventFlag(92905107)) {
        if (!EventFlag(92905106)) {
            if (!EventFlag(92905105)) {
                if (!EventFlag(92905104)) {
                    if (!EventFlag(92905103)) {
                        if (!EventFlag(92905102)) {
                            if (!EventFlag(92905101)) {
                                if (!EventFlag(92905100)) {
                                }
L0:
                                CreateDamagingObject(X4_4, X0_4, 704, 6160, DamageTargetType.Character, 0.6, 0, 1);
                                EndEvent();
                            }
L1:
                            CreateDamagingObject(X4_4, X0_4, 704, 6161, DamageTargetType.Character, 0.6, 0, 1);
                            EndEvent();
                        }
L2:
                        CreateDamagingObject(X4_4, X0_4, 704, 6162, DamageTargetType.Character, 0.6, 0, 1);
                        EndEvent();
                    }
L3:
                    CreateDamagingObject(X4_4, X0_4, 704, 6163, DamageTargetType.Character, 0.6, 0, 1);
                    EndEvent();
                }
L4:
                CreateDamagingObject(X4_4, X0_4, 704, 6164, DamageTargetType.Character, 0.6, 0, 1);
                EndEvent();
            }
L5:
            CreateDamagingObject(X4_4, X0_4, 704, 6165, DamageTargetType.Character, 0.6, 0, 1);
            EndEvent();
        }
L6:
        CreateDamagingObject(X4_4, X0_4, 704, 6166, DamageTargetType.Character, 0.6, 0, 1);
        EndEvent();
    }
L7:
    CreateDamagingObject(X4_4, X0_4, 704, 6167, DamageTargetType.Character, 0.6, 0, 1);
});

// 落とし穴_XX
$Event(12900423, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(X4_4, 1);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, X0_4));
    CreatePlaylog(152);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 929209);
    PlaySE(X4_4, SoundType.oObject, 997400000);
    RequestObjectDestruction(X4_4, 1);
});

// 寡婦ジェネレーター無効_XX
$Event(12900430, Default, function(X0_4) {
    DeactivateGenerator(X0_4, Disabled);
});

// 寡婦ジェネレート切替_XX
$Event(12901000, Default, function(X0_4, X4_4) {
    DeactivateGenerator(X4_4, Disabled);
    WaitFor(
        CharacterInsideDrawGroup(X0_4)
            && CharacterAIState(X0_4, AIStateType.Normal)
            && CharacterHasEventMessage(X0_4, 100));
    DeactivateGenerator(X4_4, Enabled);
    WaitFor(!CharacterInsideDrawGroup(X0_4) || CharacterAIState(X0_4, AIStateType.Combat));
    RestartEvent();
});

// 召喚敵生成ワープ_XX
$Event(12901200, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(X4_4, 100));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 30, X0_4);
    WaitFor(!CharacterHasEventMessage(X4_4, 100));
    WaitFor(CharacterDead(X4_4));
    SetSpEffectAndUnknown200455(X4_4, 5751, false);
    RestartEvent();
});

// 寡婦死亡でザコ死亡_XX
$Event(12901272, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasEventMessage(X8_4, 100));
    chr = CharacterDead(X8_4);
    chr2 = CharacterDead(X0_4);
    WaitFor(chr || chr2);
    if (chr2.Passed) {
        DeactivateGenerator(X4_4, Disabled);
        ForceCharacterDeath(X8_4, true);
    }
L0:
    RestartEvent();
});

// 矢トラップ_スイッチ_XX
$Event(12901347, Default, function(X0_4, X4_4, X8_4) {
    flagArea = !EventFlag(X8_4) && InArea(10000, X0_4);
    flagArea2 = EventFlag(X8_4) && !AllPlayersInArea(X0_4);
    WaitFor(flagArea || flagArea2);
    if (!flagArea2.Passed) {
        ForceAnimationPlayback(X4_4, 0, false, true, false);
        SetEventFlag(X8_4, ON);
        WaitFixedTimeSeconds(2.1);
        RestartEvent();
    }
L0:
    SetEventFlag(X8_4, OFF);
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    RestartEvent();
});

// 矢トラップ_発射_XX
$Event(12901400, Default, function(X0_4, X4_4) {
    obj = !ObjectDestroyed(X0_4);
    WaitFor(obj && EventFlag(X4_4));
    EndIf(!obj.Passed);
    CreatePlaylog(188);
    SpawnOneshotSFX(TargetEntityType.Object, X0_4, 101, 150005);
    PlaySE(X0_4, SoundType.oObject, 990100001);
    GotoIf(S29, EventFlag(92905107));
    GotoIf(S25, EventFlag(92905106));
    GotoIf(S21, EventFlag(92905105));
    GotoIf(S17, EventFlag(92905104));
    GotoIf(S13, EventFlag(92905103));
    GotoIf(S9, EventFlag(92905102));
    GotoIf(S5, EventFlag(92905101));
    GotoIf(S0, EventFlag(92905100));
S0:
    GotoIf(S3, EventFlag(92905310));
    GotoIf(S2, EventFlag(92905204));
    GotoIf(S1, EventFlag(92905202));
    ShootBullet(2900000, X0_4, 101, 6200, 0, 0, 0);
    Goto(S4);
S1:
    ShootBullet(2900000, X0_4, 101, 6210, 0, 0, 0);
    Goto(S4);
S2:
    ShootBullet(2900000, X0_4, 101, 6220, 0, 0, 0);
    Goto(S4);
S3:
    ShootBullet(2900000, X0_4, 101, 6230, 0, 0, 0);
S4:
    Goto(S33);
S5:
    if (!EventFlag(92905310)) {
        GotoIf(S7, EventFlag(92905204));
        GotoIf(S6, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6201, 0, 0, 0);
        Goto(S8);
S6:
        ShootBullet(2900000, X0_4, 101, 6211, 0, 0, 0);
        Goto(S8);
S7:
        ShootBullet(2900000, X0_4, 101, 6221, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6231, 0, 0, 0);
    }
S8:
    Goto(S33);
S9:
    if (!EventFlag(92905310)) {
        GotoIf(S11, EventFlag(92905204));
        GotoIf(S10, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6202, 0, 0, 0);
        Goto(S12);
S10:
        ShootBullet(2900000, X0_4, 101, 6212, 0, 0, 0);
        Goto(S12);
S11:
        ShootBullet(2900000, X0_4, 101, 6222, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6232, 0, 0, 0);
    }
S12:
    Goto(S33);
S13:
    if (!EventFlag(92905310)) {
        GotoIf(S15, EventFlag(92905204));
        GotoIf(S14, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6203, 0, 0, 0);
        Goto(S16);
S14:
        ShootBullet(2900000, X0_4, 101, 6213, 0, 0, 0);
        Goto(S16);
S15:
        ShootBullet(2900000, X0_4, 101, 6223, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6233, 0, 0, 0);
    }
S16:
    Goto(S33);
S17:
    if (!EventFlag(92905310)) {
        GotoIf(S19, EventFlag(92905204));
        GotoIf(S18, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6204, 0, 0, 0);
        Goto(S20);
S18:
        ShootBullet(2900000, X0_4, 101, 6214, 0, 0, 0);
        Goto(S20);
S19:
        ShootBullet(2900000, X0_4, 101, 6224, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6234, 0, 0, 0);
    }
S20:
    Goto(S33);
S21:
    if (!EventFlag(92905310)) {
        GotoIf(S23, EventFlag(92905204));
        GotoIf(S22, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6205, 0, 0, 0);
        Goto(S24);
S22:
        ShootBullet(2900000, X0_4, 101, 6215, 0, 0, 0);
        Goto(S24);
S23:
        ShootBullet(2900000, X0_4, 101, 6225, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6235, 0, 0, 0);
    }
S24:
    Goto(S33);
S25:
    if (!EventFlag(92905310)) {
        GotoIf(S27, EventFlag(92905204));
        GotoIf(S26, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6206, 0, 0, 0);
        Goto(S28);
S26:
        ShootBullet(2900000, X0_4, 101, 6216, 0, 0, 0);
        Goto(S28);
S27:
        ShootBullet(2900000, X0_4, 101, 6226, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6236, 0, 0, 0);
    }
S28:
    Goto(S33);
S29:
    if (!EventFlag(92905310)) {
        GotoIf(S31, EventFlag(92905204));
        GotoIf(S30, EventFlag(92905202));
        ShootBullet(2900000, X0_4, 101, 6207, 0, 0, 0);
        Goto(S32);
S30:
        ShootBullet(2900000, X0_4, 101, 6217, 0, 0, 0);
        Goto(S32);
S31:
        ShootBullet(2900000, X0_4, 101, 6227, 0, 0, 0);
    } else {
        ShootBullet(2900000, X0_4, 101, 6237, 0, 0, 0);
    }
S32:
    Goto(S33);
S33:
    WaitFixedTimeSeconds(0.7);
    WaitFor(!EventFlag(X4_4));
    RestartEvent();
});

// ナビメッシュノードバンク_XX
$Event(12901447, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Add);
    WaitFor(ObjActEventFlag(X0_4));
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Delete);
});

// 跳ね橋ナビメッシュノードバンク_XX
$Event(12901525, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Add);
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(3);
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Delete);
});

// 宝敵再出現制御_XX
$Event(12901532, Restart, function(X0_4, X4_4) {
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

// 跳ね橋降下
$Event(12901550, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X4_4, 1);
        ReproduceObjectAnimation(X8_4, 0);
        SetObjactState(X4_4, 2931100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    CreatePlaylog(224);
});

// 不意打ち敵_PC発見で起動
$Event(12901554, Default, function(X0_4, X4_4) {
    WaitFor(CharacterTargetedBy(X0_4, 10000) || CharacterDamagedBy(X0_4, 10000));
    SetCharacterAIId(X0_4, X4_4);
    RequestCharacterAIReplan(X0_4);
});

// 弾丸オーナー作成
$Event(12901555, Default, function() {
    CreateBulletOwner(2900000);
    ChangeCharacterEnableState(2900000, Disabled);
});

// はしご登録
$Event(12901556, Default, function(X0_4, X4_4, X8_4) {
    RegisterLadder(X0_4, X4_4, X8_4);
});

// ボス撃破
$Event(12901588, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(X0_4);
    CreatePlaylog(262);
    if (X12_4 == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(X12_4, ON);
});

// 複数ボス撃破
$Event(12901589, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4) && CharacterDead(X24_4));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(X0_4);
    CreatePlaylog(262);
    if (X12_4 == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(X12_4, ON);
});

// ボスラッシュ_ボス撃破
$Event(12901590, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    CreatePlaylog(262);
    EndTimeMeasurement(2900020);
    HandleBossDefeat(X0_4);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    SetEventFlag(X12_4, ON);
});

// 三体ボス撃破
$Event(12901591, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4) && CharacterDead(X24_4) && CharacterDead(X28_4));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(X0_4);
    CreatePlaylog(262);
    if (X12_4 == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(X12_4, ON);
});

// ボス部屋_4F扉解放
$Event(12901592, Default, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X0_4) && EventFlag(92905360) && !EventFlag(12907220));
        WaitFixedTimeSeconds(3);
    }
    SetEventFlag(12907220, ON);
    DeactivateObject(X4_4, Disabled);
});

// ボスラッシュ_扉解放
$Event(12901593, Default, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X0_4));
    }
    DeactivateObject(X4_4, Disabled);
});

// 【3F用】ボス撃破アイテム取得
$Event(12901594, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    if (EventFlag(92905377) && !EventFlag(X28_4)) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    if (!EventFlag(92905378)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    if (!(EventFlag(92905360) && EventFlag(12907220))) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    AwardItemLot(X20_4);
    EndEvent();
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        EndIf(!AnyBatchEventFlags(92905370, 92905373));
        if (!EventFlag(X28_4)) {
            AwardItemLot(X20_4);
            SetEventFlag(X28_4, ON);
        } else {
            AwardItemLot(X24_4);
        }
        EndIf(!AnyBatchEventFlags(92905371, 92905373));
        AwardItemLot(X20_4);
        EndEvent();
    }
    AwardItemsIncludingClients(X8_4);
    EndEvent();
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// 【4F用】ボス撃破アイテム取得
$Event(12901595, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    if (EventFlag(92905377) && !EventFlag(X28_4)) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    if (!EventFlag(92905378)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    if (!(EventFlag(92905360) && EventFlag(12907220))) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    AwardItemLot(X20_4);
    EndEvent();
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        EndIf(!EventFlag(92905360));
        AwardItemLot(X16_4);
        EndIf(!AnyBatchEventFlags(92905370, 92905373));
        if (!EventFlag(X28_4)) {
            AwardItemLot(X20_4);
            SetEventFlag(X28_4, ON);
        } else {
            AwardItemLot(X24_4);
        }
        EndIf(!AnyBatchEventFlags(92905371, 92905373));
        AwardItemLot(X20_4);
        EndEvent();
    }
    AwardItemsIncludingClients(X8_4);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// 【1,2F用】ボス撃破アイテム取得
$Event(12901596, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    AwardItemLot(X8_4);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// 【ボスラッシュ用】ボス撃破アイテム取得
$Event(12901597, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    AwardItemLot(X8_4);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// 【フロアボス・大ボス用】ボス撃破アイテム取得
$Event(12901598, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    AwardItemLot(X8_4);
    EndEvent();
});

// ボス登場アニメ再生_XX
$Event(12901599, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true);
    WaitFor(InArea(10000, X4_4));
    RotateCharacter(X0_4, 10000, X12_4, false);
});

// Bボス登場SFX再生_XX
$Event(12901600, Default, function(X0_4, X4_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4));
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, 929227);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ボス壁有効化
$Event(12901601, Default, function(X0_4) {
    DeactivateObject(X0_4, Disabled);
});

// 領域通過でランタン点灯_XX
$Event(12901602, Default, function(X0_4, X4_4) {
    CreateObjectfollowingSFX(X4_4, 200, 8020);
    ForceAnimationPlayback(X4_4, 200, true, true, false);
    if (!ThisEventSlot()) {
        WaitFor(InArea(10000, X0_4));
    }
    ForceAnimationPlayback(X4_4, 1000000, false, true, false);
    CreateObjectfollowingSFX(X4_4, 100, 8023);
    ForceAnimationPlayback(X4_4, 1000100, true, true, false);
});

// トロフィー開放_XX
$Event(12901684, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    AwardAchievement(X4_4);
});

// プレイログ_クリア時間計測
$Event(12901685, Default, function() {
    StartTimeMeasurement(2900000, 380, Disabled);
    if (!EventFlag(12901809)) {
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 398, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 398, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 398, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 398, PlayLogMultiplayerType.HostOnly);
        SetEventFlag(12901809, ON);
    }
    if (!EventFlag(12901800)) {
        StartTimeMeasurement(2901000, 426, Disabled);
        StartTimeMeasurement(2901001, 462, Enabled);
        WaitFor(EventFlag(12901800));
        EndTimeMeasurement(2901000);
        EndTimeMeasurement(2901001);
    }
    if (!EventFlag(12901801)) {
        StartTimeMeasurement(2901010, 502, Disabled);
        StartTimeMeasurement(2901011, 538, Enabled);
        WaitFor(EventFlag(12901801));
        EndTimeMeasurement(2901010);
        EndTimeMeasurement(2901011);
    }
    if (!EventFlag(12901802)) {
        StartTimeMeasurement(2901020, 578, Disabled);
        StartTimeMeasurement(2901021, 614, Enabled);
        WaitFor(EventFlag(12901802));
        EndTimeMeasurement(2901020);
        EndTimeMeasurement(2901021);
    }
    if (EventFlag(92905360)) {
        if (!EventFlag(12901803)) {
            StartTimeMeasurement(2901030, 654, Disabled);
            StartTimeMeasurement(2901031, 692, Enabled);
            WaitFor(EventFlag(12901803));
            EndTimeMeasurement(2901030);
            EndTimeMeasurement(2901031);
        }
    }
    EndTimeMeasurement(2900000);
    EndEvent();
});

// ボス撃破処理
$Event(12901686, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X12_4, true);
        DeleteMapSFX(X16_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4) || HPRatio(X0_4) == 0);
    WaitFor(CharacterDead(X0_4) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeleteMapSFX(X12_4, true);
    DeleteMapSFX(X16_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X20_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
L2:
        SetEventFlag(X20_4, ON);
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X20_4, ON);
});

// ボス撃破処理_出口無し
$Event(12901690, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeleteMapSFX(X8_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4) || HPRatio(X0_4) == 0);
    WaitFor(CharacterDead(X0_4) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.Every2Frames);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X12_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
L2:
        SetEventFlag(X12_4, ON);
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X12_4, ON);
});

// ボス撃破処理_前座
$Event(12901692, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X12_4, true);
        DeleteMapSFX(X16_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4) || HPRatio(X0_4) == 0);
    WaitFor(CharacterDead(X0_4) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeleteMapSFX(X12_4, true);
    DeleteMapSFX(X16_4, true);
    WaitFixedTimeSeconds(3);
    HandleMinibossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X20_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(X20_4, ON);
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X20_4, ON);
});

// ボス報酬_撃破アイテム
$Event(12901693, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(92905385) && (EventFlag(12907212) || EventFlag(12907213))) {
            GotoIf(S0, EventFlag(12907213));
            AwardItemLot(X20_4);
            Goto(L1);
S0:
            AwardItemLot(X24_4);
        } else {
            GotoIf(L3, 
                !EventFlag(92905385)
                    && EventFlag(92905378)
                    && (EventFlag(12907211) || EventFlag(12907212)));
            Goto(L1);
L3:
            if (!EventFlag(12907212)) {
                AwardItemLot(X20_4);
            } else {
                AwardItemLot(X24_4);
                Goto(L1);
            }
        }
L1:
        GotoIf(L2, EventFlag(92905360));
        GotoIf(L0, !EventFlag(12907212));
        SetEventFlag(12907221, ON);
        Goto(L0);
L2:
        if (EventFlag(12907213)) {
            SetEventFlag(12907221, ON);
            Goto(L0);
        }
    }
L0:
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        GotoIf(S1, EventFlag(92905370));
        AwardItemsIncludingClients(X4_4);
        Goto(L9);
S1:
        AwardItemsIncludingClients(X8_4);
    } else {
L4:
        if (!EventFlag(92905370)) {
            AwardItemsIncludingClients(X12_4);
        } else {
            AwardItemsIncludingClients(X16_4);
            Goto(L9);
        }
    }
L9:
    if (InArea(10000, 2902960) || InArea(10000, 2902961)) {
        if (EventFlag(92905100)) {
            AwardItemsIncludingClients(110001000);
            EndEvent();
        }
        if (EventFlag(92905101)) {
            AwardItemsIncludingClients(110002000);
            EndEvent();
        }
        if (EventFlag(92905102)) {
            AwardItemsIncludingClients(110003000);
            EndEvent();
        }
        if (EventFlag(92905103)) {
            AwardItemsIncludingClients(110004000);
            EndEvent();
        }
        if (EventFlag(92905104)) {
            AwardItemsIncludingClients(110005000);
            EndEvent();
        }
        EndEvent();
    }
    if (InArea(10000, 2902962) || InArea(10000, 2902963)) {
        if (EventFlag(92905100)) {
            AwardItemsIncludingClients(110001010);
            EndEvent();
        }
        if (EventFlag(92905101)) {
            AwardItemsIncludingClients(110002010);
            EndEvent();
        }
        if (EventFlag(92905102)) {
            AwardItemsIncludingClients(110003010);
            EndEvent();
        }
        if (EventFlag(92905103)) {
            AwardItemsIncludingClients(110004010);
            EndEvent();
        }
        if (EventFlag(92905104)) {
            AwardItemsIncludingClients(110005010);
            EndEvent();
        }
        EndEvent();
    }
    EndEvent();
});

// ボス部屋入場_ホスト_初戦_アニメ
$Event(12901697, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X16_4));
    EndIf(EventFlag(X24_4));
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true);
    WaitFor(ObjActEventFlag(X28_4));
    WaitFor(
        !EventFlag(X16_4)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    RotateCharacter(X0_4, 10000, X12_4, false);
    SetEventFlag(X20_4, ON);
    SetEventFlag(X24_4, ON);
});

// ボス部屋入場_ホスト_初戦_SFX
$Event(12901701, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X16_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(ObjActEventFlag(X20_4));
    WaitFor(
        !EventFlag(X8_4)
            && !EventFlag(X16_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ボス部屋入場_ホスト_初戦_アニメ_前座
$Event(12901705, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X16_4));
    EndIf(EventFlag(X24_4));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true);
    WaitFor(ObjActEventFlag(X28_4));
    WaitFor(
        !EventFlag(X16_4)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    RotateCharacter(X0_4, 10000, X12_4, false);
    SetEventFlag(X20_4, ON);
    SetEventFlag(X24_4, ON);
});

// ボス部屋入場_ホスト_初戦_SFX_前座
$Event(12901706, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X16_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(ObjActEventFlag(X20_4));
    WaitFor(
        !EventFlag(X8_4)
            && !EventFlag(X16_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ボス部屋入場_ホスト_初戦_SFX_デブ
$Event(12901707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X16_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    WaitFor(ObjActEventFlag(X28_4));
    WaitFor(
        !EventFlag(X8_4)
            && !EventFlag(X16_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFixedTimeFrames(15);
    SpawnOneshotSFX(TargetEntityType.Character, X20_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X20_4, Enabled);
    WaitFixedTimeFrames(15);
    SpawnOneshotSFX(TargetEntityType.Character, X24_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X24_4, Enabled);
});

// ボス報酬_撃破SAN値
$Event(12901708, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L2, X4_4 == 127000);
    GotoIf(L2, X4_4 == 216000);
    GotoIf(L2, X4_4 == 304000);
    GotoIf(L2, X4_4 == 313000);
    GotoIf(L2, X4_4 == 750000);
    GotoIf(L2, X4_4 == 7200);
    GotoIf(L2, X4_4 == 7040);
    GotoIf(L2, X4_4 == 106000);
    GotoIf(L2, X4_4 == 218000);
    GotoIf(L2, X4_4 == 209000);
    GotoIf(L2, X4_4 == 257000);
    GotoIf(L2, X4_4 == 305000);
    GotoIf(L2, X4_4 == 305010);
    GotoIf(L2, X4_4 == 501000);
    GotoIf(L2, X4_4 == 504000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L3, X4_4 == 306000);
    GotoIf(L3, X4_4 == 508000);
    GotoIf(L3, X4_4 == 509000);
    GotoIf(L3, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L0:
    NoOp();
});

// ボス報酬_撃破SAN値_前座
$Event(12901712, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L2, X4_4 == 216000);
    GotoIf(L2, X4_4 == 216000);
    GotoIf(L2, X4_4 == 304000);
    GotoIf(L2, X4_4 == 313000);
    GotoIf(L2, X4_4 == 750000);
    GotoIf(L2, X4_4 == 7200);
    GotoIf(L2, X4_4 == 209000);
    GotoIf(L2, X4_4 == 257000);
    GotoIf(L2, X4_4 == 305000);
    GotoIf(L2, X4_4 == 305010);
    GotoIf(L2, X4_4 == 501000);
    GotoIf(L2, X4_4 == 504000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L3, X4_4 == 306000);
    GotoIf(L3, X4_4 == 508000);
    GotoIf(L3, X4_4 == 509000);
    GotoIf(L3, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L0:
    NoOp();
});

// ボス入口扉開放
$Event(12901713, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(0);
});

// ボス入口扉開放_前座
$Event(12901717, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(0);
});

// ボス報酬_出会いSAN値
$Event(12901718, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L1, X4_4 == 216000);
    GotoIf(L1, X4_4 == 209000);
    GotoIf(L1, X4_4 == 305000);
    GotoIf(L1, X4_4 == 305010);
    GotoIf(L1, X4_4 == 501000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L1, X4_4 == 306000);
    GotoIf(L1, X4_4 == 508000);
    GotoIf(L1, X4_4 == 509000);
    GotoIf(L1, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(X8_4, ON);
});

// ボス報酬_出会いSAN値_前座
$Event(12901722, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L1, X4_4 == 216000);
    GotoIf(L1, X4_4 == 209000);
    GotoIf(L1, X4_4 == 305000);
    GotoIf(L1, X4_4 == 305010);
    GotoIf(L1, X4_4 == 501000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L1, X4_4 == 306000);
    GotoIf(L1, X4_4 == 508000);
    GotoIf(L1, X4_4 == 509000);
    GotoIf(L1, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(X8_4, ON);
});

// ボス撃破処理_2体
$Event(12901723, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterDead(X0_4) || HPRatio(X0_4) == 0) && (CharacterDead(X24_4) || HPRatio(X24_4) == 0));
    WaitFor((CharacterDead(X0_4) && CharacterDead(X24_4)) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X12_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(X12_4, ON);
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X12_4, ON);
});

// ボス撃破処理_デブ
$Event(12901725, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        ForceCharacterDeath(X24_4, false);
        ForceCharacterDeath(X28_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterDead(X0_4) || HPRatio(X0_4) == 0)
            && (CharacterDead(X24_4) || HPRatio(X24_4) == 0)
            && (CharacterDead(X28_4) || HPRatio(X28_4) == 0));
    WaitFor(
        (CharacterDead(X0_4) && CharacterDead(X24_4) && CharacterDead(X28_4)) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X12_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(X12_4, ON);
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X12_4, ON);
});

// ボス部屋出口開放_前座
$Event(12901727, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X4_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(X0_4));
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    DeactivateObject(X4_4, Disabled);
});

// ボス部屋出口開放_3F後
$Event(12901728, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X4_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(X0_4) && EventFlag(92905360) && !EventFlag(12907220));
    WaitFixedTimeSeconds(3);
L0:
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    SetEventFlag(12907220, ON);
    DeactivateObject(X4_4, Disabled);
});

// ボス報酬_撃破アイテム_前座
$Event(12901730, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (!EventFlag(92905370)) {
            AwardItemLot(X4_4);
            EndEvent();
        }
        AwardItemLot(X8_4);
        EndEvent();
    }
L0:
    if (!EventFlag(92905370)) {
        AwardItemLot(X12_4);
        EndEvent();
    }
    AwardItemLot(X16_4);
    EndEvent();
});

// ザコボス無効化
$Event(12901754, Default, function(X0_4) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(X0_4, true);
    }
L0:
    WaitFor(CharacterDead(X0_4));
    EndEvent();
});

// 星の花死亡演出
$Event(12904000, Restart, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(HPRatio(X0_4) <= 0 && CharacterHasEventMessage(X0_4, 10));
    IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, 90);
    ChangeCharacterEnableState(X4_4, Enabled);
    ForceAnimationPlayback(X4_4, 2250, true, false, false);
    WaitFixedTimeFrames(5);
    ForceCharacterTreasure(X4_4);
    WaitFixedTimeFrames(135);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// 星の花ダメージアニメ強制変更解除
$Event(12904013, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5676));
    ClearSpEffect(X0_4, 5333);
});

// 花嫁分身初期設定
$Event(12904026, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    SetCharacterImmortality(X4_4, Enabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// 花嫁撃破で分身道連れ
$Event(12904027, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X0_4) == 0);
    ForceCharacterDeath(X4_4, false);
    ForceCharacterDeath(X8_4, false);
});

// 花嫁_ヒートアップ
$Event(12904028, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(HPRatio(X0_4) <= 0.4);
    RequestCharacterAICommand(X4_4, 100, 1);
    RequestCharacterAICommand(X8_4, 100, 1);
});

// 花嫁のワープ先選択_大カテゴリ
$Event(12904029, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X20_4));
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    IncrementEventValue(X4_4, 10, 9);
    flag = EventValue(X4_4, 10) == 1 || EventValue(X4_4, 10) == 3 || EventValue(X4_4, 10) == 7;
    flag2 = EventValue(X4_4, 10) == 2 || EventValue(X4_4, 10) == 5 || EventValue(X4_4, 10) == 9;
    flag3 = EventValue(X4_4, 10) == 4 || EventValue(X4_4, 10) == 6 || EventValue(X4_4, 10) == 8;
    GotoIf(L0, flag);
    GotoIf(L1, flag2);
    GotoIf(L2, flag3);
L0:
    SetEventFlag(X8_4, ON);
    Goto(L3);
L1:
    SetEventFlag(X12_4, ON);
    Goto(L3);
L2:
    SetEventFlag(X16_4, ON);
L3:
    if (EventValue(X4_4, 10) == 9) {
        ClearEventValue(X4_4, 10);
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 90));
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);
    RestartEvent();
});

// 花嫁のワープ先選択_小カテゴリ
$Event(12904030, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X24_4));
    WaitFor(EventFlag(X4_4));
    IncrementEventValue(X8_4, 10, 12);
    flag = EventValue(X8_4, 10) == 4
        || EventValue(X8_4, 10) == 6
        || EventValue(X8_4, 10) == 8
        || EventValue(X8_4, 10) == 11;
    flag2 = EventValue(X8_4, 10) == 1
        || EventValue(X8_4, 10) == 5
        || EventValue(X8_4, 10) == 9
        || EventValue(X8_4, 10) == 12;
    flag3 = EventValue(X8_4, 10) == 2
        || EventValue(X8_4, 10) == 3
        || EventValue(X8_4, 10) == 7
        || EventValue(X8_4, 10) == 10;
    GotoIf(L0, flag);
    GotoIf(L1, flag2);
    GotoIf(L2, flag3);
L0:
    SetEventFlag(X12_4, ON);
    Goto(L3);
L1:
    SetEventFlag(X16_4, ON);
    Goto(L3);
L2:
    SetEventFlag(X20_4, ON);
L3:
    if (EventValue(X8_4, 10) == 12) {
        ClearEventValue(X8_4, 10);
    }
    WaitFor(CharacterHasEventMessage(X0_4, 90));
    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);
    SetEventFlag(X20_4, OFF);
    RestartEvent();
});

// 花嫁がワープを実行
$Event(12904033, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    flagSp = EventFlag(X4_4) && !CharacterHasSpEffect(X0_4, 5516);
    flagSp2 = EventFlag(X8_4) && !CharacterHasSpEffect(X0_4, 5516);
    flagSp3 = EventFlag(X12_4) && !CharacterHasSpEffect(X0_4, 5516);
    WaitFor(flagSp || flagSp2 || flagSp3);
    WaitFixedTimeSeconds(2);
    GotoIf(L0, flagSp.Passed);
    GotoIf(L1, flagSp2.Passed);
    GotoIf(L2, flagSp3.Passed);
L0:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    Goto(L3);
L1:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    Goto(L3);
L2:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X24_4, -1);
L3:
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    WaitFixedTimeFrames(70);
    RestartEvent();
});

// 花嫁がワープを実行_第3段階
$Event(12904036, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    flagSp = EventFlag(X4_4) && CharacterHasSpEffect(X0_4, 5516);
    flagSp2 = EventFlag(X8_4) && CharacterHasSpEffect(X0_4, 5516);
    flagSp3 = EventFlag(X12_4) && CharacterHasSpEffect(X0_4, 5516);
    WaitFor(flagSp || flagSp2 || flagSp3);
    WaitFixedTimeSeconds(2);
    GotoIf(L0, flagSp.Passed);
    GotoIf(L1, flagSp2.Passed);
    GotoIf(L2, flagSp3.Passed);
L0:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    Goto(L3);
L1:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    Goto(L3);
L2:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X24_4, -1);
L3:
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3022, false, false, false);
    WaitFixedTimeFrames(70);
    RestartEvent();
});

// 花嫁の分身が出現
$Event(12904039, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    WaitFor(CharacterHasEventMessage(X24_4, 90) && EventFlag(X16_4));
    SetSpEffect(X0_4, 5610, false);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ChangeCharacterEnableState(X20_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    WaitFor(EventFlag(X8_4));
    RestartEvent();
});

// 花嫁分身が消滅
$Event(12904040, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X20_4));
    dmg = CharacterDamagedBy(X0_4, 10000);
    WaitFor(
        dmg
            || (CharacterHasEventMessage(X16_4, 80) && EventFlag(X8_4))
            || (CharacterHasSpEffect(X16_4, 5517) && EventFlag(X8_4)));
    if (dmg.Passed) {
        ForceAnimationPlayback(X0_4, 7010, false, true, false);
    } else {
L0:
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    }
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X4_4, ON);
    RestartEvent();
});

// 胎児ダミーキャラ接続_XX
$Event(12904041, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 6, X0_4);
    RestartEvent();
});

// 花嫁からダミーキャラへの状態連絡_XX
$Event(12904042, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    RequestCharacterAICommand(X4_4, 100, 0);
    WaitFor(CharacterHasEventMessage(X0_4, 90));
    RequestCharacterAICommand(X4_4, -1, 0);
    RestartEvent();
});

// 落下敵_XX
$Event(12904043, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 9000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
    }
L0:
    CreatePlaylog(734);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 1500, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// 血舐め_XX
$Event(12904070, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X4_4, Disabled);
    if (!EventFlag(X8_4)) {
        WaitFor(CharacterHasEventMessage(X0_4, 70));
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 230, X0_4);
    }
L0:
    WaitFor(CharacterDead(X0_4));
    WaitFor(!CharacterInsideDrawGroup(X4_4));
    CreatePlaylog(768);
    ChangeCharacterEnableState(X4_4, Enabled);
    RequestCharacterAIReplan(X4_4);
});

// 一斉召喚ワープ_XX
$Event(12904156, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, X4_4, X8_4, X4_4);
    WaitFor(!CharacterHasEventMessage(X0_4, 100));
    WaitFor(CharacterDead(X0_4));
    SetSpEffectAndUnknown200455(X0_4, 5751, false);
    RestartEvent();
});

// 一斉召喚取り巻きカウント_XX
$Event(12904183, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterDead(X0_4));
    IncrementEventValue(X4_4, 3, 6);
    WaitFor(!CharacterDead(X0_4));
    EventValueOperation(X4_4, 3, 1, 0, 1, CalculationType.Sub);
    RestartEvent();
});

// 一斉召喚行動リクエスト_XX
$Event(12904210, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X0_4));
        RequestCharacterAICommand(X4_4, 100, 0);
        RequestCharacterAIReplan(X4_4);
        SetEventFlag(X12_4, ON);
        WaitFor(ElapsedSeconds(2));
        RequestCharacterAICommand(X4_4, -1, 0);
    }
L0:
    WaitFor(EventFlag(X0_4) && EventValue(X8_4, 3) >= 3);
    RequestCharacterAICommand(X4_4, 100, 0);
    RequestCharacterAIReplan(X4_4);
    WaitFor(ElapsedSeconds(2));
    RequestCharacterAICommand(X4_4, -1, 0);
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

// 一斉召喚ジェネレータ切替_XX
$Event(12904216, Restart, function(X0_4, X4_4, X8_4) {
    DeactivateGenerator(X8_4, Disabled);
    WaitFor(EventFlag(X0_4) && CharacterHasEventMessage(X4_4, 10));
    DeactivateGenerator(X8_4, Enabled);
    WaitFixedTimeSeconds(3);
    WaitFor(!EventFlag(X0_4) || !CharacterHasEventMessage(X4_4, 10));
    RestartEvent();
});

// 一斉召喚可能フラグ_XX
$Event(12904222, Restart, function(X0_4, X4_4) {
    WaitFor(
        (CharacterAIState(X4_4, AIStateType.Recognition)
            || CharacterAIState(X4_4, AIStateType.Combat))
            && !CharacterDead(X4_4)
            && CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, ON);
    WaitFor(
        CharacterAIState(X4_4, AIStateType.Normal)
            || CharacterDead(X4_4)
            || !CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// 特殊生成取り巻きカウント_XX
$Event(12904228, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    IncrementEventValue(X4_4, 3, 6);
    WaitFor(CharacterDead(X0_4));
    EventValueOperation(X4_4, 3, 1, 0, 1, CalculationType.Sub);
    RestartEvent();
});

// 特殊生成行動リクエスト_XX
$Event(12904274, Restart, function(X0_4, X4_4, X8_4) {
L0:
    WaitFor(EventFlag(X0_4) && EventValue(X8_4, 3) <= 2);
    ForceAnimationPlayback(X4_4, 3011, false, false, false);
    RequestCharacterAICommand(X4_4, 10, 2);
    RequestCharacterAIReplan(X4_4);
    WaitFor(ElapsedSeconds(2));
    RequestCharacterAICommand(X4_4, -1, 2);
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

// 特殊生成ジェネレータ切替_XX
$Event(12904285, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DeactivateGenerator(X8_4, Disabled);
    DeactivateGenerator(X12_4, Disabled);
    DeactivateGenerator(X16_4, Disabled);
    WaitFor(EventFlag(X0_4) && CharacterHasEventMessage(X4_4, 20));
    DeactivateGenerator(X8_4, Enabled);
    DeactivateGenerator(X12_4, Enabled);
    DeactivateGenerator(X16_4, Enabled);
    WaitFixedTimeSeconds(3);
    WaitFor(!EventFlag(X0_4) || !CharacterHasEventMessage(X4_4, 20));
    RestartEvent();
});

// 特殊生成可能フラグ_XX
$Event(12904326, Restart, function(X0_4, X4_4) {
    WaitFor(
        (CharacterAIState(X4_4, AIStateType.Recognition)
            || CharacterAIState(X4_4, AIStateType.Combat))
            && !CharacterDead(X4_4)
            && CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, ON);
    WaitFor(
        CharacterAIState(X4_4, AIStateType.Normal)
            || CharacterDead(X4_4)
            || !CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// トラップ出現敵_XX
$Event(12904337, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X0_4));
    SetCharacterAnimationState(X0_4, Disabled);
    SetSpEffect(X0_4, 5401, false);
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(ObjActEventFlag(X4_4));
    CreatePlaylog(806);
    WaitFixedTimeSeconds(3);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
});

// 黒い宝箱_XX
$Event(12904338, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    SpawnOneshotSFX(TargetEntityType.Object, X0_4, -1, 0);
    WaitFor(CharacterBackreadStatus(X8_4));
    SetCharacterAIState(X8_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    obj = ObjActEventFlag(X4_4);
    obj2 = ObjectDestroyed(X0_4);
    WaitFor(obj || obj2);
    SetEventFlag(X12_4, ON);
    CreatePlaylog(806);
    if (!obj2.Passed) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(X8_4, Enabled);
    WaitFixedTimeFrames(2);
    ForceAnimationPlayback(X8_4, 3020, false, false, false);
    WaitFor(ElapsedFrames(40) || HasDamageType(X8_4, 10000, DamageType.Unspecified));
    SetCharacterAIState(X8_4, Enabled);
});

// 岩ゴロゴロ
$Event(12904342, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 6, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(8.5);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X8_4, 10, false, false, false);
    WaitFixedTimeFrames(1);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    RestartEvent();
});

// 始祖ビースト虫の当り抜き
$Event(12904343, Default, function(X0_4) {
    ChangeCharacterHitmask(X0_4, 0, ON);
});

// 死と闇の眷属_松明を恐れる_XX
$Event(12904345, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, X0_4, 9));
    ForceAnimationPlayback(X0_4, 7007, false, false, false);
    RequestCharacterAICommand(X0_4, 10, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 404) || ElapsedSeconds(10));
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
});

// サソリの子供_XX
$Event(12904361, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterDispmask(X0_4, 0, OFF);
        ChangeCharacterEnableState(X4_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 10, NPCPartType.Part1, 30, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 10, 59, 59);
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(NPCPartHP(X0_4, 10) <= 0 || HPRatio(X0_4) <= 0);
    SetCharacterAIId(X0_4, 121001);
    SetCharacterGravity(X4_4, Disabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 40, X0_4);
    ChangeCharacterEnableState(X4_4, Enabled);
    ChangeCharacterDispmask(X0_4, 0, OFF);
    ForceAnimationPlayback(X4_4, 8100, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// 吊るされた宝死体_XX
$Event(12904369, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X8_4)) {
        ReproduceObjectDestruction(X0_4, 1);
        ForceAnimationPlayback(X4_4, X12_4, false, false, false);
        SetObjectTreasureState(X4_4, Enabled);
        EndEvent();
    }
L0:
    CreateObjectfollowingSFX(X4_4, 90, 900201);
    ForceAnimationPlayback(X4_4, X16_4, false, false, false);
    WaitFor(ObjectDestroyed(X0_4));
    ForceAnimationPlayback(X4_4, X20_4, false, true, false);
    DeleteObjectfollowingSFX(X4_4, true);
    SetObjectTreasureState(X4_4, Enabled);
    SetEventFlag(X8_4, ON);
});

// 嵐の獣_障害飛び越え攻撃_XX
$Event(12904373, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(InArea(X0_4, X4_4));
    area = !EntityInRadiusOfEntity(X0_4, 10000, X8_4) && EntityInRadiusOfEntity(X0_4, 10000, X12_4);
    area2 = EntityInRadiusOfEntity(X0_4, 10000, X8_4) || !EntityInRadiusOfEntity(X0_4, 10000, X12_4);
    area3 = area || area2;
    area4 = area2;
    WaitFor(area3);
    if (!area4.Passed) {
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterMaphits(X0_4, true);
        ForceAnimationPlayback(X0_4, X16_4, false, true, false);
        SetCharacterGravity(X0_4, Enabled);
        SetCharacterMaphits(X0_4, false);
        WaitFor(CharacterHasEventMessage(X0_4, 10));
    }
    RestartEvent();
});

// 大砲発射_XX
$Event(12904374, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(2.3);
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 200);
    SetSpEffect(X4_4, 5580, false);
    ForceAnimationPlayback(X8_4, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    ClearSpEffect(X4_4, 5580);
    WaitFixedTimeFrames(30);
    SetObjactState(X8_4, 9800, Enabled);
    RestartEvent();
});

// 敵に大砲ObjAct起動要請_XX
$Event(12904382, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    chrArea = ((CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat))
        && EntityInRadiusOfEntity(X0_4, X4_4, X8_4))
        && ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    chrArea2 = !chrArea;
    WaitFor(chrArea || chrArea2);
    if (!chrArea2.Passed) {
        RequestObjactActivation(X4_4, 9800, -1, X0_4);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ギロチン_アニメ制御
$Event(12904390, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
    CreatePlaylog(844);
    PlaySE(X16_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X16_4, 0, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Object, X16_4, 101, 150005);
    PlaySE(X20_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X20_4, 0, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Object, X20_4, 101, 150005);
    WaitFixedTimeSeconds(0.1);
    SetEventFlag(X24_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 1, false, true, false);
    ForceAnimationPlayback(X4_4, 10, false, false, false);
    ForceAnimationPlayback(X0_4, 10, false, true, false);
    SetEventFlag(X24_4, OFF);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X4_4, 11, false, false, false);
    ForceAnimationPlayback(X0_4, 11, false, true, false);
    WaitFor(!InArea(10000, X8_4));
    PlaySE(X16_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X16_4, 1, false, false, false);
    PlaySE(X20_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X20_4, 1, false, false, false);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// ギロチン_ダメージ制御
$Event(12904398, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X4_4);
    if (EventFlag(92905100)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6250, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6250, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6250, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905101)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6251, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6251, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6251, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905102)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6252, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6252, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6252, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905103)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6253, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6253, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6253, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905104)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6254, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6254, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6254, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905105)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6255, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6255, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6255, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905106)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6256, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6256, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6256, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905107)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6257, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6257, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6257, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X8_4, X0_4, 100, 5041, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 5041, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 5041, DamageTargetType.Character, 0.8, 1, 0);
    }
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X4_4);
    RestartEvent();
});

// 生成クモ制御
$Event(12904406, Restart, function(X0_4, X4_4, X8_4) {
    EndEvent();
    WaitFor(EntityInRadiusOfEntity(X0_4, 10000, 35));
    SetCharacterAIId(X0_4, X4_4);
    WaitFor(!EntityInRadiusOfEntity(X0_4, 10000, 55));
    SetCharacterAIId(X0_4, X8_4);
    RestartEvent();
});

// クモ天井待機
$Event(12904410, Restart, function(X0_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 9000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (CharacterAIState(X0_4, AIStateType.Alert) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(880);
        WaitFixedTimeSeconds(0.3);
    }
L0:
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 9060, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// クモ天井待機_領域使用（上段部屋系用）
$Event(12904426, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 7000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(920);
    }
L0:
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 7001, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// クモ天井待機_領域使用
$Event(12904466, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 9000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(920);
    }
L0:
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 9060, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// 付属キャラ有効化
$Event(12904477, Restart, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    ChangeCharacterEnableState(X4_4, Enabled);
});

// 付属キャラ無効化
$Event(12904487, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    WaitFor(HPRatio(X0_4) <= 0);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X4_4, 2200, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// 幼生オオコウモリ_彫像待機
$Event(12904501, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat) || CharacterAIState(X0_4, AIStateType.Alert));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// フレッシュゴーレム部位損傷_XX
$Event(12904506, Default, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X12_2, X4_2, X16_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X12_2, X4_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    SetSpEffect(X0_4, X24_4, true);
    ClearSpEffect(X0_4, X28_4);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, X16_4, true);
    SetSpEffect(X0_4, X28_4, true);
    ClearSpEffect(X0_4, X24_4);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// フレッシュゴーレム血豆部位破壊_XX
$Event(12904540, Default, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_1, X25_1) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X12_2, X4_2, X16_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    ChangeCharacterHitmask(X0_4, X24_1, ON);
    ChangeCharacterDispmask(X0_4, X25_1, OFF);
    SetSpEffect(X0_4, 5667, true);
    RequestCharacterAIReplan(X0_4);
});

// フレッシュゴーレム不要な血豆部位ラグドールマスク_XX
$Event(12904544, Default, function(X0_4, X4_1) {
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFixedTimeSeconds(3);
    ChangeCharacterHitmask(X0_4, X4_1, ON);
});

// 棺桶から飛び出す敵_XX
$Event(12904568, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    area = EntityInRadiusOfEntity(X0_4, 10000, 4);
    WaitFor(
        (area || ObjectDestroyed(X4_4))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(970);
    }
    RequestObjectDestruction(X4_4, 1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 900257);
    PlaySE(X4_4, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(X4_4, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(X0_4, 10000, 3024, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(X0_4, Enabled);
});

// 飛び出す敵_XX
$Event(12904579, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    area = EntityInRadiusOfEntity(X0_4, 10000, X16_4);
    WaitFor(
        (area || ObjectDestroyed(X4_4))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(970);
    }
    RequestObjectDestruction(X4_4, 1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 900257);
    PlaySE(X4_4, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(X4_4, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(X0_4, 10000, X12_4, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(X0_4, Enabled);
});

// 領域で飛び出す敵_XX
$Event(12904584, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    area = InArea(10000, X16_4);
    WaitFor(
        (area || ObjectDestroyed(X4_4))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(1008);
    }
    RequestObjectDestruction(X4_4, 1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 900257);
    PlaySE(X4_4, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(X4_4, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(X0_4, Enabled);
    IssueShortWarpRequest(X0_4, TargetEntityType.Character, X8_4, 101);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(X0_4, 10000, X12_4, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(X0_4, Enabled);
});

// 敵が指定ポイントに移動開始_XX
$Event(12904594, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X4_4));
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    RequestCharacterAICommand(X0_4, X12_4, 0);
    RequestCharacterAIReplan(X0_4);
});

// 敵が指定ポイントに移動完了_XX
$Event(12904595, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            InArea(X0_4, X4_4)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, X0_4, 3))
                || HasDamageType(X0_4, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 敵が指定ポイントに移動中断_XX
$Event(12904596, Restart, function(X0_4, X4_4, X8_4) {
    GotoIf(L0, EventFlag(X8_4));
    chr = CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    flag = EventFlag(X8_4);
    WaitFor(chr || flag);
    EndIf(flag.Passed);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    chr2 = CharacterAIState(X0_4, AIStateType.Normal);
    flag2 = EventFlag(X8_4);
    WaitFor(chr2 || flag2);
    EndIf(flag2.Passed);
    RequestCharacterAICommand(X0_4, X4_4, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// モンスタールーム_XX
$Event(12904597, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    flagChrArea |= ThisEventSlot() || CharacterDead(X0_4);
    if (flagChrArea) {
        ChangeCharacterEnableState(X0_4, Enabled);
        EndEvent();
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    flagChrArea |= InArea(10000, X4_4);
    WaitFor(flagChrArea);
    CreatePlaylog(1052);
    PlaySE(X8_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, -1, 929200);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 203, X12_4);
});

// NPC召喚_侵入_XX
$Event(12904634, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetCharacterDefaultBackreadState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    EndEvent();
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(IsOnline());
    Goto(S0);
    EndIf(EventFlag(X12_4));
S0:
    EndIf(EventFlag(X8_4));
    if (EventFlag(X4_4)) {
        EndEvent();
    }
L0:
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetSpEffect(X0_4, 9025, false);
    SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    WaitFor(CharacterHasSpEffect(10000, 9020) && EventFlag(X16_4));
    WaitFixedTimeSeconds(X20_4);
    SummonNPC(SingleplayerSummonSignType.ScriptedInvasion, X0_4, 0, X4_4, X8_4);
    WaitFixedTimeSeconds(X24_4);
});

// 犬が吼えて周囲に知らせる_XX
$Event(12904643, Restart, function(X0_4) {
    chr = CharacterAIState(X0_4, AIStateType.Recognition);
    chr2 = CharacterAIState(X0_4, AIStateType.Combat);
    area = EntityInRadiusOfEntity(X0_4, 10000, 8.8);
    hp = HPRatio(X0_4) == 1;
    chr3 = chr || chr2;
    WaitFor(chr3 && area && hp);
    if (!EntityInRadiusOfEntity(X0_4, 10000, 5.8)) {
        ForceAnimationPlayback(X0_4, 3010, false, false, false);
        WaitFixedTimeFrames(40);
        ShootBullet(2900000, X0_4, 101, 6064, 270, 0, 0);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X0_4, 205, 6051, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(X0_4) != 1);
    }
    ShootBullet(2900000, X0_4, 205, 6053, 270, 0, 0);
S0:
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// 強化憑依_XX
$Event(12904677, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasSpEffect(X4_4, 5622));
    WaitFixedTimeFrames(5);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false);
    WaitFixedTimeFrames(2);
    ChangeCharacterEnableState(X0_4, Disabled);
    CreatePlaylog(1096);
});

// HP半分呪い
$Event(12904733, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    WaitFor(InArea(10000, X0_4));
    SetSpEffect(10000, 71, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 7, 850);
    WaitFor(ObjectDestroyed(X4_4));
    ClearSpEffect(10000, 71);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 200, 851);
});

// 不意打ち敵起動
$Event(12904736, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    area = InArea(10000, X4_4);
    WaitFor(
        (area || EntityInRadiusOfEntity(10000, X0_4, X8_4) || CharacterDamagedBy(10000, X0_4))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area.Passed) {
        ForceAnimationPlayback(X0_4, 3007, false, false, false);
        WaitFixedTimeFrames(50);
        RotateCharacter(X0_4, 10000, 3006, false);
        SetCharacterAIState(X0_4, Enabled);
        RequestCharacterAIReplan(X0_4);
        EndEvent();
    }
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

// 鐘を鳴らす
$Event(12904737, Restart, function(X0_4) {
    SetObjectInvulnerability(X0_4, Enabled);
    WaitFor(ActionButtonInArea(2400900, X0_4) || ObjectHitBy(X0_4, 10000));
    CreatePlaylog(1132);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 24011006);
    ShootBullet(2900000, X0_4, 101, 6063, 270, 0, 0);
    WaitFixedTimeFrames(10);
    ShootBullet(2900000, X0_4, 101, 6055, 270, 0, 0);
    WaitFixedTimeFrames(90);
    ShootBullet(2900000, X0_4, 101, 6059, 270, 0, 0);
    WaitFixedTimeFrames(80);
    ShootBullet(2900000, X0_4, 101, 6062, 270, 0, 0);
    RestartEvent();
});

// 巡回一時停止_XX
$Event(12904754, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal) && InArea(X0_4, X12_4));
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    WaitFor(!InArea(X0_4, X12_4));
    RestartEvent();
});

// モンスタールーム_巣に帰る_XXX
$Event(12904755, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Enabled);
        EndEvent();
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1170);
    PlaySE(X8_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, -1, 929200);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 203, X12_4);
    WaitFixedTimeSeconds(1);
    RequestCharacterAICommand(X0_4, 10, 0);
    SetCharacterHome(X0_4, X16_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, X16_4));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 伏兵落下_XXX
$Event(12904759, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    chr = CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(
        (InArea(10000, X4_4) || chr)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    EndIf(chr.Passed);
    CreatePlaylog(1224);
    ForceAnimationPlayback(X0_4, 3024, false, true, false);
});

// 火薬ツボに投擲_XX
$Event(12904772, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, X0_4)
            && !ObjectDestroyed(X4_4)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetCharacterEventTarget(X8_4, X12_4);
    RequestCharacterAICommand(X8_4, 100, 0);
    RequestCharacterAIReplan(X8_4);
    WaitFor(CharacterHasEventMessage(X8_4, 100));
    RequestCharacterAICommand(X8_4, -1, 0);
    RequestCharacterAIReplan(X8_4);
    EndEvent();
});

// ボスラッシュ_ホストがボス部屋入場
$Event(12904773, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(!EventFlag(X8_4) && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// ボスラッシュ_ホストがボス部屋入場完了
$Event(12904774, Default, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(!EventFlag(X0_4) && InArea(10000, X4_4));
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(X8_4, ON);
});

// ボスラッシュ_クライアントがボス部屋入場
$Event(12904775, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        !EventFlag(X12_4)
            && EventFlag(X8_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// ボスラッシュ_ボスが動き出す
$Event(12904776, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X20_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1260);
    StartTimeMeasurement(2900020, 1276, Enabled);
    DeactivateObject(X28_4, Enabled);
    SpawnMapSFX(X8_4);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, X24_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
    ActivateMultiplayerdependantBuffs(X0_4);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetEventFlag(X16_4, ON);
});

// ボスラッシュ_ボスBGM　ON
$Event(12904777, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EnableBossMapSound(X12_4, Disabled);
    EnableBossMapSound(X16_4, Disabled);
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(X0_4) && EventFlag(X4_4) && InArea(10000, X8_4));
    EnableBossMapSound(X12_4, Enabled);
    WaitFor(CharacterHasEventMessage(X20_4, 500));
    EnableBossMapSound(X12_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X16_4, Enabled);
});

// ボスラッシュ_ボスカメラ　ON
$Event(12904778, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X4_4));
    SetNetworkSyncState(Disabled);
    cond &= HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, 5.5);
    WaitFor(cond);
    SetLockcamSlotNumber(29, 0, 1);
    cond &= HPRatio(X0_4) > 0;
    WaitFor(!EntityInRadiusOfEntity(10000, X0_4, 6));
    WaitFor(cond);
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// ボスラッシュ_ボスBGM　OFF
$Event(12904779, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// 異形ビーストが松明を恐れる_XX
$Event(12904780, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, X0_4, 4));
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 404));
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// 銀の獣の眷属の寄生虫発生_XX
$Event(12904852, Default, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    WaitFixedTimeFrames(5);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 30, X0_4);
    ChangeCharacterEnableState(X4_4, Enabled);
    ForceAnimationPlayback(X4_4, 7000, false, false, false);
    RequestCharacterAIReplan(X8_4);
});

// トラップロード移植_ボス暗闇魔法管理
$Event(12904858, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 5630));
    SetSpEffect(X0_4, 5631, false);
    RequestCharacterAICommand(X0_4, 100, 0);
    WaitFor(!CharacterHasSpEffect(10000, 5630));
    RequestCharacterAICommand(X0_4, 110, 0);
    RestartEvent();
});

// トラップロード移植_ボスランダムワープ先選択
$Event(12904859, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RandomlySetEventFlagInRange(X4_4, X8_4, ON);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// トラップロード移植_ボスランダムワープ
$Event(12904860, Restart, function(X0_4, X4_4, X8_4, X12_4) {
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

// トラップロード移植_ボス2体目がこっそり出現
$Event(12904861, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasSpEffect(10000, 5630));
    ChangeCharacterEnableState(X0_4, Enabled);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
});

// トラップロード移植_ボス撃破で2体目以降死亡
$Event(12904862, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(HPRatio(X0_4) <= 0);
    ForceCharacterDeath(X4_4, false);
    ForceCharacterDeath(X8_4, false);
});

// トラップロード移植_ボスが動き出す
$Event(12904863, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetCharacterAIState(X8_4, Disabled);
    SetCharacterGravity(X8_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X4_4, Disabled);
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, X12_4));
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    CreateReferredDamagePair(X0_4, X8_4);
    CreateReferredDamagePair(X4_4, X8_4);
    DisplayBossHealthBar(Enabled, X8_4, 0, X24_4);
    CreatePlaylog(1260);
    if (X20_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X20_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X20_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X20_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    SetEventFlag(X16_4, ON);
});

// トラップロード移植_ボスが動き出す2
$Event(12904864, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    WaitFor(EventFlag(X0_4));
    DeactivateObject(X4_4, Enabled);
    SpawnMapSFX(X8_4);
    SetEventFlag(X0_4, OFF);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, X12_4, 205, X24_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X12_4, Enabled);
    ActivateMultiplayerdependantBuffs(X12_4);
    ActivateMultiplayerdependantBuffs(X16_4);
    ActivateMultiplayerdependantBuffs(X20_4);
    SetCharacterAIState(X12_4, Enabled);
    SetCharacterAIState(X16_4, Enabled);
    SetEventFlag(X28_4, ON);
});

// 白痴の蜘蛛_子蜘蛛補充
$Event(12904865, Default, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasEventMessage(X8_4, 20) && HPRatio(X8_4) <= X4_4);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 白痴の蜘蛛_子蜘蛛強制死亡
$Event(12904866, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X8_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    ForceCharacterDeath(X4_4, true);
});

// 白痴の蜘蛛_子蜘蛛動き出す
$Event(12904867, Default, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4));
    WaitFixedTimeFrames(45);
    SetCharacterAIState(X0_4, Enabled);
});

// 白痴の蜘蛛_ヒートアップ
$Event(12904868, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(HPRatio(X0_4) <= 0.75);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(HPRatio(X0_4) <= 0.5);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 111, 0);
    RequestCharacterAIReplan(X0_4);
});

// 白痴の蜘蛛_左半身損傷
$Event(12904869, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 2, 59, 59);
    hp = NPCPartHP(X0_4, 2) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7000, false, false, false);
        SetNPCPartHP(X0_4, 2, 100, true);
        hp3 = NPCPartHP(X0_4, 2) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7001, false, false, false);
            SetNPCPartHP(X0_4, 2, 50, true);
            hp5 = NPCPartHP(X0_4, 2) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7002, false, false, false);
                CreateNPCPart(X0_4, 2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(X0_4, 2, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(CharacterHasEventMessage(X0_4, 20));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 2, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 白痴の蜘蛛_右半身損傷
$Event(12904870, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 3, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 3, 59, 59);
    hp = NPCPartHP(X0_4, 3) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7005, false, false, false);
        SetNPCPartHP(X0_4, 3, 100, true);
        hp3 = NPCPartHP(X0_4, 3) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7006, false, false, false);
            SetNPCPartHP(X0_4, 3, 50, true);
            hp5 = NPCPartHP(X0_4, 3) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7007, false, false, false);
                CreateNPCPart(X0_4, 3, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(X0_4, 3, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(CharacterHasEventMessage(X0_4, 20));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 3, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 白痴の蜘蛛_頭部部位設定
$Event(12904871, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 1, NPCPartType.Part1, 9999999, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(X0_4, 1, 61, 61);
});

// 白痴の蜘蛛_初期子蜘蛛起動
$Event(12904872, Default, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X4_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X8_4));
    WaitFixedTimeSeconds(2.6);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, X12_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// ボスが三体動き出す（デブ用）
$Event(12904877, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X12_4, Disabled);
    SetCharacterAIState(X28_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    DeleteMapSFX(X8_4, true);
    if (EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1260);
    if (X20_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X20_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X20_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X20_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    if (!EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(X0_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
L4:
    SetCharacterAIState(X0_4, Enabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, 304001);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterAIState(X12_4, Enabled);
    DisplayBossHealthBar(Enabled, X12_4, 1, 304002);
    SetCharacterHPBarDisplay(X12_4, Disabled);
    SetCharacterAIState(X28_4, Enabled);
    DisplayBossHealthBar(Enabled, X28_4, 2, 304003);
    SetCharacterHPBarDisplay(X28_4, Disabled);
    SetEventFlag(X16_4, ON);
});

// ホストがボス部屋入場
$Event(12904878, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X12_4);
    WaitFor(!EventFlag(X8_4) && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// ホストがボス部屋入場完了
$Event(12904879, Default, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(!EventFlag(X0_4) && InArea(10000, X4_4));
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(X8_4, ON);
});

// クライアントがボス部屋入場
$Event(12904880, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        !EventFlag(X12_4)
            && EventFlag(X8_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// ボスが動き出す
$Event(12904881, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetCharacterAIState(X0_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    DeleteMapSFX(X8_4, true);
    if (EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7020, true, false, true);
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, 7020, true, false, true);
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1260);
    if (X20_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X20_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X20_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X20_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    if (!EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    RotateCharacter(X0_4, 10000, 7021, false);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(X0_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
L4:
    SetCharacterAIState(X0_4, Enabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetEventFlag(X16_4, ON);
});

// ボスBGM　ON
$Event(12904882, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EnableBossMapSound(X12_4, Disabled);
    EnableBossMapSound(X16_4, Disabled);
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(X0_4) && EventFlag(X4_4) && InArea(10000, X8_4));
    EnableBossMapSound(X12_4, Enabled);
    WaitFor(CharacterHasEventMessage(X20_4, 500));
    EnableBossMapSound(X12_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X16_4, Enabled);
});

// ボスカメラ　ON
$Event(12904883, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, 5.5));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(X0_4) > 0 && !EntityInRadiusOfEntity(10000, X0_4, 6));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// ボスBGM　OFF
$Event(12904886, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボス複数体登場_XX
$Event(12904887, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(EventFlag(X8_4) && HPRatio(X4_4) <= X20_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Character, X4_4, -1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    DisplayBossHealthBar(Enabled, X0_4, 1, X16_4);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 203, 929203);
});

// ボス咆哮
$Event(12904888, Restart, function(X0_4) {
    WaitFor(HPRatio(X0_4) < 0.5);
    RequestCharacterAICommand(X0_4, 1, 1);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    RequestCharacterAICommand(X0_4, -1, 1);
});

// 【円形ボス部屋専用】ボスが動き出す
$Event(12904890, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X28_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X20_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    DeactivateObject(X28_4, Enabled);
    SpawnMapSFX(X8_4);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, 929227);
    WaitFor(X24_4 == X24_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
    ActivateMultiplayerdependantBuffs(X0_4);
    ForceAnimationPlayback(X0_4, 7010, false, true, false);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetEventFlag(X16_4, ON);
});

// 【円形ボス部屋専用】ボスラッシュ_ボスが動き出す
$Event(12904891, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X28_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X20_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    DeactivateObject(X28_4, Enabled);
    SpawnMapSFX(X8_4);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, 929227);
    WaitFor(X24_4 == X24_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
    ActivateMultiplayerdependantBuffs(X0_4);
    ForceAnimationPlayback(X0_4, 7010, false, true, false);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetEventFlag(X16_4, ON);
});

// ボスマップサウンド登録
$Event(12904892, Default, function(X0_4, X4_4) {
    SetMapSoundState(X0_4, Disabled);
    SetMapSoundState(X4_4, Disabled);
});

// ボス部位再生爆発　初回
$Event(12904893, Default, function(X0_4) {
    WaitFor(HPRatio(X0_4) < 0.5);
    RequestCharacterAICommand(X0_4, 1, 1);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    RequestCharacterAICommand(X0_4, -1, 1);
});

// ボス部位破壊禁止切替
$Event(12904894, Default, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetEventFlag(X4_4, ON);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// ボス前通路SFX
$Event(12904895, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DeleteMapSFX(X0_4, false);
    DeleteMapSFX(X4_4, false);
    DeleteMapSFX(X8_4, false);
    WaitFor(InArea(10000, X12_4));
    SpawnMapSFX(X0_4);
    SpawnMapSFX(X4_4);
    SpawnMapSFX(X8_4);
});

// 銀の獣_ボス部位破壊損傷_右半身
$Event(12904896, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4, X20_2, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    WaitFor(EventFlag(X24_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X20_2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    hpSp = NPCPartHP(X0_4, X8_4) <= 0 && CharacterHasSpEffect(X0_4, 5021);
    hpSp2 = NPCPartHP(X0_4, X8_4) <= 0 && !CharacterHasSpEffect(X0_4, 5021);
    flag = EventFlag(X28_4);
    WaitFor(hpSp || hpSp2 || flag);
    if (!hpSp2.Passed) {
        EndIf(flag.Passed);
        CreateNPCPart(X0_4, X4_2, X20_2, 50, 1, 1, false, false);
        SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
        RestartEvent();
    }
L0:
    CreateNPCPart(X0_4, X4_2, X20_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    SetSpEffect(X0_4, 5021, true);
    SetSpEffect(X0_4, X12_4, true);
    ClearSpEffect(X0_4, X16_4);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 7003, false, false, false);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetSpEffect(X0_4, 5911, true);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    ClearSpEffect(X0_4, 5021);
    SetSpEffect(X0_4, X16_4, false);
    ClearSpEffect(X0_4, X12_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 銀の獣_ボス部位破壊損傷_左半身
$Event(12904897, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4, X20_2, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    WaitFor(EventFlag(X24_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X20_2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    hpSp = NPCPartHP(X0_4, X8_4) <= 0 && CharacterHasSpEffect(X0_4, 5021);
    hpSp2 = NPCPartHP(X0_4, X8_4) <= 0 && !CharacterHasSpEffect(X0_4, 5021);
    flag = EventFlag(X28_4);
    WaitFor(hpSp || hpSp2 || flag);
    if (!hpSp2.Passed) {
        EndIf(flag.Passed);
        CreateNPCPart(X0_4, X4_2, X20_2, 50, 1, 1, false, false);
        SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
        RestartEvent();
    }
L0:
    CreateNPCPart(X0_4, X4_2, X20_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    SetSpEffect(X0_4, 5021, true);
    SetSpEffect(X0_4, X12_4, true);
    ClearSpEffect(X0_4, X16_4);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetSpEffect(X0_4, 5911, true);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    ClearSpEffect(X0_4, 5021);
    SetSpEffect(X0_4, X16_4, false);
    ClearSpEffect(X0_4, X12_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷_部位1
$Event(12904898, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の獣（骨）_ボス部位損傷_部位1
$Event(12904899, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 130, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 130, true);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 炎の獣_ボス部位損傷_部位1
$Event(12904900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷_部位2
$Event(12904901, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の獣（骨）_ボス部位損傷_部位2
$Event(12904902, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 炎の獣_ボス部位損傷_部位2
$Event(12904903, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷_部位3
$Event(12904904, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の獣（骨）_ボス部位損傷_部位3
$Event(12904905, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 炎の獣_ボス部位損傷_部位3
$Event(12904906, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷_部位4
$Event(12904907, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の獣（骨）_ボス部位損傷_部位4
$Event(12904908, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 炎の獣_ボス部位損傷_部位4
$Event(12904909, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷_部位5
$Event(12904910, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の獣（骨）_ボス部位損傷_部位5
$Event(12904913, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 炎の獣_ボス部位損傷_部位5
$Event(12904911, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 血に渇いた獣_ボス出血
$Event(12904912, Restart, function(X0_4) {
    WaitFor(HPRatio(X0_4) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(HPRatio(X0_4) < 0.33);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// ボス部位損傷演出_XX
$Event(12904914, Default, function(X0_4, X4_4, X8_1, X9_1, X10_1, X12_4) {
    WaitFor(CharacterHasSpEffect(X12_4, X0_4) && !CharacterHasSpEffect(X12_4, X4_4));
    ChangeCharacterDispmask(X12_4, X8_1, ON);
    ChangeCharacterDispmask(X12_4, X9_1, OFF);
    ChangeCharacterDispmask(X12_4, X10_1, OFF);
    WaitFor(!CharacterHasSpEffect(X12_4, X0_4) && CharacterHasSpEffect(X12_4, X4_4));
    ChangeCharacterDispmask(X12_4, X9_1, ON);
    ChangeCharacterDispmask(X12_4, X8_1, OFF);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 部位損傷演出_クロスしんなり
$Event(12904915, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 482));
    ChangeCharactersCloth(X0_4, 15, 2);
});

// 通常油まみれ_強制キャンセル
$Event(12904916, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 420));
    WaitFixedTimeFrames(10);
    ClearSpEffect(X0_4, 420);
    RestartEvent();
});

// 部位油まみれ_XX
$Event(12904917, Default, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4) {
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X20_4));
    CreateNPCPart(X20_4, X0_2, X8_2, 1, 1, 1, false, false);
    hp = HPRatio(X20_4) <= 0;
    WaitFor(hp || NPCPartHP(X20_4, X4_4) <= 0);
    EndIf(hp.Passed);
    if (CharacterHasSpEffect(X20_4, 420)) {
        SetSpEffect(X20_4, X12_4, true);
    }
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 部位油まみれ_火だるま_XX
$Event(12904918, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X12_4));
    }
    spHp = CharacterHasSpEffect(X16_4, X0_4)
        && CharacterHasSpEffect(X16_4, 421)
        && NPCPartHP(X16_4, X8_4) <= 0;
    spHp2 = CharacterHasSpEffect(X16_4, X0_4)
        && CharacterHasSpEffect(X16_4, 421)
        && NPCPartHP(X16_4, X8_4) > 0;
    WaitFor(spHp || spHp2);
    if (!spHp2.Passed) {
        ForceAnimationPlayback(X16_4, X4_4, false, true, false);
    } else {
        SetSpEffect(X16_4, X0_4, true);
    }
    RestartEvent();
});

// サブ特徴_特殊敵_1配置_特殊生成敵_XX
$Event(12904919, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905320) || EventFlag(92905324) || EventFlag(92905325) || EventFlag(92905326));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_1配置_NPC敵_XX
$Event(12904979, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905321) || EventFlag(92905327) || EventFlag(92905328));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_1配置_周囲強化敵_XX
$Event(12905000, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905322) || EventFlag(92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_1配置_不死敵_XX
$Event(12905013, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905323));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_1配置_特徴なし_XX
$Event(12905026, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!AnyBatchEventFlags(92905320, 92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_2配置_特殊生成敵_XX
$Event(12905042, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905320));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_2配置_NPC敵_XX
$Event(12905097, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905321) || EventFlag(92905324));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_2配置_周囲強化敵_XX
$Event(12905108, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905322) || EventFlag(92905325) || EventFlag(92905327));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_2配置_不死敵_XX
$Event(12905119, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905323) || EventFlag(92905326) || EventFlag(92905328) || EventFlag(92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊敵_2配置_特徴なし_XX
$Event(12905130, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!AnyBatchEventFlags(92905320, 92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// 不死敵の死亡_XX
$Event(12905147, Restart, function(X0_4, X4_4) {
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    SetSpEffect(X0_4, 5626, false);
    WaitFor(EventFlag(X4_4));
    WaitRandomTimeFrames(0, 50);
    SetCharacterImmortality(X0_4, Disabled);
    ForceCharacterDeath(X0_4, true);
    EndEvent();
});

// 不死敵の初期設定_XX
$Event(12905178, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        CharacterBackreadStatus(X0_4)
            || CharacterBackreadStatus(X4_4)
            || CharacterBackreadStatus(X8_4)
            || CharacterBackreadStatus(X12_4)
            || CharacterBackreadStatus(X16_4)
            || CharacterBackreadStatus(X20_4)
            || CharacterBackreadStatus(X24_4));
    SetSpEffect(X0_4, 5913, false);
    SetSpEffect(X4_4, 5913, false);
    SetSpEffect(X8_4, 5913, false);
    SetSpEffect(X12_4, 5913, false);
    SetSpEffect(X16_4, 5913, false);
    SetSpEffect(X20_4, 5913, false);
    SetSpEffect(X24_4, 5913, false);
    RestartIf(
        !(EntityInRadiusOfEntity(10000, X0_4, 7)
            || EntityInRadiusOfEntity(10000, X4_4, 7)
            || EntityInRadiusOfEntity(10000, X8_4, 7)
            || EntityInRadiusOfEntity(10000, X12_4, 7)
            || EntityInRadiusOfEntity(10000, X16_4, 7)
            || EntityInRadiusOfEntity(10000, X20_4, 7)
            || EntityInRadiusOfEntity(10000, X24_4, 7)));
    ClearSpEffect(X0_4, 5913);
    ClearSpEffect(X4_4, 5913);
    ClearSpEffect(X8_4, 5913);
    ClearSpEffect(X12_4, 5913);
    ClearSpEffect(X16_4, 5913);
    ClearSpEffect(X20_4, 5913);
    ClearSpEffect(X24_4, 5913);
    SetSpEffect(X0_4, 5625, false);
    SetSpEffect(X4_4, 5625, false);
    SetSpEffect(X8_4, 5625, false);
    SetSpEffect(X12_4, 5625, false);
    SetSpEffect(X16_4, 5625, false);
    SetSpEffect(X20_4, 5625, false);
    SetSpEffect(X24_4, 5625, false);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    SetCharacterHPBarDisplay(X4_4, Enabled);
    SetCharacterHPBarDisplay(X8_4, Enabled);
    SetCharacterHPBarDisplay(X12_4, Enabled);
    SetCharacterHPBarDisplay(X16_4, Enabled);
    SetCharacterHPBarDisplay(X20_4, Enabled);
    SetCharacterHPBarDisplay(X24_4, Enabled);
    WaitFixedTimeSeconds(1);
    spCmp = CharacterHasSpEffect(X0_4, 5913) || X0_4 == 0;
    spCmp2 = CharacterHasSpEffect(X4_4, 5913) || X4_4 == 0;
    spCmp3 = CharacterHasSpEffect(X8_4, 5913) || X8_4 == 0;
    spCmp4 = CharacterHasSpEffect(X12_4, 5913) || X12_4 == 0;
    spCmp5 = CharacterHasSpEffect(X16_4, 5913) || X16_4 == 0;
    spCmp6 = CharacterHasSpEffect(X20_4, 5913)
        || X20_4 == 0
        || CharacterHasSpEffect(X24_4, 5913)
        || X24_4 == 0;
    WaitFor(spCmp && spCmp2 && spCmp3 && spCmp4 && spCmp5 && spCmp6 && cond);
    SetEventFlag(X28_4, ON);
    EndEvent();
});

// サブ特徴_特殊キャラ_ショップあり_ショップ_XX
$Event(12905188, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!(EventFlag(92905330)
        || EventFlag(92905332)
        || EventFlag(92905333)
        || EventFlag(92905334)
        || AnyBatchEventFlags(92905385, 92905389))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X4_4, true);
        SetCharacterBackreadState(X8_4, true);
        SetCharacterBackreadState(X12_4, true);
        DeactivateObject(X16_4, Disabled);
        SetObjactState(X16_4, -1, Disabled);
        SetObjectTreasureState(X16_4, Disabled);
        DeactivateObject(X20_4, Disabled);
        SetObjactState(X20_4, -1, Disabled);
        SetObjectTreasureState(X20_4, Disabled);
        DeactivateObject(X24_4, Disabled);
        SetObjactState(X24_4, -1, Disabled);
        SetObjectTreasureState(X24_4, Disabled);
        DeactivateObject(X28_4, Disabled);
        SetObjactState(X28_4, -1, Disabled);
        SetObjectTreasureState(X28_4, Disabled);
        EndEvent();
    }
L0:
    if (!((EventFlag(92905332) || EventFlag(92905334)) && (EventFlag(1423) || EventFlag(1432)))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X4_4, true);
        DeactivateObject(X16_4, Disabled);
        SetObjactState(X16_4, -1, Disabled);
        SetObjectTreasureState(X16_4, Disabled);
        DeactivateObject(X20_4, Disabled);
        SetObjactState(X20_4, -1, Disabled);
        SetObjectTreasureState(X20_4, Disabled);
        EndEvent();
    }
L1:
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊キャラ_ショップあり_同士討ち_XX
$Event(12905190, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905331));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊キャラ_ショップあり_特徴なし_XX
$Event(12905192, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!AnyBatchEventFlags(92905385, 92905389)) {
        EndIf(!AnyBatchEventFlags(92905330, 92905334));
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊キャラ_ショップなし_ショップ_XX
$Event(12905195, Restart, function() {
    EndEvent();
});

// サブ特徴_特殊キャラ_ショップなし_同士討ち_XX
$Event(12905198, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905331) || EventFlag(92905333) || EventFlag(92905334));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_特殊キャラ_ショップなし_特徴なし_XX
$Event(12905201, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(92905331) && !EventFlag(92905333) && !EventFlag(92905334));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_マルチ召喚敵_強弱_強_XX
$Event(12905209, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_マルチ召喚敵_強弱_弱_XX
$Event(12905210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_マルチ召喚敵_強弱_特徴なし_XX
$Event(12905211, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_マルチ召喚敵_強のみ_強_XX
$Event(12905212, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_マルチ召喚敵_強のみ_弱_XX
$Event(12905221, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// サブ特徴_マルチ召喚敵_強のみ_特徴なし_XX
$Event(12905226, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(92905340));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// 配置キャラクター無効化_サブ特徴ごと
$Event(12905232, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(!AnyBatchEventFlags(X0_4, X4_4));
    ChangeCharacterEnableState(X8_4, Disabled);
});

// 売買メッセンジャー初期化
$Event(12905233, Restart, function(X0_4, X4_4) {
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAnimationState(X4_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterGravity(X4_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    SetCharacterMaphits(X4_4, true);
});

// 売買メッセンジャーアニメ
$Event(12905235, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, 7001, true, false, false);
    ForceAnimationPlayback(X4_4, 7002, true, false, false);
    WaitFor(EventFlag(12907224));
    ForceAnimationPlayback(X0_4, 7005, false, false, false);
    ForceAnimationPlayback(X4_4, 7006, false, false, false);
    WaitFixedTimeFrames(29);
    ForceAnimationPlayback(X0_4, 7003, true, false, false);
    ForceAnimationPlayback(X4_4, 7004, true, false, false);
    WaitFor(!EventFlag(12907224));
    ForceAnimationPlayback(X0_4, 7007, false, false, false);
    ForceAnimationPlayback(X4_4, 7008, false, false, false);
    WaitFixedTimeFrames(28);
    RestartEvent();
});

// 売買メッセンジャー表示マスク
$Event(12905237, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(12);
    if (!PlayerHasItem(ItemType.Goods, 4111)) {
        ChangeCharacterDispmask(X0_4, 1, OFF);
        ChangeCharacterDispmask(X0_4, 10, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4112)) {
        ChangeCharacterDispmask(X0_4, 2, OFF);
        ChangeCharacterDispmask(X0_4, 13, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4113)) {
        ChangeCharacterDispmask(X0_4, 3, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4114)) {
        ChangeCharacterDispmask(X4_4, 0, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4115)) {
        ChangeCharacterDispmask(X4_4, 1, OFF);
        ChangeCharacterDispmask(X4_4, 12, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4116)) {
        ChangeCharacterDispmask(X4_4, 2, OFF);
        ChangeCharacterDispmask(X4_4, 11, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4117)) {
        ChangeCharacterDispmask(X4_4, 3, OFF);
    }
});

// 配置キャラクター無効化_サブ特徴以外
$Event(12905239, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(AnyBatchEventFlags(X0_4, X4_4));
    ChangeCharacterEnableState(X8_4, Disabled);
});

// 配置オブジェ無効化_サブ特徴ごと
$Event(12905243, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(!AnyBatchEventFlags(X0_4, X4_4));
    DeactivateObject(X8_4, Disabled);
    SetObjectTreasureState(X8_4, Disabled);
});

// 配置オブジェ無効化_サブ特徴以外
$Event(12905244, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(AnyBatchEventFlags(X0_4, X4_4));
    DeactivateObject(X8_4, Disabled);
    SetObjectTreasureState(X8_4, Disabled);
});

// マップ切替_XX
$Event(12905245, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        ActivateMapPart(X0_4, Disabled);
    } else {
        ActivateMapPart(X8_4, Disabled);
    }
    EndEvent();
});

// ヒット切替_XX
$Event(12905271, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        ActivateHit(X0_4, Disabled);
    } else {
        ActivateHit(X8_4, Disabled);
    }
    EndEvent();
});

// 橋ヒット無効化_XX
$Event(12905302, Default, function(X0_4) {
    ActivateHit(X0_4, Disabled);
    Goto(S0);
S0:
    NoOp();
});

// 橋を揺らす_XX
$Event(12905303, Default, function(X0_4, X4_4) {
    WaitFor(PlayerMovingOnHit(X4_4));
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    RestartEvent();
});

// 巡回敵強制読み込み
$Event(12905314, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndEvent();
    WaitFor(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) == 1);
    WaitFixedTimeFrames(1);
    EndEvent();
});

// 悪霊_弾丸ダミーキャラ接続_XX
$Event(12905337, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterAIState(X4_4, Disabled);
        ForceAnimationPlayback(X4_4, 3002, false, true, false);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 6, X0_4);
    RestartEvent();
});

// 悪霊_本体からダミーキャラへの状態連絡_XX
$Event(12905347, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5401));
    RequestCharacterAICommand(X4_4, 100, 0);
    WaitFor(CharacterHasSpEffect(X0_4, 5400));
    RequestCharacterAICommand(X4_4, -1, 0);
    RestartEvent();
});

// 墓掘りつるはし作業アニメ解除_XX
$Event(12905357, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    SetCharacterAIId(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(
        CharacterDamagedBy(X0_4, 10000)
            || HPRatio(X0_4) != 1
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    SetCharacterAIId(X0_4, X20_4);
    if (!EntityInRadiusOfEntity(X0_4, 10000, 5)) {
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    }
});

// 無関心特殊待機解除_XX
$Event(12905369, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(
        CharacterDamagedBy(X0_4, 10000)
            || HPRatio(X0_4) != 1
            || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
});

// 脳喰らい特殊待機_XX
$Event(12905387, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    WaitFor(
        HasDamageType(X0_4, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(X0_4, 10000, 2)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition));
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    RequestCharacterAIReplan(X0_4);
});

// 銀の獣の眷属特殊待機_XX
$Event(12905396, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    SetCharacterAIId(X0_4, 218085);
    SetSpEffect(X0_4, 5629, false);
    WaitFor(
        HasDamageType(X0_4, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(X0_4, 10000, 2)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition));
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    SetCharacterAIId(X0_4, 218080);
    ClearSpEffect(X0_4, 5629);
    RequestCharacterAIReplan(X0_4);
});

// 扉解放で起きるフラグON_XX
$Event(12905401, Restart, function(X0_4, X4_4) {
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(45);
    SetEventFlag(X4_4, ON);
});

// 鐘が鳴ると起きるフラグON_XX
$Event(12905402, Restart, function(X0_4, X4_4) {
    WaitFor(ObjectHitBy(X0_4, 10000));
    WaitFixedTimeFrames(45);
    SetEventFlag(X4_4, ON);
});

// アラート行動で強制的に起きるフラグON_XX
$Event(12905403, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeSeconds(8);
    SetEventFlag(X4_4, ON);
});

// 宝箱開けると敵が起きる
$Event(12905404, Default, function(X0_4, X4_4) {
    WaitFor(ObjActEventFlag(X0_4));
    CreatePlaylog(0);
    WaitFixedTimeFrames(100);
    SetEventFlag(X4_4, ON);
});

// SAN値で狂気の悪霊出現_ダンジョン_XX
$Event(12905406, Default, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    EndEvent();
    WaitFor(
        PlayerInsightAmount() >= 10
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, X0_4, 10));
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 6200, false, true, false);
    SetEventFlag(X4_4, ON);
});

// SAN値で狂気の悪霊消滅_ダンジョン_XX
$Event(12905407, Default, function(X0_4, X4_4) {
    EndEvent();
    WaitFor(EventFlag(X4_4) && PlayerInsightAmount() <= 8);
L0:
    ForceCharacterDeath(X0_4, false);
});

// 火薬タル爆発
$Event(12906400, Restart, function(X0_4) {
    dmg = HasDamageType(X0_4, -1, DamageType.Fire);
    dmg2 = HasDamageType(X0_4, -1, DamageType.None);
    cond = dmg || dmg2;
    WaitFor(dmg || dmg2 || ObjectHP(X0_4) < 999);
    if (!cond.Passed) {
        RequestObjectDestruction(X0_4, 1);
        PlaySE(X0_4, SoundType.oObject, 299961000);
        WaitFixedTimeFrames(10);
        ShootBullet(2900000, X0_4, 200, 6051, 270, 0, 0);
        WaitFixedTimeFrames(45);
        ShootBullet(2900000, X0_4, 200, 6053, 270, 0, 0);
        EndEvent();
    }
    CreatePlaylog(1462);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        ShootBullet(2900000, X0_4, 200, 6150, 0, 90, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        ShootBullet(2900000, X0_4, 200, 6151, 0, 90, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        ShootBullet(2900000, X0_4, 200, 6152, 0, 90, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        ShootBullet(2900000, X0_4, 200, 6153, 0, 90, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        ShootBullet(2900000, X0_4, 200, 6154, 0, 90, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        ShootBullet(2900000, X0_4, 200, 6155, 0, 90, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        ShootBullet(2900000, X0_4, 200, 6156, 0, 90, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        ShootBullet(2900000, X0_4, 200, 6157, 0, 90, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        ShootBullet(2900000, X0_4, 200, 6000, 0, 90, 0);
    }
    ShootBullet(2900000, X0_4, 200, 6055, 270, 0, 0);
    RequestObjectDestruction(X0_4, 1);
    PlaySE(X0_4, SoundType.oObject, 299961000);
});

// 不死設定
$Event(12906500, Restart, function(X0_4, X4_4) {
    SetCharacterImmortality(X0_4, Enabled);
    WaitFor(CharacterDead(X4_4));
    SetCharacterImmortality(X0_4, Disabled);
    ForceCharacterDeath(X0_4, true);
});

// 鉄球ゴロゴロ_XX
$Event(12906534, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X0_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X12_4, X8_4, 101, 5110, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    WaitFixedTimeSeconds(5.6);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X16_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X20_4, X16_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X20_4, X16_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X20_4, X16_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X20_4, X16_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X20_4, X16_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X20_4, X16_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X20_4, X16_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X20_4, X16_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X20_4, X16_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X20_4);
    DeactivateObject(X16_4, Disabled);
    RestartEvent();
});

// 鉄球ゴロゴロ長め_XX
$Event(12906537, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X0_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 6, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X12_4, X8_4, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(6);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X16_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X20_4, X16_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X20_4, X16_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X20_4, X16_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X20_4, X16_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X20_4, X16_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X20_4, X16_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X20_4, X16_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X20_4, X16_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X20_4, X16_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X20_4);
    DeactivateObject(X16_4, Disabled);
    RestartEvent();
});

// 単発鉄球ゴロゴロ16マス_XX
$Event(12906540, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    WaitFor(InArea(10000, X28_4));
    ForceAnimationPlayback(X0_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X12_4, X8_4, 101, 5110, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    WaitFixedTimeSeconds(12);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X16_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X20_4, X16_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X20_4, X16_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X20_4, X16_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X20_4, X16_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X20_4, X16_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X20_4, X16_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X20_4, X16_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X20_4, X16_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(X20_4, X16_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X20_4);
    DeactivateObject(X16_4, Disabled);
    EndEvent();
});

// 螺旋階段上中下_鉄球ゴロゴロ_XX
$Event(12906541, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X20_4));
    ForceAnimationPlayback(X20_4, 3000, false, true, false);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X4_4, 20, false, false, false);
    CreateObjectfollowingSFX(X4_4, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X28_4, X4_4, 100, 6140, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X28_4, X4_4, 100, 6141, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X28_4, X4_4, 100, 6142, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X28_4, X4_4, 100, 6143, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X28_4, X4_4, 100, 6144, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X28_4, X4_4, 100, 6145, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X28_4, X4_4, 100, 6146, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X28_4, X4_4, 100, 6147, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X28_4, X4_4, 100, 5110, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    WaitFixedTimeFrames(370);
    DeleteObjectEvent(X28_4);
    DeleteObjectfollowingSFX(X4_4, true);
    DeactivateObject(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 100, false, false, false);
    RequestObjectDestruction(X8_4, 1);
    DeactivateObject(X4_4, Disabled);
});

// 螺旋階段中下_鉄球ゴロゴロ_XX
$Event(12906543, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X20_4));
    ForceAnimationPlayback(X20_4, 3000, false, true, false);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X4_4, 30, false, false, false);
    CreateObjectfollowingSFX(X4_4, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X28_4, X4_4, 100, 6140, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X28_4, X4_4, 100, 6141, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X28_4, X4_4, 100, 6142, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X28_4, X4_4, 100, 6143, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X28_4, X4_4, 100, 6144, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X28_4, X4_4, 100, 6145, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X28_4, X4_4, 100, 6146, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X28_4, X4_4, 100, 6147, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X28_4, X4_4, 100, 5110, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    WaitFixedTimeFrames(270);
    DeleteObjectEvent(X28_4);
    DeleteObjectfollowingSFX(X4_4, true);
    DeactivateObject(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 100, false, false, false);
    RequestObjectDestruction(X8_4, 1);
    DeactivateObject(X4_4, Disabled);
});

// 螺旋階段上中_鉄球ゴロゴロ_XX
$Event(12906545, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X20_4));
    ForceAnimationPlayback(X20_4, 3000, false, true, false);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X4_4, 40, false, false, false);
    CreateObjectfollowingSFX(X4_4, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X28_4, X4_4, 100, 6140, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X28_4, X4_4, 100, 6141, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X28_4, X4_4, 100, 6142, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X28_4, X4_4, 100, 6143, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X28_4, X4_4, 100, 6144, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X28_4, X4_4, 100, 6145, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X28_4, X4_4, 100, 6146, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X28_4, X4_4, 100, 6147, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X28_4, X4_4, 100, 5110, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    WaitFixedTimeFrames(270);
    DeleteObjectEvent(X28_4);
    DeleteObjectfollowingSFX(X4_4, true);
    DeactivateObject(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 100, false, false, false);
    RequestObjectDestruction(X8_4, 1);
    DeactivateObject(X4_4, Disabled);
});

// 感染_周囲強化_XX
$Event(12906548, Restart, function(X0_4, X4_4) {
    WaitFor(
        CharacterHasEventMessage(X0_4, 10)
            && EntityInRadiusOfEntity(X0_4, X4_4, 25)
            && !CharacterDead(X4_4));
    RequestCharacterAICommand(X4_4, 200, 1);
    WaitFor(CharacterHasEventMessage(X4_4, 20));
    SetSpEffect(X4_4, 5645, false);
    RequestCharacterAICommand(X4_4, -1, 1);
    RestartEvent();
});

// 感染_周囲強化_強化時毒化_XX
$Event(12906567, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5645));
    SetSpEffect(X0_4, X4_4, false);
    WaitFor(!CharacterHasSpEffect(X0_4, 5645));
    ClearSpEffect(X0_4, X4_4);
    RestartEvent();
});

// 寝ている奴が起きる_XX
$Event(12906586, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    SetCharacterAIId(X0_4, X12_4);
    chr = CharacterAIState(X0_4, AIStateType.Alert);
    chr2 = CharacterAIState(X0_4, AIStateType.Recognition);
    chr3 = CharacterAIState(X0_4, AIStateType.Combat);
    sp = CharacterHasSpEffect(X0_4, 4740);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    chrSpDmg = chr || chr2 || chr3 || sp || dmg;
    chrSp = chr2 || chr3 || sp;
    WaitFor(chrSpDmg);
    if (!dmg.Passed) {
        if (!sp.Passed) {
            if (!chrSp.Passed) {
                SetCharacterAIId(X0_4, X16_4);
                ForceAnimationPlayback(X0_4, X8_4, true, false, false);
                chr4 = CharacterAIState(X0_4, AIStateType.Normal);
                chr5 = CharacterAIState(X0_4, AIStateType.Recognition);
                chr6 = CharacterAIState(X0_4, AIStateType.Combat);
                sp2 = CharacterHasSpEffect(X0_4, 4740);
                dmg2 = HasDamageType(X0_4, 10000, DamageType.Unspecified);
                chrSpDmg2 = chr4 || chr5 || chr6 || sp2 || dmg2;
                chrSp2 = chr5 || chr6 || sp2;
                WaitFor(chrSpDmg2);
                GotoIf(L1, dmg2.Passed);
                if (!chrSp2.Passed) {
                    WaitFixedTimeSeconds(3);
                    RestartEvent();
                }
            }
        }
L0:
        ForceAnimationPlayback(X0_4, X24_4, false, false, false);
    }
L1:
    SetCharacterAIId(X0_4, X20_4);
});

// 蛇玉（小）_地面から這い出る
$Event(12906648, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterBackreadStatus(X4_4));
    SetCharacterAIState(X4_4, Disabled);
    SetCharacterGravity(X4_4, Disabled);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    WaitRandomTimeFrames(0, 60);
    IssueShortWarpRequest(X4_4, TargetEntityType.Area, X12_4, -1);
    ForceAnimationPlayback(X4_4, X8_4, false, true, false);
    SetCharacterGravity(X4_4, Enabled);
    SetCharacterAIState(X4_4, Enabled);
    RequestCharacterAIReplan(X4_4);
});

// 巣に帰るアラート敵XX
$Event(12906654, Restart, function(X0_4, X4_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(3);
    ShootBullet(2900000, X0_4, 32, 210200599, 0, 0, 0);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 225000000);
    WaitFor(InArea(X0_4, X4_4));
    ForceAnimationPlayback(X0_4, 3010, false, true, false);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 225000000);
    ShootBullet(2900000, X0_4, 32, 210200599, 0, 0, 0);
    ForceAnimationPlayback(X0_4, 7004, false, true, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// PC発見でアニメ再生_XX
$Event(12906655, Restart, function(X0_4, X4_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// その場で叫ぶアラート敵XX
$Event(12906656, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat))
            && HPRatio(X0_4) == 1);
    if (!EntityInRadiusOfEntity(X0_4, 10000, 5)) {
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Character, 10000, 236, 10000);
        PlaySE(X0_4, SoundType.cCharacterMotion, X4_4);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(40);
        ShootBullet(2900000, X8_4, 101, 6064, 270, 0, 0);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6051, 270, 0, 0);
        WaitFixedTimeFrames(90);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6054, 270, 0, 0);
        WaitFixedTimeFrames(90);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6056, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6056, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(X0_4) != 1);
    }
    ShootBullet(2900000, X8_4, 101, 6056, 270, 0, 0);
S0:
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// 香炉_XX
$Event(12906660, Default, function(X0_4) {
    EndIf(ObjectDestroyed(X0_4));
    if (!EventFlag(92905310)) {
        GotoIf(L0, EventFlag(92905301));
        CreateObjectfollowingSFX(X0_4, 600, 929302);
        WaitFor(ObjectHitBy(X0_4, -1));
        Goto(L3);
L0:
        if (!ThisEventSlot()) {
            CreateObjectfollowingSFX(X0_4, 600, 929305);
        }
        ShootBullet(2900000, X0_4, 100, 6090, 0, 0, 0);
        Goto(L2);
    }
L1:
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(X0_4, 600, 929304);
    }
    GotoIf(S6, EventFlag(92905107));
    GotoIf(S5, EventFlag(92905106));
    GotoIf(S4, EventFlag(92905105));
    GotoIf(S3, EventFlag(92905104));
    GotoIf(S2, EventFlag(92905103));
    GotoIf(S1, EventFlag(92905102));
    GotoIf(S0, EventFlag(92905101));
    if (!EventFlag(92905100)) {
    }
    ShootBullet(2900000, X0_4, 100, 6120, 0, 0, 0);
    Goto(L2);
S0:
    ShootBullet(2900000, X0_4, 100, 6121, 0, 0, 0);
    Goto(L2);
S1:
    ShootBullet(2900000, X0_4, 100, 6122, 0, 0, 0);
    Goto(L2);
S2:
    ShootBullet(2900000, X0_4, 100, 6123, 0, 0, 0);
    Goto(L2);
S3:
    ShootBullet(2900000, X0_4, 100, 6124, 0, 0, 0);
    Goto(L2);
S4:
    ShootBullet(2900000, X0_4, 100, 6125, 0, 0, 0);
    Goto(L2);
S5:
    ShootBullet(2900000, X0_4, 100, 6126, 0, 0, 0);
    Goto(L2);
S6:
    ShootBullet(2900000, X0_4, 100, 6127, 0, 0, 0);
L2:
    time = ElapsedSeconds(0.5);
    obj = ObjectHP(X0_4) < 999;
    WaitFor(time || obj);
    RestartIf(!obj.Passed);
L3:
    DeleteObjectfollowingSFX(X0_4, true);
    WaitFor(ElapsedFrames(1));
    RequestObjectDestruction(X0_4, 1);
});

// 棺から呻き声_XX
$Event(12906726, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFor(
        CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom));
    PlaySE(X0_4, SoundType.cCharacterMotion, X4_4);
    chrArea = CharacterDead(X0_4) || EntityInRadiusOfEntity(X0_4, 10000, X8_4);
    WaitFor(ElapsedFrames(120) || chrArea);
    EndIf(chrArea.Passed);
    RestartEvent();
});

// クモ男パッチ_死亡
$Event(12906738, Restart, function(X0_4) {
    if (EventFlag(1431)) {
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1431, ON);
});

// クモ男パッチ_敵対_敵対フラグON
$Event(12906740, Restart, function(X0_4, X4_4) {
    EndIf(AnyBatchEventFlags(1431, 1432));
    WaitFor((HPRatio(X0_4) < 0.9 && CharacterDamagedBy(X0_4, 10000)) || EventFlag(X4_4));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1432, ON);
});

// クモ男パッチ_敵対_チームタイプ切り替え
$Event(12906742, Restart, function(X0_4) {
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    WaitFor(EventFlag(1432));
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
});

// クモ男パッチ_敵対_攻撃回数カウント
$Event(12906744, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
});

// クモ男パッチ_話しかけたら落下する
$Event(12906746, Default, function(X0_4) {
    ForceAnimationPlayback(X0_4, 7015, true, true, true);
    SetEventFlag(72900001, OFF);
    WaitFor(EventFlag(72900001) || EventFlag(1432));
    SetSpEffect(X0_4, 151, true);
});

// クモ男パッチ_ダメージを受けたら落下する
$Event(12906748, Default, function(X0_4) {
    WaitFor(
        CharacterDamagedBy(X0_4, 10000) && CharacterHasSpEffect(X0_4, 5543) && HPRatio(X0_4) > 0);
    ForceAnimationPlayback(X0_4, 7021, false, true, false);
});

// 月からの使者触手ワープ
$Event(12906750, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(X0_4) && CharacterBackreadStatus(X0_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, X8_4);
    RestartEvent();
});

// 部位損傷_頭_月の落とし子
$Event(12906764, Restart, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X12_2, X16_4, 1, 2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, X12_2, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X28_4, false, false, false);
    SetSpEffect(X0_4, X20_4, true);
    ClearSpEffect(X0_4, X24_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    SetNPCPartHP(X0_4, X8_4, -1, true);
    SetSpEffect(X0_4, X24_4, true);
    ClearSpEffect(X0_4, X20_4);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 部位損傷_頭以外_月の落とし子
$Event(12906765, Restart, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X12_2, X16_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, X12_2, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X28_4, false, false, false);
    SetSpEffect(X0_4, X20_4, true);
    ClearSpEffect(X0_4, X24_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    SetNPCPartHP(X0_4, X8_4, -1, true);
    SetSpEffect(X0_4, X24_4, true);
    ClearSpEffect(X0_4, X20_4);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボスヒートアップ_1回目_邪神
$Event(12906766, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.7);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X8_4, ON);
});

// ボスヒートアップ_2回目_邪神
$Event(12906767, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.3 && EventFlag(X8_4));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 邪神_ボス部位強化_XX
$Event(12906768, Restart, function(X0_4, X4_4, X8_2, X12_4, X16_2, X18_1, X19_1) {
    EndIf(EventFlag(X4_4));
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(X0_4, X19_1, ON);
    }
L0:
    WaitFor(CharacterHasSpEffect(X0_4, 5402));
    ChangeCharacterHitmask(X0_4, X18_1, ON);
    ChangeCharacterHitmask(X0_4, X19_1, OFF);
    CreateNPCPart(X0_4, X8_2, X16_2, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(X0_4, X12_4, 74, 74);
});

// 始祖ビースト_ボス部位損傷_部位1
$Event(12906769, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 始祖ビースト_ボス部位損傷_部位2
$Event(12906770, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 始祖ビースト_ボス部位損傷_部位3
$Event(12906771, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 始祖ビースト_ボス部位損傷_部位4
$Event(12906772, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 始祖ビースト_ボス部位損傷_部位5
$Event(12906773, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 月の落とし子_ボス部位損傷_部位1
$Event(12906774, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 月の落とし子_ボス部位損傷_部位2
$Event(12906775, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 月の落とし子_ボス部位損傷_部位3
$Event(12906776, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 月の落とし子_ボス部位損傷_部位4
$Event(12906777, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 月の落とし子_ボス部位損傷_部位5
$Event(12906778, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 邪神_ボス部位損傷_部位1
$Event(12906779, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 邪神_ボス部位損傷_部位2
$Event(12906780, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 邪神_ボス部位損傷_部位3
$Event(12906781, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 邪神_ボス部位損傷_部位4
$Event(12906782, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 邪神_ボス部位損傷_部位5
$Event(12906783, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の骨獣_ボス部位損傷_部位1
$Event(12906784, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の骨獣_ボス部位損傷_部位2
$Event(12906785, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の骨獣_ボス部位損傷_部位3
$Event(12906786, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の骨獣_ボス部位損傷_部位4
$Event(12906787, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 嵐の骨獣_ボス部位損傷_部位5
$Event(12906788, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// フレッシュゴーレム_部位損傷_XX
$Event(12906827, Default, function(X0_4, X4_2, X6_2, X8_4, X12_4, X16_4) {
    CreateNPCPart(X0_4, X6_2, X4_2, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X6_2, X4_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    SetSpEffect(X0_4, X16_4, false);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    ClearSpEffect(X0_4, X16_4);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// フレッシュゴーレム_血豆部位破壊_XX
$Event(12906828, Default, function(X0_4, X4_2, X6_2, X8_4, X12_4, X16_1, X17_1) {
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(X0_4, 1, ON);
        ChangeCharacterHitmask(X0_4, 2, ON);
        ChangeCharacterHitmask(X0_4, 3, ON);
        ChangeCharacterHitmask(X0_4, 4, ON);
        ChangeCharacterDispmask(X0_4, 9, OFF);
        ChangeCharacterDispmask(X0_4, 10, OFF);
        ChangeCharacterDispmask(X0_4, 11, OFF);
        ChangeCharacterDispmask(X0_4, 12, OFF);
        ChangeCharacterHitmask(X0_4, X16_1, OFF);
        ChangeCharacterDispmask(X0_4, X17_1, ON);
        CreateNPCPart(X0_4, X6_2, X4_2, 100, 1, 1.5, false, false);
        SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
        hp = NPCPartHP(X0_4, X8_4) <= 0;
        hp2 = HPRatio(X0_4) <= 0;
        WaitFor(hp || hp2);
        EndIf(hp2.Passed);
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
        SetSpEffect(X0_4, 5667, true);
        RequestCharacterAIReplan(X0_4);
    }
L0:
    ChangeCharacterHitmask(X0_4, X16_1, ON);
    ChangeCharacterDispmask(X0_4, X17_1, OFF);
});

// ボス部屋入場_ホスト_再戦_前座
$Event(12906789, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X20_4));
    if (!EventFlag(X24_4)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(X4_4, Disabled);
            DeleteMapSFX(X12_4, false);
        }
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X16_4, false);
        WaitFor(!EventFlag(X20_4) && EventFlag(X24_4));
        DeactivateObject(X4_4, Enabled);
        DeactivateObject(X8_4, Enabled);
        SpawnMapSFX(X12_4);
        SpawnMapSFX(X16_4);
    }
L0:
    flagChrAct = !EventFlag(X20_4) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2900010, X4_4);
    flag = EventFlag(X20_4);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive)
        && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    timeChr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || timeChr);
    if (!timeChr.Passed) {
        SetEventFlag(X28_4, ON);
    }
L1:
    RestartEvent();
});

// ボス部屋入場_ゲスト_前座
$Event(12906790, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    WaitFor(
        !EventFlag(X8_4)
            && EventFlag(X12_4)
            && EventFlag(X16_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom)
        && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    timeChr = ElapsedSeconds(4) && CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(chrArea || timeChr);
    if (!timeChr.Passed) {
        SetEventFlag(X20_4, ON);
    }
L0:
    RestartEvent();
});

// ボス戦闘開始_前座
$Event(12906791, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X12_4));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(X0_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
    Goto(L4);
L4:
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetEventFlag(X16_4, ON);
    CreatePlaylog(1260);
    if (X8_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X8_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X8_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X8_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
});

// ボスBGM_有効化_前座
$Event(12906792, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X8_4, Disabled);
    SetMapSoundState(X12_4, Disabled);
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(X24_4);
        }
        flagArea &= InArea(10000, X4_4);
        WaitFor(flagArea);
        EnableBossMapSound(X8_4, Enabled);
        chrFlagArea &= CharacterHasEventMessage(X0_4, 500);
    }
L0:
    chrFlagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(X24_4);
    }
    chrFlagArea &= InArea(10000, X4_4);
    WaitFor(chrFlagArea);
    EnableBossMapSound(X8_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X12_4, Enabled);
});

// ボスカメラ切替_前座
$Event(12906794, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(X0_4) > 0 && !EntityInRadiusOfEntity(10000, X0_4, X12_4));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// ボス戦闘開始_デブ
$Event(12906795, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X20_4, Disabled);
    SetCharacterAIState(X24_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterHPBarDisplay(X20_4, Disabled);
    SetCharacterHPBarDisplay(X24_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterInvincibility(X20_4, Enabled);
    SetCharacterInvincibility(X24_4, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X12_4));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(X20_4, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(X24_4, AuthorityLevel.Forced);
            SetEventFlag(12907230, OFF);
            SetEventFlag(12907231, OFF);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(X0_4, 7500, true);
    SetSpEffect(X20_4, 7500, true);
    SetSpEffect(X24_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
    SetSpEffect(X20_4, 7501, true);
    SetSpEffect(X24_4, 7501, true);
    Goto(L4);
L4:
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterAIState(X20_4, Enabled);
    SetCharacterAIState(X24_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterInvincibility(X20_4, Disabled);
    SetCharacterInvincibility(X24_4, Disabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    DisplayBossHealthBar(Enabled, X20_4, 1, 304002);
    DisplayBossHealthBar(Enabled, X24_4, 2, 304003);
    SetEventFlag(X16_4, ON);
    CreatePlaylog(1260);
    if (X8_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X8_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X8_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X8_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
});

// ボス部屋入場_ホスト_再戦
$Event(12906796, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X20_4));
    if (!EventFlag(X24_4)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(X4_4, Disabled);
            DeleteMapSFX(X12_4, false);
        }
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X16_4, false);
        WaitFor(!EventFlag(X20_4) && EventFlag(X24_4));
        DeactivateObject(X4_4, Enabled);
        DeactivateObject(X8_4, Enabled);
        SpawnMapSFX(X12_4);
        SpawnMapSFX(X16_4);
    }
L0:
    flagChrAct = !EventFlag(X20_4) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2900010, X4_4);
    flag = EventFlag(X20_4);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive)
        && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    timeChr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || timeChr);
    if (!timeChr.Passed) {
        SetEventFlag(X28_4, ON);
    }
L1:
    RestartEvent();
});

// ボス部屋入場_ホスト_再戦_出口無し
$Event(12906800, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X12_4));
    if (!EventFlag(X16_4)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(X4_4, Disabled);
            DeleteMapSFX(X8_4, false);
        }
        WaitFor(!EventFlag(X12_4) && EventFlag(X16_4));
        DeactivateObject(X4_4, Enabled);
        SpawnMapSFX(X8_4);
    }
L0:
    flagChrAct = !EventFlag(X12_4) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2900010, X4_4);
    flag = EventFlag(X12_4);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive)
        && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    timeChr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || timeChr);
    if (!timeChr.Passed) {
        SetEventFlag(X20_4, ON);
    }
L1:
    RestartEvent();
});

// ボス部屋入場_ゲスト
$Event(12906802, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    WaitFor(
        !EventFlag(X8_4)
            && EventFlag(X12_4)
            && EventFlag(X16_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom)
        && (InArea(10000, 2412801) || CharacterHasEventMessage(10000, 700));
    timeChr = ElapsedSeconds(4) && CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(chrArea || timeChr);
    if (!timeChr.Passed) {
        SetEventFlag(X20_4, ON);
    }
L0:
    RestartEvent();
});

// ボス戦闘開始
$Event(12906806, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X12_4));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
            SetEventFlag(12907230, OFF);
            SetEventFlag(12907231, OFF);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(X0_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
    Goto(L4);
L4:
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetEventFlag(X16_4, ON);
    CreatePlaylog(1260);
    if (X8_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X8_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X8_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X8_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
});

// ボスBGM_有効化
$Event(12906810, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X8_4, Disabled);
    SetMapSoundState(X12_4, Disabled);
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(X24_4);
        }
        flagArea &= InArea(10000, X4_4);
        WaitFor(flagArea);
        EnableBossMapSound(X8_4, Enabled);
        chrFlagArea &= CharacterHasEventMessage(X0_4, 500);
    }
L0:
    chrFlagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(X24_4);
    }
    chrFlagArea &= InArea(10000, X4_4);
    WaitFor(chrFlagArea);
    EnableBossMapSound(X8_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X12_4, Enabled);
});

// ボスBGM_有効化_2体
$Event(12906978, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X8_4, Disabled);
    SetMapSoundState(X12_4, Disabled);
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(X24_4);
        }
        flagArea &= InArea(10000, X4_4);
        WaitFor(flagArea);
        EnableBossMapSound(X8_4, Enabled);
        flagArea2 &= EventFlag(X0_4);
    }
L0:
    flagArea2 &= !EventFlag(X16_4) && EventFlag(X20_4);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(X24_4);
    }
    flagArea2 &= InArea(10000, X4_4);
    WaitFor(flagArea2);
    EnableBossMapSound(X8_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X12_4, Enabled);
});

// ボスカメラ切替
$Event(12906818, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(X0_4) > 0 && !EntityInRadiusOfEntity(10000, X0_4, X12_4));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// ボスカメラ切替_デブ
$Event(12906822, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(
        (HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4))
            || (HPRatio(X16_4) > 0 && EntityInRadiusOfEntity(10000, X16_4, X8_4))
            || (HPRatio(X20_4) > 0 && EntityInRadiusOfEntity(10000, X20_4, X8_4)));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        !((HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X12_4))
            || (HPRatio(X16_4) > 0 && EntityInRadiusOfEntity(10000, X16_4, X12_4))
            || (HPRatio(X20_4) > 0 && EntityInRadiusOfEntity(10000, X20_4, X12_4))));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// ボスカメラ切替_2体
$Event(12906823, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(
        (HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4))
            || (HPRatio(X16_4) > 0 && EventFlag(X20_4) && EntityInRadiusOfEntity(10000, X16_4, X8_4)));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        !((HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X12_4))
            || (HPRatio(X16_4) > 0 && EventFlag(X20_4) && EntityInRadiusOfEntity(10000, X16_4, X12_4))));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// ボス撃破時の専用フラグON
$Event(12906824, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X4_4, ON);
});

// ボス登場_2体
$Event(12906825, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (EventFlag(X28_4)) {
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    if (!EventFlag(X24_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        WaitFor(EventFlag(X8_4) && HPRatio(X4_4) <= X20_4);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
        ChangeCharacterEnableState(X0_4, Enabled);
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929203);
    }
L1:
    DisplayBossHealthBar(Enabled, X0_4, 1, X16_4);
    SetEventFlag(X24_4, ON);
});

// 炎の獣_部位損傷_部位1
$Event(12906841, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 400, 1, 0.75, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 炎の獣_部位損傷_部位2
$Event(12906843, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 80, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 炎の獣_部位損傷_部位3
$Event(12906845, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 80, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 炎の獣_部位損傷_部位4
$Event(12906847, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 280, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 炎の獣_部位損傷_部位5
$Event(12906849, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 280, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 炎の獣_SFXセットアップ
$Event(12906851, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    EndIf(!EventFlag(X4_4));
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, 7020, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 7021, false, false, false);
});

// 始祖ビースト_部位損傷_部位1
$Event(12906853, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 始祖ビースト_部位損傷_部位2
$Event(12906855, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 始祖ビースト_部位損傷_部位3
$Event(12906857, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 始祖ビースト_部位損傷_部位4
$Event(12906859, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 始祖ビースト_部位損傷_部位5
$Event(12906861, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 嵐の獣_部位損傷_部位1
$Event(12906831, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 嵐の獣_部位損傷_部位2
$Event(12906833, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 嵐の獣_部位損傷_部位3
$Event(12906835, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 嵐の獣_部位損傷_部位4
$Event(12906837, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 嵐の獣_部位損傷_部位5
$Event(12906839, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// ボスBGM_無効化_前座
$Event(12906793, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスBGM_無効化
$Event(12906814, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// 邪神_ヒートアップ_1回目
$Event(12906869, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.7 && HPRatio(X0_4) != 0);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X4_4, ON);
});

// 邪神_ヒートアップ_2回目
$Event(12906870, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.33 && HPRatio(X0_4) != 0 && EventFlag(X4_4));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 邪神_腕を抜く
$Event(12906865, Restart, function(X0_4, X4_2, X8_4, X12_2, X14_1, X15_1) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(X0_4, X15_1, ON);
        WaitFor(CharacterHasSpEffect(X0_4, 5402));
    }
L0:
    ChangeCharacterHitmask(X0_4, X14_1, ON);
    ChangeCharacterHitmask(X0_4, X15_1, OFF);
    CreateNPCPart(X0_4, X4_2, X12_2, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
});

// 邪神_部位損傷_部位1
$Event(12906871, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 300, 1, 1.4, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 2.1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位3
$Event(12906879, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 400, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 488, true);
    ClearSpEffect(X0_4, 498);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 498, true);
    ClearSpEffect(X0_4, 488);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位4
$Event(12906872, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 485, true);
    ClearSpEffect(X0_4, 495);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 495, true);
    ClearSpEffect(X0_4, 485);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位5
$Event(12906875, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 230, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位6
$Event(12906873, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part6, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part6, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 486, true);
    ClearSpEffect(X0_4, 496);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 496, true);
    ClearSpEffect(X0_4, 486);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位7
$Event(12906876, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part7, 170, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part7, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位8
$Event(12906874, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part8, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part8, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 487, true);
    ClearSpEffect(X0_4, 497);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 497, true);
    ClearSpEffect(X0_4, 487);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位9
$Event(12906877, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part9, 170, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part9, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位10
$Event(12906878, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part10, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part10, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位11
$Event(12906880, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part11, 150, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part11, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 488, true);
    ClearSpEffect(X0_4, 498);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 498, true);
    ClearSpEffect(X0_4, 488);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 邪神_部位損傷_部位12
$Event(12906881, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part12, 150, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part12, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 488, true);
    ClearSpEffect(X0_4, 498);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 498, true);
    ClearSpEffect(X0_4, 488);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 嵐の獣（骨）_ヒートアップ
$Event(12904889, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    RequestCharacterAICommand(X0_4, 2, 1);
    WaitFor(HPRatio(X0_4) < 0.67 && CharacterHasSpEffect(X0_4, 5402));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, 100, 2);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    RequestCharacterAICommand(X0_4, -1, 2);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, 3, 1);
});

// 嵐の獣（骨）_部位損傷_部位1
$Event(12904723, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 180, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 130, true);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 嵐の獣（骨）_部位損傷_部位2
$Event(12904724, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 嵐の獣（骨）_部位損傷_部位3
$Event(12904725, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 嵐の獣（骨）_部位損傷_部位4
$Event(12904726, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 嵐の獣（骨）_部位損傷_部位5
$Event(12904727, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// 白痴の蜘蛛_子蜘蛛補充_XX
$Event(12906882, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetSpEffect(X0_4, 5401, false);
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X4_4));
    WaitFor(
        EventFlag(X8_4)
            && (RandomElapsedSeconds(0, 1)
                || (ElapsedSeconds(1) && CharacterType(10000, TargetType.WhitePhantom))));
    SetCharacterGravity(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    WaitFixedTimeFrames(64);
    SetCharacterAIState(X0_4, Enabled);
});

// 白痴の蜘蛛_ヒートアップ_XX
$Event(12906863, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(HPRatio(X0_4) <= 0.75 && HPRatio(X0_4) != 0);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10) && HPRatio(X0_4) != 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    WaitFor(HPRatio(X0_4) <= 0.5 && HPRatio(X0_4) != 0);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10) && HPRatio(X0_4) != 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 111, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X16_4, ON);
});

// 白痴の蜘蛛_子蜘蛛強制死亡_XX
$Event(12906912, Default, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    chrFlag &= CharacterDead(X0_4);
    if (chrFlag) {
        ChangeCharacterEnableState(X4_4, Disabled);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    chrFlag &= CharacterDead(X0_4) && EventFlag(X8_4);
    WaitFor(chrFlag);
    ForceCharacterDeath(X4_4, false);
});

// 白痴の蜘蛛_左半身損傷_XX
$Event(12906864, Default, function(X0_4) {
    CreateNPCPart(X0_4, 2, NPCPartType.Part2, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 2, 59, 59);
    hp = NPCPartHP(X0_4, 2) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7000, false, false, false);
        SetNPCPartHP(X0_4, 2, 100, true);
        hp3 = NPCPartHP(X0_4, 2) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7001, false, false, false);
            SetNPCPartHP(X0_4, 2, 50, true);
            hp5 = NPCPartHP(X0_4, 2) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7002, false, false, false);
                CreateNPCPart(X0_4, 2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(X0_4, 2, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 2, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 白痴の蜘蛛_右半身損傷_XX
$Event(12906867, Default, function(X0_4) {
    CreateNPCPart(X0_4, 3, NPCPartType.Part3, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 3, 59, 59);
    hp = NPCPartHP(X0_4, 3) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7005, false, false, false);
        SetNPCPartHP(X0_4, 3, 100, true);
        hp3 = NPCPartHP(X0_4, 3) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7006, false, false, false);
            SetNPCPartHP(X0_4, 3, 50, true);
            hp5 = NPCPartHP(X0_4, 3) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7007, false, false, false);
                CreateNPCPart(X0_4, 3, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(X0_4, 3, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 3, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
    RestartEvent();
});

// 白痴の蜘蛛_頭部部位設定_XX
$Event(12906868, Default, function(X0_4) {
    EndIf(EventFlag(13201800));
    CreateNPCPart(X0_4, 1, NPCPartType.Part1, 9999999, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(X0_4, 1, 61, 61);
    hp = NPCPartHP(X0_4, 1) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    RestartEvent();
});

// 月からの使者（大）_触手ワープ
$Event(12906829, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        SetCharacterGravity(X4_4, Disabled);
    }
L0:
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, X8_4, X0_4);
    RestartEvent();
});

// 月からの使者（大）_触手無効化_XX
$Event(12904873, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        WaitFor(CharacterDead(X0_4));
    }
L0:
    ChangeCharacterEnableState(X4_4, Disabled);
});

// 月からの使者（大）触手の伸縮制御_XX
$Event(12904875, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(HPRatio(X0_4) <= 0.5);
    ForceAnimationPlayback(X4_4, 3000, false, false, false);
});

// 血に渇いた獣_ヒートアップ
$Event(12904884, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(HPRatio(X0_4) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(HPRatio(X0_4) < 0.33);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 月の落とし子_コジマ粒子
$Event(12904734, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, 5650) && CharacterHPValue(X0_4) < 0);
    ShootBullet(2900000, X0_4, 6, 225100310, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// 月の落とし子_ヒートアップ
$Event(12904735, Default, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(HPRatio(X0_4) < 0.5);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 月の落とし子_部位損傷_部位5
$Event(12904728, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 400, 1, 2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 月の落とし子_部位損傷_部位1
$Event(12904729, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 月の落とし子_部位損傷_部位2
$Event(12904730, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 月の落とし子_部位損傷_部位3
$Event(12904731, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 月の落とし子_部位損傷_部位4
$Event(12904732, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// 花嫁分身が出現する
$Event(12906942, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X20_4));
    WaitFor(CharacterHasEventMessage(X20_4, 90) && EventFlag(X16_4));
    SetSpEffect(X0_4, 5610, false);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    WaitFor(EventFlag(X8_4));
    RestartEvent();
});

// 花嫁分身が消滅する
$Event(12906960, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X12_4));
    dmg = CharacterDamagedBy(X0_4, 10000)
        || CharacterDamagedBy(X0_4, 2900248)
        || CharacterDamagedBy(X0_4, 2900249)
        || CharacterDamagedBy(X0_4, 2900250);
    WaitFor(dmg || (CharacterHasEventMessage(X12_4, 80) && EventFlag(X8_4)));
    if (dmg.Passed) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    } else {
L0:
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    }
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X4_4, ON);
    RestartEvent();
});

// ワープOBJ_登録_XX
$Event(12907000, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterBackreadStatus(X0_4));
    if (!EventFlag(X8_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        DeactivateObject(X4_4, Disabled);
        WaitFor(EventFlag(X8_4));
        DeactivateObject(X4_4, Enabled);
        ChangeCharacterEnableState(X0_4, Enabled);
        SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100330);
    }
L0:
    RegisterHealingFountain(X12_4, X4_4, 0, 0, 0, 0);
});

// ワープOBJ_起動_XX
$Event(12907010, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    RotateCharacter(10000, X4_4, 101170, false);
    WaitFixedTimeFrames(32);
    InitializeWarpObject(X4_4);
});

// ワープOBJ_拠点へのワープ_XX
$Event(12907020, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    RotateCharacter(10000, X4_4, 101160, false);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100320);
    WaitFixedTimeSeconds(3);
    if (EventFlag(9020)) {
        WarpPlayerToRespawnPoint(2102954);
        EndEvent();
    }
    if (EventFlag(9021)) {
        WarpPlayerToRespawnPoint(2102955);
        EndEvent();
    }
    if (EventFlag(9022)) {
        WarpPlayerToRespawnPoint(2102956);
        EndEvent();
    }
    if (EventFlag(9023)) {
        WarpPlayerToRespawnPoint(2102957);
        EndEvent();
    }
    if (EventFlag(9024)) {
        WarpPlayerToRespawnPoint(2102958);
        EndEvent();
    }
    if (EventFlag(9025)) {
        WarpPlayerToRespawnPoint(2102959);
        EndEvent();
    }
    if (EventFlag(9026)) {
        WarpPlayerToRespawnPoint(2102960);
        EndEvent();
    }
    WarpPlayerToRespawnPoint(2102954);
});

// ワープOBJ_拠点からのワープ_XX
$Event(12907030, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100321);
    InitializeWarpObject(X4_4);
    SetEventFlag(X0_4, OFF);
});

// 鍵入手監視処理_XX
$Event(12907300, Default, function(X0_4, X4_4) {
    WaitFor(PlayerHasItem(ItemType.Goods, X0_4));
    SetEventFlag(X4_4, ON);
});

// マルチ侵入管理
$Event(12907400, Default, function() {
    WaitFor(
        (EventFlag(12907230)
            && EventFlag(12907231)
            && NumberOfClientsOfType(ClientType.Invader) < 2)
            || (NumberOfClientsOfType(ClientType.Invader) < 1
                && (EventFlag(12907230) || EventFlag(12907231))));
    WaitFor(ElapsedSeconds(10) && CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 9020, false);
    DisplayMessage(100002, 0);
    WaitFor(
        (!EventFlag(12907230) && !EventFlag(12907231))
            || (EventFlag(12907230)
                && !EventFlag(12907231)
                && NumberOfClientsOfType(ClientType.Invader) >= 1)
            || (!EventFlag(12907230)
                && EventFlag(12907231)
                && NumberOfClientsOfType(ClientType.Invader) >= 1)
            || (EventFlag(12907230)
                && EventFlag(12907231)
                && NumberOfClientsOfType(ClientType.Invader) >= 2));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    RestartEvent();
});

// 寡婦_登場_配置寡婦_XX
$Event(12907401, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(92905340)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L1:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineChrSpFlag &= IsOnline();
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(X16_4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineChrSpFlag &= (chrOnline || CharacterHasSpEffect(10000, 9025))
        && !EventFlag(X8_4)
        && !EventFlag(X12_4)
        && EventFlag(X20_4);
    WaitFor(onlineChrSpFlag);
    WaitFor(ElapsedSeconds(10));
    if (EventFlag(X16_4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFor(ElapsedFrames(59));
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
    SetEventFlag(12907230, ON);
});

// 寡婦_登場_出現寡婦_XX
$Event(12907405, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L1:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineChrSpFlag &= IsOnline();
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    flag = !EventFlag(X16_4) && EventFlag(X24_4);
    if (!flag) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineChrSpFlag &= (chrOnline || CharacterHasSpEffect(10000, 9025))
        && !EventFlag(X8_4)
        && !EventFlag(X12_4)
        && EventFlag(X20_4);
    WaitFor(onlineChrSpFlag);
    WaitFor(ElapsedSeconds(10));
    if (!flag.Passed) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFor(ElapsedFrames(59));
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
    SetEventFlag(12907231, ON);
});

// 寡婦_消滅_配置寡婦_XX
$Event(12907409, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    hp = HPRatio(X0_4) == 0;
    WaitFor(EventFlag(X4_4) && (hp || EventFlag(X12_4)));
    SetEventFlag(X8_4, ON);
    SetEventFlag(12907230, OFF);
    if (hp.Passed) {
        SetEventFlag(X16_4, ON);
        EndIf(EventFlag(12907231));
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

// 寡婦_消滅_出現寡婦_XX
$Event(12907413, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    hp = HPRatio(X0_4) == 0;
    WaitFor(EventFlag(X4_4) && (hp || EventFlag(X12_4)));
    SetEventFlag(X8_4, ON);
    SetEventFlag(12907231, OFF);
    if (hp.Passed) {
        SetEventFlag(X16_4, ON);
        EndIf(EventFlag(12907230));
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

// 寡婦_鐘制御_XX
$Event(12907440, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EventFlag(X4_4) && !EventFlag(X8_4));
    WaitFor(CharacterHasSpEffect(10000, 9020));
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 9020) || EventFlag(X8_4));
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// PCHP減少特殊効果付与
$Event(12907420, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!EventFlag(X4_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetSpEffect(10000, X0_4, false);
        EndEvent();
    }
    if (!(CharacterHasSpEffect(10000, 6142) && CharacterType(10000, TargetType.WhitePhantom))) {
        SetSpEffect(10000, X8_4, false);
        EndEvent();
    }
    SetSpEffect(10000, X12_4, false);
});

// 階層滞在フラグ処理_XX
$Event(12907430, Default, function(X0_4, X4_4) {
    SetEventFlag(X4_4, OFF);
    WaitFor(InArea(10000, X0_4) && HasMultiplayerState(MultiplayerState.Host));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
    WaitFor(!InArea(10000, X0_4) && HasMultiplayerState(MultiplayerState.Host));
    RestartEvent();
});

// マルチ閉じ込め壁_XX
$Event(12907600, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, true);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    DeactivateObject(X0_4, Enabled);
    SpawnMapSFX(X4_4);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer)));
    RestartEvent();
});

// ★ダンジョン_新NPC召喚_召喚可否判定_汎用
$Event(12906962, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && (!((EventFlag(12906992) && !EventFlag(12906988))
                    || (EventFlag(12906993) && !EventFlag(12906989))
                    || (EventFlag(12906994) && !EventFlag(12906990))
                    || (EventFlag(12906995) && !EventFlag(12906991)))
                    || !EventFlag(X20_4))
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && (!((EventFlag(12906992) && !EventFlag(12906988))
                    || (EventFlag(12906993) && !EventFlag(12906989))
                    || (EventFlag(12906994) && !EventFlag(12906990))
                    || (EventFlag(12906995) && !EventFlag(12906991)))
                    || !EventFlag(X20_4))));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★ダンジョン_新NPC召喚_参加_XX
$Event(12906966, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!EventFlag(X12_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
    }
    GotoIf(S0, EventFlag(X16_4));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(X12_4));
S0:
    ChangeCharacterEnableState(X4_4, Disabled);
S1:
    EndIf(EventFlag(X24_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(X4_4, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(X12_4)
            && !EventFlag(X16_4)
            && EventFlagState(ON, TargetEventFlagType.EventIDAndSlotNumber, 14)
            && !EventFlag(X24_4)
            && ActionButtonInArea(X20_4, X4_4));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(X0_4, X4_4, X8_4, X12_4, X16_4);
    SetEventFlag(X28_4, ON);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★ダンジョン_新NPC召喚_ボス部屋を目指す_XX
$Event(12906970, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// ★ダンジョン_新NPC召喚_ボス部屋に入る_XX
$Event(12906974, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    WaitFor(EventFlag(X20_4) && InArea(X0_4, X4_4));
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    RotateCharacter(X0_4, X8_4, X16_4, true);
    RestartIf(!InArea(X0_4, X12_4));
    SetEventPoint(X0_4, X8_4, 1);
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(InArea(X0_4, X24_4));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// ★ダンジョン_新NPC召喚_ボス戦中投げ無効_XX
$Event(12907610, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(X4_4)
            && !EventFlag(X8_4)
            && EventFlag(X12_4));
    SetSpEffectAndUnknown200455(X0_4, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// 時間差入場ゲスト用対処処理_XX
$Event(12907620, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
});

// 時間差入場ゲスト用対処処理_敵出現付き_XX
$Event(12907625, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X8_4, Enabled);
});

// 時間差入場ゲスト用対処処理_3体敵出現付き_XX
$Event(12907630, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X8_4, Enabled);
    WaitFixedTimeFrames(15);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X12_4, Enabled);
    WaitFixedTimeFrames(15);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X16_4, Enabled);
});


