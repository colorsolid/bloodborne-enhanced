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
        AddTalkListData(1, 15000100, -1)
        AddTalkListData(2, 15000007, -1)
        AddTalkListData(3, 15000008, 12100122)
        AddTalkListData(50, 15000005, -1)
        """State 2"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not IsTalkExclusiveMenuOpen():
            break
        elif GetTalkListEntryResult() == 1:
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
        elif GetTalkListEntryResult() == 2:
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
        elif GetTalkListEntryResult() == 3:
            """State 8"""
            DebugEvent('渡す')
            """State 16"""
            SetEventState(72100114, 1)
            """State 23"""
            assert t210304_x2(text1=1401000, text2=1401050)
            """State 13"""
            SetEventState(72100112, 1)
            assert not IsMenuOpen(63)
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

