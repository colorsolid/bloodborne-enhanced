# -*- coding: utf-8 -*-
def t210304_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210304_x12(z1=1000, z2=1001, z3=1002, z4=1003)
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210304_x11()
        assert not IsClientPlayer()

# doll

def t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z10, 0) == 1 or CheckSpecificPersonMenuIsOpen(z11, 0) == 1 or CheckSpecificPersonMenuIsOpen(z12,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z13, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210304_x1(text3=_, text4=_, z9=_):
    """State 0,5"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 0) == 1:
        """State 3"""
        TalkToPlayer(text4, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text3, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 4"""
    SetEventState(z9, 1)
    """State 2"""
    ReportConversationEndToHavokBehavior()
    """State 6"""
    return 0

def t210304_x2(text1=_, text2=_):
    """State 0,4"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 0) == 1:
        """State 3"""
        TalkToPlayer(text2, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text1, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 2"""
    ReportConversationEndToHavokBehavior()
    """State 5"""
    return 0

def t210304_x3():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

def t210304_x4():
    """State 0,1"""
    DebugEvent('話しかけられた')
    if not GetEventStatus(72100110):
        """State 2"""
        DebugEvent('挨拶_初回')
        """State 15"""
        assert t210304_x1(text3=1400100, text4=1400150, z9=72100110)
    elif GetEventStatus(72100111) == 1:
        """State 5"""
        DebugEvent('挨拶_ラスト')
        """State 19"""
        assert t210304_x2(text1=1401200, text2=1401250)
    elif GetEventStatus(1002) == 1:
        """State 4"""
        DebugEvent('挨拶_ラスト')
        """State 18"""
        assert t210304_x1(text3=1401100, text4=1401150, z9=72100111)
    elif GetEventStatus(13501800) == 1 and not GetEventStatus(72100116):
        """State 9"""
        DebugEvent('時計塔の狩人撃破後会話')
        """State 20"""
        assert t210304_x1(text3=1402200, text4=1402250, z9=72100116)
    elif GetEventStatus(12100502) == 1 and not GetEventStatus(72100118):
        """State 11"""
        DebugEvent('先代狩人への祈り会話')
        """State 22"""
        assert t210304_x1(text3=1402400, text4=1402450, z9=72100118)
    elif GetEventStatus(13601800) == 1 and not GetEventStatus(72100117):
        """State 12"""
        if GetEventStatus(1026) == 1 or GetEventStatus(1027) == 1:
            """State 10"""
            DebugEvent('DLCラスボス撃破後会話')
            """State 21"""
            assert t210304_x1(text3=1402300, text4=1402350, z9=72100117)
        else:
            """State 13"""
            DebugEvent('挨拶_汎用')
            """State 23"""
            assert t210304_x2(text1=1400200, text2=1400250)
    elif GetEventStatus(72100106) == 1:
        """State 6"""
        DebugEvent('挨拶_自動会話後')
        """State 8"""
        SetEventState(72100108, 1)
        """State 17"""
        assert t210304_x2(text1=1401900, text2=1401950)
        """State 7"""
        SetEventState(72100106, 0)
    elif GetEventStatus(72100110) == 1:
        """State 3"""
        DebugEvent('挨拶_汎用')
        """State 16"""
        assert t210304_x2(text1=1400200, text2=1400250)
    """State 14"""
    assert t210304_x6()
    """State 24"""
    return 0

def t210304_x5(z3=1002, z2=1001, z8=1002, z4=1003):
    """State 0,1"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 2"""
    return 0

def t210304_x6():
    """State 0"""
    while True:
        """State 1"""
        ClearTalkListData()
        """State 5"""
        if GetEventStatus(12100854) == 1:
            AddTalkListData(1, 200012, 12100998) # enhanced features
        else:
            AddTalkListData(1, 200012, -1) # enhanced features
        AddTalkListData(2, 15000100, -1) # channel blood echoes
        AddTalkListData(3, 15000007, -1) # talk
        AddTalkListData(4, 15000008, 12100122) # give item
        AddTalkListData(5, 200006, 12100999) # end the night
        AddTalkListData(50, 15000005, -1) # Leave
        """State 2"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not IsTalkExclusiveMenuOpen():
            break
        elif GetTalkListEntryResult() == 2: # channel blood echoes
            """State 3"""
            DebugEvent('レベルアップ')
            if GetEventStatus(6700) == 1:
                pass
            else:
                """State 14"""
                OpenGenericDialog(1, 10011000, 1, 0, 1)
                """State 15"""
                SetEventState(6700, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
            """State 22"""
            assert t210304_x2(text1=1400300, text2=1400300) and CheckSpecificPersonTalkHasEnded(0) == 1
            """State 10"""
            SetEventState(72100100, 1)
            assert GetEventStatus(72100101) == 1 and GetEventStatus(72100102) == 1
            """State 7"""
            OpenSoul()
            assert not CheckSpecificPersonMenuIsOpen(23, 0)
            """State 6"""
            DebugEvent('会話終了通知_話す')
            ReportConversationEndToHavokBehavior()
            """State 11"""
            SetEventState(72100100, 0)
            assert not GetEventStatus(72100101) and not GetEventStatus(72100102)
            continue
        elif GetTalkListEntryResult() == 3: # talk
            """State 9"""
            DebugEvent('世間話')
            if GetEventStatus(9802) == 1:
                """State 19"""
                DebugEvent('異様な月')
                """State 29"""
                assert t210304_x2(text1=1400900, text2=1400950)
                continue
            elif GetEventStatus(9801) == 1:
                """State 20"""
                DebugEvent('夜')
                """State 28"""
                assert t210304_x2(text1=1400800, text2=1400850)
                continue
            elif GetEventStatus(9800) == 1:
                """State 21"""
                DebugEvent('夕')
                """State 27"""
                assert t210304_x2(text1=1400700, text2=1400750)
                continue
            else:
                """State 12"""
                DebugEvent('15時')
                if not GetEventStatus(72100113):
                    """State 18"""
                    DebugEvent('ゲールマンと会話済みでない')
                    """State 26"""
                    assert t210304_x1(text3=1400500, text4=1400550, z9=72100113)
                    continue
                else:
                    """State 17"""
                    DebugEvent('ゲールマンと会話済み')
                    """State 25"""
                    assert t210304_x2(text1=1400600, text2=1400650)
                    continue
        elif GetTalkListEntryResult() == 4: # give item
            """State 8"""
            DebugEvent('渡す')
            """State 16"""
            SetEventState(72100114, 1)
            """State 23"""
            assert t210304_x2(text1=1401000, text2=1401050)
            """State 13"""
            SetEventState(72100112, 1)
            assert not IsMenuOpen(63)
        elif GetTalkListEntryResult() == 5: # end the night
            call = t210304_x16()
            if call.Get() == 1:
                return 0
            elif call.Done():
                ForceCloseGenericDialog()
                continue
        elif GetTalkListEntryResult() == 1: # enhanced features
            call = t210304_x17()
            if call.Get() == 1:
                ForceCloseMenu()
                continue
            elif call.Done():
                pass
        """State 30"""
        Label('L0')
        return 0
    """State 4"""
    DebugEvent('立ち去る＆キャンセル')
    """State 24"""
    assert t210304_x2(text1=1400400, text2=1400450)
    Goto('L0')

def t210304_x7(z6=72100102, z7=1401700):
    """State 0,1"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 2"""
    return 0

def t210304_x8():
    """State 0,2"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 1"""
    DebugEvent('PC死亡待機')
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t210304_x9():
    """State 0,2"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 1"""
    SetEventState(72100100, 0)
    """State 3"""
    return 0

def t210304_x10(z5=6003, z1=1000, z2=1001, z3=1002, z4=1003):
    """State 0,1"""
    DebugEvent('待機_会話可能判定')
    assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
            not IsPlayerDead() and not IsCharacterDisabled())
    """State 3"""
    assert not GetEventStatus(1003)
    """State 2"""
    DebugEvent('アクションボタン判定待ち')
    def ExitPause():
        SetTalkTime(0.5)
    assert CheckActionButtonArea(6003)
    """State 4"""
    return 0

def t210304_x11():
    """State 0,1"""
    DebugEvent('クライアント待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t210304_x12(z1=1000, z2=1001, z3=1002, z4=1003):
    """State 0"""
    Label('L0')
    if GetEventStatus(72100105) == 1 and not GetEventStatus(72100107):
        """State 9"""
        Label('L1')
        call = t210304_x15()
        if call.Done():
            Goto('L0')
        elif IsAttackedBySomeone() == 1 or GetEventStatus(1003) == 1:
            """State 4"""
            Label('L2')
            DebugEvent('サブステート：話者が攻撃された')
            call = t210304_x5(z3=z3, z2=z2, z8=z3, z4=z4)
            def ExitPause():
                RemoveMyAggro()
            if call.Done():
                while True:
                    """State 5"""
                    Label('L3')
                    RemoveMyAggro()
                    call = t210304_x10(z5=6003, z1=z1, z2=z2, z3=z3, z4=z4)
                    if call.Done():
                        """State 6"""
                        DebugEvent('サブステート：通常会話')
                        call = t210304_x4()
                        if call.Done():
                            pass
                        elif IsPlayerDead() == 1:
                            """State 2"""
                            Label('L4')
                            DebugEvent('サブステート：PC死亡')
                            call = t210304_x8()
                            if IsAttackedBySomeone() == 1:
                                Goto('L2')
                            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                                break
                        elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                            break
                        elif IsAttackedBySomeone() == 1 or GetEventStatus(1003) == 1:
                            Goto('L2')
                    elif CheckSelfDeath() == 1 or GetEventStatus(12105100) == 1:
                        while True:
                            """State 8"""
                            Label('L5')
                            assert t210304_x14()
                            """State 7"""
                            call = t210304_x13()
                            if call.Done():
                                pass
                            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                                """State 10"""
                                DebugEvent('サブステート：会話範囲外')
                                DebugEvent('テスト')
                                assert t210304_x9()
                    elif IsAttackedBySomeone() == 1 or GetEventStatus(1003) == 1:
                        Goto('L2')
                    elif IsPlayerDead() == 1:
                        Goto('L4')
                    elif GetEventStatus(72100105) == 1 and not GetEventStatus(72100107):
                        Goto('L1')
            elif CheckSelfDeath() == 1:
                """State 3"""
                DebugEvent('サブステート：話者死亡')
                assert t210304_x7(z6=72100102, z7=1401700)
                Goto('L5')
            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                pass
            elif IsPlayerDead() == 1:
                Goto('L4')
        elif GetDistanceToPlayer() > 10:
            pass
    else:
        Goto('L3')
    """State 1"""
    DebugEvent('サブステート：会話範囲外')
    call = t210304_x9()
    if call.Done() and GetDistanceToPlayer() < 4.9:
        Goto('L3')
    elif IsAttackedBySomeone() == 1:
        Goto('L2')
    """Unused"""
    """State 11"""
    return 0

def t210304_x13():
    """State 0,1"""
    DebugEvent('調べられた')
    if GetEventStatus(12100105) == 1:
        while True:
            """State 2"""
            ClearTalkListData()
            """State 6"""
            AddTalkListData(1, 15000100, -1)
            AddTalkListData(50, 15000005, -1)
            """State 3"""
            ShowShopMessage(0, 0, 0)
            if GetTalkListEntryResult() == 1:
                """State 4"""
                DebugEvent('レベルアップ')
                if GetEventStatus(6700) == 1:
                    pass
                else:
                    """State 13"""
                    OpenGenericDialog(1, 10011000, 1, 0, 1)
                    """State 14"""
                    SetEventState(6700, 1)
                    assert not IsGenericDialogOpen()
                """State 10"""
                SetEventState(72100100, 1)
                assert GetEventStatus(72100101) == 1
                """State 9"""
                OpenSoul()
                assert not CheckSpecificPersonMenuIsOpen(23, 0)
                """State 11"""
                SetEventState(72100100, 0)
                """State 7"""
                DebugEvent('会話終了通知_レベルアップ')
                ReportConversationEndToHavokBehavior()
                assert not GetEventStatus(72100101)
            elif not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not IsTalkExclusiveMenuOpen():
                """State 5"""
                DebugEvent('立ち去る＆キャンセル_初回')
                """State 8"""
                DebugEvent('会話終了通知_立ち去る')
                ReportConversationEndToHavokBehavior()
                break
    else:
        """State 12"""
        OpenGenericDialog(7, 10011010, 1, 0, 1)
        assert not IsGenericDialogOpen()
        call = t210304_x17()
        if call.Get() == 1:
            ForceCloseMenu()
        elif call.Done():
            pass
    """State 15"""
    return 0

def t210304_x14():
    """State 0,1"""
    DebugEvent('待機_会話可能判定')
    assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
            not IsPlayerDead() and not IsCharacterDisabled())
    """State 3"""
    DebugEvent('待機_会話可能判定')
    if GetEventStatus(12105100) == 1:
        """State 2"""
        DebugEvent('アクションボタン判定待ち')
        assert CheckActionButtonArea(6004)
    else:
        """State 4"""
        DebugEvent('アクションボタン判定待ち')
        assert CheckActionButtonArea(6019)
    """State 5"""
    SetTalkDisableStateMaxDuration(0.33)
    return 0

def t210304_x15():
    """State 0"""
    assert GetDistanceToPlayer() < 5
    """State 7"""
    assert t210304_x3()
    """State 2"""
    SetEventState(72100106, 1)
    SetEventState(72100107, 1)
    """State 1"""
    if GetEventStatus(12100511) == 1:
        """State 3"""
        assert t210304_x2(text1=1402000, text2=1402000)
    elif GetEventStatus(12100510) == 1 and GetEventStatus(72100112) == 1:
        """State 4"""
        assert t210304_x2(text1=1401810, text2=1401860)
    elif GetEventStatus(12100510) == 1:
        """State 5"""
        assert t210304_x2(text1=1401800, text2=1401850)
    else:
        """State 6"""
        assert t210304_x2(text1=1402100, text2=1402100)
    """State 8"""
    return 0

# NG+
def t210304_x16():
    if GetEventStatus(12100800) == 1:
        OpenGenericDialog(2, 200007, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12100700, 1)
            return 1
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 0
    elif GetEventStatus(12100802) == 1:
        OpenGenericDialog(2, 200008, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12100702, 1)
            return 1
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 0
    return 0

# mod settings
def t210304_x17():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200031, -1) # lamp settings
        AddTalkListData(2, 200086, -1) # broken lamp
        AddTalkListData(10, 200032, -1) # misc settings
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # lamp settings
            call = t210304_x18()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 2: # broken lamp
            call = t210304_x19()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 10: # misc settings
            call = t210304_x30()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# lamp settings
def t210304_x18():
    while True:
        ClearTalkListData()

        # lamp deactivation
        AddTalkListData(1, 200039, 12100968)
        AddTalkListData(2, 200040, 12100868)

        # auto restock
        AddTalkListData(3, 200076, 12100962)
        AddTalkListData(4, 200077, 12100862)

        if GetEventStatus(12100862) == 1:
            # item drop hunt
            AddTalkListData(5, 200127, 12100955)
            AddTalkListData(6, 200128, 12100855)
        else:
            pass

        # lamp menu
        AddTalkListData(13, 200029, 12100972)
        AddTalkListData(14, 200030, 12100872)

        if GetEventStatus(12100872) == 1:
            # rest
            AddTalkListData(7, 200078, 12100961)
            AddTalkListData(8, 200079, 12100861)

            # auto rest
            if GetEventStatus(12100861):
                AddTalkListData(9, 200116, 12100958)
                AddTalkListData(10, 200117, 12100858)
            else:
                pass

            # warp
            AddTalkListData(15, 200014, 12100880)
            AddTalkListData(16, 200013, 12100980)

            # level up
            AddTalkListData(17, 200016, 12100879)
            AddTalkListData(18, 200015, 12100979)

            # workshop
            AddTalkListData(19, 200018, 12100878)
            AddTalkListData(20, 200017, 12100978)

            # memory alter
            AddTalkListData(21, 200020, 12100877)
            AddTalkListData(22, 200019, 12100977)

            # storage
            AddTalkListData(23, 200022, 12100876)
            AddTalkListData(24, 200021, 12100976)

            # messengers
            AddTalkListData(25, 200024, 12100875)
            AddTalkListData(26, 200023, 12100975)

            # change appearance
            AddTalkListData(27, 200026, 12100874)
            AddTalkListData(28, 200025, 12100974)

            # rematch bosses
            AddTalkListData(29, 200044, 12100867)
            AddTalkListData(30, 200043, 12100967)

            # quick warp to boss
            AddTalkListData(31, 200133, 12100857)
            AddTalkListData(32, 200132, 12100957)

            # quick warp to boss
            AddTalkListData(33, 200144, 12100853)
            AddTalkListData(34, 200143, 12100953)
        else:
            pass

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - prevent lamp deactivation
            SetEventState(12100968, 0)
            SetEventState(12100868, 1)
        elif GetTalkListEntryResult() == 2: # disable - prevent lamp deactivation
            SetEventState(12100968, 1)
            SetEventState(12100868, 0)
        elif GetTalkListEntryResult() == 3: # enable - auto restock
            SetEventState(12100962, 0)
            SetEventState(12100862, 1)
        elif GetTalkListEntryResult() == 4: # disable - auto restock
            SetEventState(12100962, 1)
            SetEventState(12100862, 0)
        elif GetTalkListEntryResult() == 5: # enable - drop hunt
            SetEventState(12100955, 0)
            SetEventState(12100855, 1)
        elif GetTalkListEntryResult() == 6: # disable - drop hunt
            SetEventState(12100955, 1)
            SetEventState(12100855, 0)
        elif GetTalkListEntryResult() == 7: # enable - resting
            SetEventState(12100961, 0)
            SetEventState(12100861, 1)
        elif GetTalkListEntryResult() == 8: # disable - resting
            SetEventState(12100961, 1)
            SetEventState(12100861, 0)
        elif GetTalkListEntryResult() == 9: # enable - auto resting
            SetEventState(12100958, 0)
            SetEventState(12100858, 1)
        elif GetTalkListEntryResult() == 10: # disable - auto resting
            SetEventState(12100958, 1)
            SetEventState(12100858, 0)
        elif GetTalkListEntryResult() == 13: # enable - lamp menu
            SetEventState(12100972, 0)
            SetEventState(12100872, 1)
        elif GetTalkListEntryResult() == 14: # disable - lamp menu
            SetEventState(12100972, 1)
            SetEventState(12100872, 0)
        elif GetTalkListEntryResult() == 15: # disable - warp menu
            SetEventState(12100980, 1)
            SetEventState(12100880, 0)
        elif GetTalkListEntryResult() == 16: # enable - warp menu
            SetEventState(12100980, 0)
            SetEventState(12100880, 1)
        elif GetTalkListEntryResult() == 17: # disable - level up
            SetEventState(12100979, 1)
            SetEventState(12100879, 0)
        elif GetTalkListEntryResult() == 18: # enable - level up
            SetEventState(12100979, 0)
            SetEventState(12100879, 1)
        elif GetTalkListEntryResult() == 19: # disable - workshop
            SetEventState(12100978, 1)
            SetEventState(12100878, 0)
        elif GetTalkListEntryResult() == 20: # enable - workshop
            SetEventState(12100978, 0)
            SetEventState(12100878, 1)
        elif GetTalkListEntryResult() == 21: # disable - memory alter
            SetEventState(12100977, 1)
            SetEventState(12100877, 0)
        elif GetTalkListEntryResult() == 22: # enable - memory alter
            SetEventState(12100977, 0)
            SetEventState(12100877, 1)
        elif GetTalkListEntryResult() == 23: # disable - storage
            SetEventState(12100976, 1)
            SetEventState(12100876, 0)
        elif GetTalkListEntryResult() == 24: # enable - storage
            SetEventState(12100976, 0)
            SetEventState(12100876, 1)
        elif GetTalkListEntryResult() == 25: # disable - messengers
            SetEventState(12100975, 1)
            SetEventState(12100875, 0)
        elif GetTalkListEntryResult() == 26: # enable - messengers
            SetEventState(12100975, 0)
            SetEventState(12100875, 1)
        elif GetTalkListEntryResult() == 27: # disable - change appearance
            SetEventState(12100974, 1)
            SetEventState(12100874, 0)
        elif GetTalkListEntryResult() == 28: # enable - change appearance
            SetEventState(12100974, 0)
            SetEventState(12100874, 1)
        elif GetTalkListEntryResult() == 29: # disable - boss rematches
            SetEventState(12100967, 1)
            SetEventState(12100867, 0)
        elif GetTalkListEntryResult() == 30: # enable - boss rematches
            SetEventState(12100967, 0)
            SetEventState(12100867, 1)
        elif GetTalkListEntryResult() == 31: # disable - quick warp to boss
            SetEventState(12100957, 1)
            SetEventState(12100857, 0)
        elif GetTalkListEntryResult() == 32: # enable - quick warp to boss
            SetEventState(12100957, 0)
            SetEventState(12100857, 1)
        elif GetTalkListEntryResult() == 33: # disable - iosefka lamp spawn at start
            SetEventState(12100953, 1)
            SetEventState(12100853, 0)
        elif GetTalkListEntryResult() == 34: # enable - iosefka lamp spawn at start
            SetEventState(12100953, 0)
            SetEventState(12100853, 1)

# broken lamp settings
def t210304_x19():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200070, 12100965) # enable - broken lamp
        AddTalkListData(2, 200071, 12100865) # disable - broken lamp

        if GetEventStatus(12100865) == 1:
            AddTalkListData(5, 200074, 12100963) # lamp - victory respawn location
            AddTalkListData(6, 200075, 12100863) # dream - victory respawn location

            AddTalkListData(7, 200114, 12100959) # lamp - death respawn location
            AddTalkListData(8, 200115, 12100859) # dream - death respawn location
        else:
            pass

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - broken lamp
            SetEventState(12100965, 0)
            SetEventState(12100865, 1)
        elif GetTalkListEntryResult() == 2: # disable - broken lamp
            SetEventState(12100965, 1)
            SetEventState(12100865, 0)
        elif GetTalkListEntryResult() == 5: # lamp - victory respawn location
            SetEventState(12100963, 0)
            SetEventState(12100863, 1)
        elif GetTalkListEntryResult() == 6: # dream - victory respawn location
            SetEventState(12100963, 1)
            SetEventState(12100863, 0)
        elif GetTalkListEntryResult() == 7: # lamp - death respawn location
            SetEventState(12100959, 0)
            SetEventState(12100859, 1)
        elif GetTalkListEntryResult() == 8: # dream - death respawn location
            SetEventState(12100959, 1)
            SetEventState(12100859, 0)

# misc settings
def t210304_x30():
    while True:
        ClearTalkListData()
        # prevent auto ng+
        AddTalkListData(1, 200028, 12100973)
        AddTalkListData(2, 200027, 12100873)

        # stocked shop
        AddTalkListData(3, 200033, 12100971)
        AddTalkListData(4, 200034, 12100871)

        if GetEventStatus(12100865) == 1 or GetEventStatus(12100867) == 1:
            # auto rematch
            AddTalkListData(5, 200072, 12100964)
            AddTalkListData(6, 200073, 12100864)

            # rematch cutscenes
            AddTalkListData(7, 200068, 12100866)
            AddTalkListData(8, 200067, 12100966)
        else:
            pass

        # unlocked chalice dungeons
        AddTalkListData(9, 200080, 12100960)
        AddTalkListData(10, 200081, 12100860)

        # random time of day
        AddTalkListData(11, 200129, 12100956)
        AddTalkListData(12, 200130, 12100856)

        # doll gesture
        AddTalkListData(13, 200138, 12100954)
        AddTalkListData(14, 200139, 12100854)

        AddTalkListData(20, 200145, 12102010) # increase cycle

        AddTalkListData(21, 200161, 12102033) # random enabled - switch to none
        AddTalkListData(22, 200162, 12102034) # none enabled - switch to dark fog
        AddTalkListData(23, 200163, 12102035) # dark fog enabled - switch to random

        AddTalkListData(30, 200153, 12102202) # activate all lamps
        AddTalkListData(31, 200155, 12102212) # activate all shortcuts

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - prevent auto ng+
            SetEventState(12100973, 0)
            SetEventState(12100873, 1)
        elif GetTalkListEntryResult() == 2: # disable - prevent auto ng+
            SetEventState(12100973, 1)
            SetEventState(12100873, 0)
        elif GetTalkListEntryResult() == 3: # enable - stocked shop
            SetEventState(12100971, 0)
            SetEventState(12100871, 1)
        elif GetTalkListEntryResult() == 4: # disable - stocked shop
            SetEventState(12100971, 1)
            SetEventState(12100871, 0)
        elif GetTalkListEntryResult() == 5: # enable - restart fight on death
            SetEventState(12100964, 0)
            SetEventState(12100864, 1)
        elif GetTalkListEntryResult() == 6: # disable - restart fight on death
            SetEventState(12100964, 1)
            SetEventState(12100864, 0)
        elif GetTalkListEntryResult() == 7: # disable - rematch cutscenes
            SetEventState(12100966, 1)
            SetEventState(12100866, 0)
        elif GetTalkListEntryResult() == 8: # enable - rematch cutscenes
            SetEventState(12100966, 0)
            SetEventState(12100866, 1)
        elif GetTalkListEntryResult() == 9: # enable - unlocked chalice dungeons
            SetEventState(12100960, 0)
            SetEventState(12100860, 1)
        elif GetTalkListEntryResult() == 10: # disable - unlocked chalice dungeons
            SetEventState(12100960, 1)
            SetEventState(12100860, 0)
        elif GetTalkListEntryResult() == 11: # enable - random time of day
            SetEventState(12100956, 0)
            SetEventState(12100856, 1)
        elif GetTalkListEntryResult() == 12: # disable - random time of day
            SetEventState(12100956, 1)
            SetEventState(12100856, 0)
        elif GetTalkListEntryResult() == 13: # enable - doll gesture
            SetEventState(12100954, 0)
            SetEventState(12100854, 1)
        elif GetTalkListEntryResult() == 14: # disable - doll gesture
            SetEventState(12100954, 1)
            SetEventState(12100854, 0)
        elif GetTalkListEntryResult() == 20: # increase cycle
            call = t210304_x50()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 21: # switch from random to no effect
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 1)
            SetEventState(12102035, 0)
        elif GetTalkListEntryResult() == 22: # switch from no effect to dark fog
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 0)
            SetEventState(12102035, 1)
        elif GetTalkListEntryResult() == 23: # switch from dark fog to random effect
            SetEventState(12102031, 1)
            SetEventState(12102033, 1)
            SetEventState(12102034, 0)
            SetEventState(12102035, 0)
        elif GetTalkListEntryResult() == 30: # activate all lamps
            call = t210304_x51()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 31: # activate all shortcuts
            call = t210304_x52()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# increase cycle
def t210304_x50(flag=999):
    while True:
        OpenGenericDialog(2, 200146, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102001, 1)
            SetEventState(flag, 1)
            
            if GetEventStatus(12102003) == 1:
                OpenGenericDialog(1, 200147, 1, 0, 1)
            elif GetEventStatus(12102004) == 1:
                OpenGenericDialog(1, 200148, 1, 0, 1)
            elif GetEventStatus(12102005) == 1:
                OpenGenericDialog(1, 200149, 1, 0, 1)
            elif GetEventStatus(12102006) == 1:
                OpenGenericDialog(1, 200150, 1, 0, 1)
            elif GetEventStatus(12102007) == 1:
                OpenGenericDialog(1, 200151, 1, 0, 1)
            elif GetEventStatus(12102008) == 1:
                OpenGenericDialog(1, 200152, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# activate all lamps
def t210304_x51():
    while True:
        OpenGenericDialog(2, 200154, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102201, 1)
            OpenGenericDialog(1, 200158, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# unlock all shortcuts
def t210304_x52():
    while True:
        OpenGenericDialog(2, 200156, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102211, 1)
            OpenGenericDialog(1, 200157, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1